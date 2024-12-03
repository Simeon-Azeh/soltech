import React, { useState } from 'react';
import { createUserWithEmailAndPassword, sendEmailVerification, signInWithPopup } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { auth, db, googleProvider } from '../firebase';
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';
import CustomButton from '../components/CustomButton';
import ServiceHero from '../components/ServiceHero';
import { FcGoogle } from "react-icons/fc";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const validateForm = () => {
    if (!name) {
      setErrorMessage('Full name is required.');
      return false;
    }
    if (!email) {
      setErrorMessage('Email address is required.');
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setErrorMessage('Email address is invalid.');
      return false;
    }
    if (!password) {
      setErrorMessage('Password is required.');
      return false;
    }
    if (password.length < 6) {
      setErrorMessage('Password must be at least 6 characters long.');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    if (!validateForm()) {
      return;
    }
    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      await setDoc(doc(db, 'users', user.uid), {
        name,
        email,
      });
      await sendEmailVerification(user);
      setSuccessMessage(`Account created successfully. Please verify your account with the email sent to ${email}.`);
      setLoading(false);
    } catch (error) {
      console.error('Error registering user', error);
      setErrorMessage(getCustomErrorMessage(error.code));
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setLoading(true);
    setErrorMessage('');
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      await setDoc(doc(db, 'users', user.uid), {
        name: user.displayName,
        email: user.email,
      });
      setSuccessMessage(`Account created successfully with Google.`);
      setLoading(false);
    } catch (error) {
      console.error('Error signing in with Google', error);
      setErrorMessage(getCustomErrorMessage(error.code));
      setLoading(false);
    }
  };

  const getCustomErrorMessage = (errorCode) => {
    switch (errorCode) {
      case 'auth/email-already-in-use':
        return 'The email address is already in use by another account.';
      case 'auth/invalid-email':
        return 'The email address is not valid.';
      case 'auth/weak-password':
        return 'The password is too weak.';
      case 'auth/operation-not-allowed':
        return 'Email/password accounts are not enabled.';
      case 'auth/missing-email':
        return 'Please enter a valid email address.';
      default:
        return 'An error occurred. Please try again.';
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevShow) => !prevShow);
  };

  return (
    <main className="relative w-screen min-h-screen overflow-x-hidden bg-white">
    
      <section className="px-4 py-16 md:px-8">
        <div className="container mx-auto">
          <div className="max-w-lg p-6 mx-auto bg-white rounded-lg ">
            <h2 className="mb-4 text-2xl font-bold text-center text-gray-800">Create Your Account</h2>
            <p className="mb-6 text-sm text-center text-gray-600">Enter your details to create your account</p>
            
            {successMessage ? (
              <div className="p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg">
                {successMessage}
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block mb-1 text-sm font-medium text-gray-800">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your full name"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="email" className="block mb-1 text-sm font-medium text-gray-800">
                    Email Address
                  </label>
                  <input
                    type="text"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div className="relative mb-4">
                  <label htmlFor="password" className="block mb-1 text-sm font-medium text-gray-800">
                    Password
                  </label>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute text-gray-500 right-3 top-9"
                  >
                    {showPassword ? <AiOutlineEyeInvisible size={24} /> : <AiOutlineEye size={24} />}
                  </button>
                </div>

                {errorMessage && (
                  <div className="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg">
                    {errorMessage}
                  </div>
                )}

                <CustomButton
                  title="Register"
                  loading={loading}
                  disabled={loading}
                />

                <div className="flex items-center justify-center my-6">
                  <span className="w-full h-px bg-gray-300"></span>
                  <span className="px-4 text-sm text-gray-600">OR</span>
                  <span className="w-full h-px bg-gray-300"></span>
                </div>

                <div className="flex flex-col gap-3">
                  <button
                    type="button"
                    onClick={handleGoogleSignIn}
                    className="flex items-center justify-center w-full gap-2 p-3 text-gray-800 border border-gray-300 rounded-lg hover:bg-gray-50"
                  >
                   <FcGoogle size={24} />
                    Sign up with Google
                  </button>
                </div>
              </form>
            )}

            <p className="mt-6 text-sm text-center text-gray-600">
              Already have an account?{' '}
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

export default Register;