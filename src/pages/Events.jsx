import React from 'react';
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';
import ServiceHero from '../components/ServiceHero';
import Button from '../components/Button';
import { Carousel, Tabs } from 'antd';
import { FaCalendarAlt, FaClock, FaUsers } from 'react-icons/fa';
import Newsletter from '../components/Newsletter';
import Banner from '../components/Banner';

const { TabPane } = Tabs;

const Events = () => {
  const upcomingEvents = [
    {
      title: 'Gaming Tournament',
      date: 'December 15, 2023',
      time: '10:00 AM',
      enrollments: 150,
      description: 'Join us for an exciting gaming tournament with amazing prizes!',
      image: 'https://img.freepik.com/free-photo/view-illuminated-neon-gaming-keyboard-setup-controller_23-2149529367.jpg?t=st=1732957654~exp=1732961254~hmac=def1cfe497fa0cf438b010fe64143c2846d0ef496754ba8a6e16eed52a8409fb&w=740',
    },
    {
      title: 'Tech Workshop',
      date: 'January 10, 2024',
      time: '2:00 PM',
      enrollments: 200,
      description: 'Enhance your skills with our hands-on tech workshop.',
      image: 'https://img.freepik.com/free-vector/combination-circuit-head-shape-artificial-intelligence-moral-electronic-world-illustration_456031-123.jpg?t=st=1732957622~exp=1732961222~hmac=5751846113f4c7c0a0a6a55a4d641743d504c3605f8319577fe03b01cbe43bc6&w=826',
    },
    {
      title: 'Innovation Summit',
      date: 'February 20, 2024',
      time: '9:00 AM',
      enrollments: 300,
      description: 'Discover the latest trends in technology at our innovation summit.',
      image: 'https://img.freepik.com/free-photo/full-shot-man-experiencing-virtual-reality_23-2149548139.jpg?t=st=1732957561~exp=1732961161~hmac=d93f47af196b0e1caf0aaa245018b0d3057ead8a40f4fa95ffb80c0df719215a&w=740',
    },
  ];

  const futureEvents = {
    gaming: [
      {
        title: 'Pro Gamer Championship',
        date: 'March 5, 2024',
        time: '11:00 AM',
        enrollments: 250,
        description: 'Compete with the best gamers in the region.',
        image: 'https://img.freepik.com/free-photo/gaming-setup-with-controller-headphones_23-2149829139.jpg?t=st=1732959982~exp=1732963582~hmac=b9e19035dda4966188d9d6447c08a02b6fd6d4958be6234d25c33ab18b0ab917&w=740',
      },
      {
        title: 'VR Gaming Experience',
        date: 'April 12, 2024',
        time: '1:00 PM',
        enrollments: 180,
        description: 'Experience the future of gaming with our VR setups.',
        image: 'https://img.freepik.com/premium-photo/african-american-guy-software-delevoper-virtual-reality-glasses-working-cyberspace-laptop_95891-9781.jpg?w=740',
      },
    ],
    tech: [
      {
        title: 'AI & Machine Learning Workshop',
        date: 'March 15, 2024',
        time: '10:00 AM',
        enrollments: 220,
        description: 'Learn the fundamentals of AI and machine learning.',
        image: 'https://img.freepik.com/premium-photo/black-man-talking-his-mobile-phone_53876-103418.jpg?w=740',
      },
      {
        title: 'Cybersecurity Bootcamp',
        date: 'April 25, 2024',
        time: '3:00 PM',
        enrollments: 190,
        description: 'Protect yourself and your organization from cyber threats.',
        image: 'https://img.freepik.com/free-photo/eye-futuristic-robot_53876-95096.jpg?t=st=1732960026~exp=1732963626~hmac=1286dfa7920d77c704b881938734426a43f70b005dbc62325cde445e8cc29ac9&w=900',
      },
    ],
    workshops: [
      {
        title: 'Startup Incubator Program',
        date: 'May 10, 2024',
        time: '9:00 AM',
        enrollments: 160,
        description: 'Get your startup off the ground with our incubator program.',
        image: 'https://img.freepik.com/free-vector/startup-words-illustration_53876-35294.jpg?t=st=1732960074~exp=1732963674~hmac=a257403c6ff0e333767a742e04abbe14e88f21106a88bf56f780b1f4c8e0f76a&w=740',
      },
      {
        title: 'Digital Marketing Seminar',
        date: 'June 5, 2024',
        time: '2:00 PM',
        enrollments: 210,
        description: 'Master the art of digital marketing with our expert-led seminar.',
        image: 'https://img.freepik.com/free-psd/marketing-blank-device-screen_23-2150453724.jpg?t=st=1732960212~exp=1732963812~hmac=17edc56b8be858c14e077fabec13bde1f3987f6b846eab80c43a178e33536c2d&w=740',
      },
    ],
  };

  return (
    <main className="relative w-screen min-h-screen overflow-x-hidden">
    
      <NavBar />
      <ServiceHero title="Events" backgroundImage="img/events-bg.jpg" />
      <section className="px-4 py-16 md:px-8">
        <div className="container pr-2 md:pr-0">
          {/* Upcoming Events Carousel */}
          <h3 className="mb-8 text-2xl font-semibold text-gray-800">Upcoming Events</h3>
          <Carousel autoplay>
  {upcomingEvents.map((event, index) => (
    <div
      key={index}
      className="relative rounded-lg shadow-lg h-50"
      style={{
        height: '800px',
      }}
    >
      <img
        src={event.image}
        alt={event.title}
        className="absolute inset-0 object-cover w-full h-full rounded-lg"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-end h-[600px] p-6 text-left text-white">
        <h4 className="mb-2 text-2xl font-bold">{event.title}</h4>
        <div className="flex items-center mb-2">
          <FaCalendarAlt className="mr-2" /> {event.date}
        </div>
        <div className="flex items-center mb-2">
          <FaClock className="mr-2" /> {event.time}
        </div>
        <div className="flex items-center mb-4">
          <FaUsers className="mr-2" /> {event.enrollments} Enrollments
        </div>
        <p className="mb-4">{event.description}</p>
        <Button title="Buy Ticket" containerClass="bg-blue-500 text-black" />
      </div>
    </div>
  ))}
</Carousel>
          {/* Future Events Tabs */}
          <h3 className="mt-16 mb-8 text-3xl font-semibold text-gray-800">Future Events</h3>
          <Tabs defaultActiveKey="1" tabBarStyle={{ color: '#000', fontFamily: 'General Sans' }}>
            <TabPane tab="Gaming" key="1">
              <div className="grid gap-8 md:grid-cols-2">
                {futureEvents.gaming.map((event, index) => (
                  <div key={index} className="p-6 bg-black rounded-lg shadow-lg">
                    <img src={event.image} alt={event.title} className="object-cover w-full h-64 mb-4 rounded-lg" />
                    <h4 className="mb-2 text-2xl font-semibold text-white">{event.title}</h4>
                    <div className="flex items-center mb-2 text-slate-100">
                      <FaCalendarAlt className="mr-2" /> {event.date}
                    </div>
                    <div className="flex items-center mb-2 text-slate-100">
                      <FaClock className="mr-2" /> {event.time}
                    </div>
                    <div className="flex items-center mb-4 text-slate-100">
                      <FaUsers className="mr-2" /> {event.enrollments} Enrollments
                    </div>
                    <p className="mb-4 text-slate-100">{event.description}</p>
                    <Button title="Register" containerClass="bg-blue-500 text-black" />
                  </div>
                ))}
              </div>
            </TabPane>
            <TabPane tab="Tech" key="2">
              <div className="grid gap-8 md:grid-cols-2">
                {futureEvents.tech.map((event, index) => (
                  <div key={index} className="p-6 bg-black rounded-lg shadow-lg">
                    <img src={event.image} alt={event.title} className="object-cover w-full h-64 mb-4 rounded-lg" />
                    <h4 className="mb-2 text-2xl font-semibold text-white">{event.title}</h4>
                    <div className="flex items-center mb-2 text-slate-100">
                      <FaCalendarAlt className="mr-2" /> {event.date}
                    </div>
                    <div className="flex items-center mb-2 text-slate-100">
                      <FaClock className="mr-2" /> {event.time}
                    </div>
                    <div className="flex items-center mb-4 text-slate-100">
                      <FaUsers className="mr-2" /> {event.enrollments} Enrollments
                    </div>
                    <p className="mb-4 text-slate-100">{event.description}</p>
                    <Button title="Register" containerClass="bg-blue-500 text-black" />
                  </div>
                ))}
              </div>
            </TabPane>
            <TabPane tab="Workshops" key="3">
              <div className="grid gap-8 md:grid-cols-2">
                {futureEvents.workshops.map((event, index) => (
                  <div key={index} className="p-6 bg-black rounded-lg shadow-lg">
                    <img src={event.image} alt={event.title} className="object-cover w-full h-64 mb-4 rounded-lg" />
                    <h4 className="mb-2 text-2xl font-bold text-slate-100">{event.title}</h4>
                    <div className="flex items-center mb-2 text-slate-100">
                      <FaCalendarAlt className="mr-2" /> {event.date}
                    </div>
                    <div className="flex items-center mb-2 text-slate-100">
                      <FaClock className="mr-2" /> {event.time}
                    </div>
                    <div className="flex items-center mb-4 text-slate-100">
                      <FaUsers className="mr-2" /> {event.enrollments} Enrollments
                    </div>
                    <p className="mb-4 text-slate-100">{event.description}</p>
                    <Button title="Register" containerClass="bg-blue-500 text-black" />
                  </div>
                ))}
              </div>
            </TabPane>
          </Tabs>
        </div>
      </section>
      <div className='px-6 mb-8'>
      <Newsletter />
      </div>
     
      <Footer />
    </main>
  );
};

export default Events;