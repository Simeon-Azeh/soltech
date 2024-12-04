import React, { useState, useEffect } from 'react';
import { collection, getDocs, query, where, updateDoc, doc, addDoc, deleteDoc } from 'firebase/firestore';
import { db, auth } from '../firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { Modal, Button, Input, Form, DatePicker, TimePicker, message, Spin } from 'antd';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Header';
import moment from 'moment';

const Workspace = () => {
  const [reservations, setReservations] = useState([]);
  const [userReservations, setUserReservations] = useState([]);
  const [allReservations, setAllReservations] = useState([]);
  const [user, setUser] = useState(null);
  const [subscription, setSubscription] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [subscribeModalIsOpen, setSubscribeModalIsOpen] = useState(false);
  const [selectedWorkstation, setSelectedWorkstation] = useState(null);
  const [hours, setHours] = useState(1);
  const [date, setDate] = useState(null);
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchUser = () => {
      onAuthStateChanged(auth, (currentUser) => {
        if (currentUser) {
          setUser(currentUser);
          fetchSubscription(currentUser.email);
          fetchUserReservations(currentUser.email);
        }
      });
    };

    const fetchSubscription = async (email) => {
      const q = query(collection(db, 'subscriptions'), where('email', '==', email), where('type', '==', 'Workspace'));
      const querySnapshot = await getDocs(q);
      if (!querySnapshot.empty) {
        const subscriptionData = querySnapshot.docs[0].data();
        console.log('Subscription data:', subscriptionData); // Log subscription data
        setSubscription(subscriptionData);
      } else {
        console.log('No subscription found for email:', email); // Log if no subscription found
      }
    };

    const fetchWorkstations = async () => {
      const querySnapshot = await getDocs(collection(db, 'workstations'));
      const workstationsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setReservations(workstationsData);
    };

    const fetchUserReservations = async (email) => {
      const q = query(collection(db, 'reservations'), where('reservedBy', '==', email));
      const querySnapshot = await getDocs(q);
      const userReservationsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setUserReservations(userReservationsData);
    };

    const fetchAllReservations = async () => {
      const querySnapshot = await getDocs(collection(db, 'reservations'));
      const allReservationsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setAllReservations(allReservationsData);
    };

    fetchUser();
    fetchWorkstations();
    fetchAllReservations();
  }, []);

  const handleReserveClick = (id) => {
    console.log('Subscription:', subscription); // Log subscription status
    if (!subscription || !subscription.paid) {
      setSubscribeModalIsOpen(true);
      return;
    }

    const maxHours = subscription.plan === 'basic' ? 1 : subscription.plan === 'pro' ? 3 : 4;
    setHours(maxHours);
    setSelectedWorkstation(id);
    setModalIsOpen(true);
  };

  const handleReserve = async (values) => {
    setLoading(true);
    const { email, date, startTime, endTime } = values;
    const reservedDate = date.format('YYYY-MM-DD');
    const reservedStartTime = startTime.format('HH:mm');
    const reservedEndTime = endTime.format('HH:mm');

    // Check if the workstation is already reserved at the selected time
    const q = query(
      collection(db, 'reservations'),
      where('workstationId', '==', selectedWorkstation),
      where('reservedDate', '==', reservedDate),
      where('reservedStartTime', '<=', reservedEndTime),
      where('reservedEndTime', '>=', reservedStartTime)
    );
    const querySnapshot = await getDocs(q);
    if (!querySnapshot.empty) {
      alert('This workstation is already reserved at the selected time.');
      setLoading(false);
      return;
    }

    await addDoc(collection(db, 'reservations'), {
      workstationId: selectedWorkstation,
      reservedBy: email,
      reservedDate,
      reservedStartTime,
      reservedEndTime,
    });

    setUserReservations((prevReservations) => [
      ...prevReservations,
      { workstationId: selectedWorkstation, reservedBy: email, reservedDate, reservedStartTime, reservedEndTime },
    ]);

    setAllReservations((prevReservations) => [
      ...prevReservations,
      { workstationId: selectedWorkstation, reservedBy: email, reservedDate, reservedStartTime, reservedEndTime },
    ]);

    setLoading(false);
    setModalIsOpen(false);
    message.success('Reservation successful!');
  };

  const handleCancelReservation = async (reservationId) => {
    setLoading(true);
    await deleteDoc(doc(db, 'reservations', reservationId));
    setUserReservations((prevReservations) =>
      prevReservations.filter((res) => res.id !== reservationId)
    );
    setAllReservations((prevReservations) =>
      prevReservations.filter((res) => res.id !== reservationId)
    );
    setLoading(false);
    message.success('Reservation cancelled successfully!');
  };

  const isWorkstationReserved = (workstationId) => {
    const now = moment();
    return allReservations.some(
      (res) =>
        res.workstationId === workstationId &&
        moment(`${res.reservedDate} ${res.reservedStartTime}`).isBefore(now) &&
        moment(`${res.reservedDate} ${res.reservedEndTime}`).isAfter(now)
    );
  };

  return (
    <div className="flex bg-[#141414] ">
      <Sidebar />
      <div className="flex-1 lg:ml-64">
        <div className="mt-[70px]">
          <Navbar />
        </div>
        <main className="p-6 pt-10">
          <h1 className="mb-4 font-medium text-white">Workspace Layout</h1>
          <svg width="400" height="200" style={{ border: '2px solid white rounded' }}>
            {reservations.map((ws, index) => (
              <text
                key={ws.id}
                x={(index % 2) * 200 + 50}
                y={Math.floor(index / 2) * 100 + 50}
                fill={isWorkstationReserved(ws.id) ? 'red' : 'white'}
              >
                {ws.label}
              </text>
            ))}
          </svg>
          <div className="grid grid-cols-1 gap-4 mt-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {reservations.map((ws) => (
              <div
                key={ws.id}
                className="relative p-4 bg-[#1f1f1f] rounded-lg shadow-md transform transition-transform hover:scale-105"
              >
                <h3 className="font-medium text-white text-md">{ws.label}</h3>
                <p className="text-sm text-gray-300">Location: {ws.location}</p>
                <div className="flex items-center">
                  <span className={`dot ${isWorkstationReserved(ws.id) ? 'bg-red-500' : 'bg-green-500'}`}></span>
                  <p className={`text-sm font-medium ${isWorkstationReserved(ws.id) ? 'text-red-500' : 'text-green-500'}`}>
                    {isWorkstationReserved(ws.id) ? 'Unavailable' : 'Available'}
                  </p>
                </div>
                <Button
                  onClick={() => handleReserveClick(ws.id)}
                  disabled={isWorkstationReserved(ws.id)}
                  className={`mt-2 font-general font-medium ${isWorkstationReserved(ws.id) ? 'bg-gray-500' : 'bg-white text-black '}`}
                >
                  {isWorkstationReserved(ws.id) ? 'Reserved' : 'Reserve'}
                </Button>
              </div>
            ))}
          </div>

          <h2 className="mt-8 text-lg font-medium text-white">Your Reservations</h2>
          <div className="grid grid-cols-1 gap-4 mt-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {userReservations.map((res) => (
              <div
                key={res.id}
                className="relative p-4 bg-[#1f1f1f] rounded-lg shadow-md transform transition-transform hover:scale-105"
              >
                <h3 className="font-medium text-white text-md">Workstation {res.workstationId}</h3>
                <p className="text-sm text-gray-300">Date: {res.reservedDate}</p>
                <p className="text-sm text-gray-300">Start Time: {res.reservedStartTime}</p>
                <p className="text-sm text-gray-300">End Time: {res.reservedEndTime}</p>
                <Button
                  onClick={() => handleCancelReservation(res.id)}
                  className="mt-2 text-white bg-red-500 font-general"
                >
                  Cancel
                </Button>
              </div>
            ))}
          </div>
        </main>
      </div>

      <Modal
        title="Reserve Workstation"
        visible={modalIsOpen}
        onCancel={() => setModalIsOpen(false)}
        footer={null}
      >
        <Spin spinning={loading}>
          <Form onFinish={handleReserve}>
            <Form.Item name="email" initialValue={user?.email} hidden>
              <Input type="hidden" />
            </Form.Item>
            <Form.Item label="Hours" name="hours">
              <Input type="number" value={hours} readOnly />
            </Form.Item>
            <Form.Item label="Date" name="date" rules={[{ required: true, message: 'Please select a date!' }]}>
              <DatePicker onChange={(date) => setDate(date)} />
            </Form.Item>
            <Form.Item label="Start Time" name="startTime" rules={[{ required: true, message: 'Please select a start time!' }]}>
              <TimePicker onChange={(time) => setStartTime(time)} />
            </Form.Item>
            <Form.Item label="End Time" name="endTime" rules={[{ required: true, message: 'Please select an end time!' }]}>
              <TimePicker onChange={(time) => setEndTime(time)} />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Reserve
              </Button>
            </Form.Item>
          </Form>
        </Spin>
      </Modal>

      <Modal
        title="Subscription Required"
        visible={subscribeModalIsOpen}
        onCancel={() => setSubscribeModalIsOpen(false)}
        footer={[
          <Button key="close" onClick={() => setSubscribeModalIsOpen(false)}>
            Close
          </Button>,
        ]}
      >
        <p>You need to subscribe to a workspace plan to reserve a workstation.</p>
      </Modal>
    </div>
  );
};

export default Workspace;