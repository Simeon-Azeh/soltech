import React, { useEffect, useState } from 'react';
import { Menu, Dropdown, Button, Modal, Form, Select, message, Spin, Input } from 'antd';
import { MoreOutlined, SyncOutlined, ArrowUpOutlined, CloseOutlined } from '@ant-design/icons';
import { FaWifi, FaGamepad, FaLaptopHouse } from 'react-icons/fa';
import dayjs from 'dayjs';
import { db } from '../firebase';
import { collection, addDoc, query, where, getDocs } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { Gamepad2 } from 'lucide-react';

const { Option } = Select;

const SubscriptionCards = () => {
  const [subscriptions, setSubscriptions] = useState([]);
  const [userSubscriptions, setUserSubscriptions] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentService, setCurrentService] = useState(null);
  const [form] = Form.useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [email, setEmail] = useState('');

  useEffect(() => {
    const fetchUserSubscriptions = async () => {
      try {
        const auth = getAuth();
        const user = auth.currentUser;
        if (user) {
          setEmail(user.email);
          const q = query(collection(db, "subscriptions"), where("email", "==", user.email));
          const querySnapshot = await getDocs(q);
          if (!querySnapshot.empty) {
            const userSubs = querySnapshot.docs.map(doc => doc.data());
            setUserSubscriptions(userSubs);
          } else {
            setUserSubscriptions([]);
          }
        } else {
          message.error("No authenticated user.");
        }
      } catch (error) {
        console.error("Error fetching subscriptions:", error.message);
        message.error(`Error: ${error.message}`);
      }
    };

    fetchUserSubscriptions();
  }, []);

  const defaultSubscriptions = [
    { id: 'internet', type: 'Internet', color: 'bg-[#282828]', icon: <FaWifi /> },
    { id: 'gaming', type: 'Gaming', color: 'bg-[#282828]', icon: <Gamepad2 /> },
    { id: 'workspace', type: 'Workspace', color: 'bg-[#282828]', icon: <FaLaptopHouse /> },
  ];

  const calculateRemainingDays = (expires) => {
    const today = dayjs();
    const expirationDate = dayjs(expires);
    return expirationDate.diff(today, 'day');
  };

  const handleSubscribe = (sub) => {
    setCurrentService(sub);
    setIsModalVisible(true);
  };

  const handleModalSubmit = async (values) => {
    if (!email) {
      message.error("User email is not defined.");
      return;
    }

    setIsSubmitting(true);
    const subscription = {
      id: currentService.id,
      type: currentService.type,
      plan: values.plan,
      subscribed: dayjs().format("YYYY-MM-DD"),
      expires: dayjs().add(30, "day").format("YYYY-MM-DD"),
      email,
      paid: false,
    };

    console.log("Submitting subscription:", subscription);

    try {
      await addDoc(collection(db, "subscriptions"), subscription);
      message.success("Subscription created! Please pay at the desk.");
      setIsModalVisible(false);
      form.resetFields();
      // Refresh the subscription list
      const q = query(collection(db, "subscriptions"), where("email", "==", email));
      const querySnapshot = await getDocs(q);
      if (!querySnapshot.empty) {
        const userSubs = querySnapshot.docs.map(doc => doc.data());
        setUserSubscriptions(userSubs);
      } else {
        setUserSubscriptions([]);
      }
    } catch (error) {
      console.error("Error adding subscription:", error.message);
      message.error(`Error: ${error.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const menu = (
    <Menu>
      <Menu.Item key="0" icon={<SyncOutlined />}>
        <a href="#">Renew</a>
      </Menu.Item>
      <Menu.Item key="1" icon={<ArrowUpOutlined />}>
        <a href="#">Upgrade</a>
      </Menu.Item>
      <Menu.Item key="2" icon={<CloseOutlined />}>
        <a href="#">Cancel</a>
      </Menu.Item>
    </Menu>
  );

  return (
    <>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {defaultSubscriptions.map((sub) => {
          const userSub = userSubscriptions.find((us) => us.id === sub.id);
          return (
            <div key={sub.id} className={`relative p-6 rounded-lg shadow-md ${sub.color}`}>
              <div className="absolute top-2 right-2">
                <Dropdown overlay={menu} trigger={['click']}>
                  <MoreOutlined className="text-white cursor-pointer" />
                </Dropdown>
              </div>
              <div className="flex items-center mb-4">
                <div className="mr-3 text-2xl text-white">{sub.icon}</div>
                <h2 className="text-lg font-medium text-white">{sub.type} Subscription</h2>
              </div>
              {userSub ? (
                <>
                  <div className="flex items-center gap-2">
                    <p className="text-sm text-white">Subscribed: {userSub.subscribed}</p>
                    <p className="text-white">|</p>
                    <p className="text-sm text-white">Expires: {userSub.expires}</p>
                  </div>
                  <p className="text-sm text-white">
                    Remaining Days: <span className="text-xl font-medium">{calculateRemainingDays(userSub.expires)}</span>
                  </p>
                </>
              ) : (
                <Button type="primary" className="general-sans" onClick={() => handleSubscribe(sub)}>
                  Subscribe
                </Button>
              )}
            </div>
          );
        })}
      </div>

      {/* Subscription Modal */}
      <Modal
        title={`Subscribe to ${currentService?.type}`}
        visible={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        footer={null}
      >
        <Form form={form} onFinish={handleModalSubmit} layout="vertical" className="general-sans">
          <Form.Item name="plan" label="Select Plan" rules={[{ required: true, message: 'Please select a plan!' }]}>
            <Select placeholder="Choose a plan">
              <Option value="basic">Basic - 15,000</Option>
              <Option value="pro">Pro - 25,000</Option>
              <Option value="premium">Premium - 50,000</Option>
            </Select>
          </Form.Item>
          <Form.Item name="email" label="Email" initialValue={email}>
            <Input disabled />
          </Form.Item>
          <Form.Item name="paid" initialValue={false} hidden>
            <input type="hidden" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" block disabled={isSubmitting} className="general-sans">
              {isSubmitting ? <Spin /> : 'Submit'}
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default SubscriptionCards;