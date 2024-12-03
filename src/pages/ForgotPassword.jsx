import React, { useState } from 'react';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../firebase';
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';
import CustomButton from '../components/CustomButton';
import ServiceHero from '../components/ServiceHero';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage('');
    setSuccessMessage('');
    try {
      await sendPasswordResetEmail(auth, email);
      setSuccessMessage(`Password reset email sent to ${email}. Please check your inbox.`);
      setLoading(false);
    } catch (error) {
      console.error('Error sending password reset email', error);
      setErrorMessage(getCustomErrorMessage(error.code));
      setLoading(false);
    }
  };

  const getCustomErrorMessage = (errorCode) => {
    switch (errorCode) {
      case 'auth/user-not-found':
        return 'No user found with this email.';
      case 'auth/invalid-email':
        return 'The email address is not valid.';
      default:
        return 'An error occurred. Please try again.';
    }
  };

  return (
    <main className="relative w-screen min-h-screen overflow-x-hidden bg-white">
    
      <section className="px-4 py-16 md:px-8">
        <div className="container mx-auto">
          <div className="max-w-lg p-6 mx-auto bg-white rounded-lg ">
            <h2 className="mb-4 text-2xl font-bold text-center text-gray-800">Reset Your Password</h2>
            <p className="mb-6 text-sm text-center text-gray-600">Enter your email to receive a password reset link</p>
            
            {successMessage && (
              <div className="p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg">
                {successMessage}
              </div>
            )}

            {errorMessage && (
              <div className="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg">
                {errorMessage}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="email" className="block mb-1 text-sm font-medium text-gray-800">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <CustomButton
                title="Send Reset Link"
                loading={loading}
                disabled={loading}
              />
            </form>

            <p className="mt-6 text-sm text-center text-gray-600">
              Remembered your password?{' '}
              <a href="/login" className="text-blue-500 hover:underline">
                Login
              </a>
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default ForgotPassword;