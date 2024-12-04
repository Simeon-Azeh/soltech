import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider } from 'firebase/auth';
import { auth, googleProvider } from '../firebase';
import Footer from '../components/Footer';
import ServiceHero from '../components/ServiceHero';
import { FcGoogle } from "react-icons/fc";
import { IoLogoFacebook } from "react-icons/io5";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import CustomButton from '../components/CustomButton';
import Banner from '../components/Banner';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    setLoading(true);
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log('Login successful', user);
      navigate('/dashboard'); // Redirect to dashboard
    } catch (error) {
      console.error('Error logging in', error);
      setErrorMessage(getCustomErrorMessage(error.code));
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setLoading(true);
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log('Google sign-in successful:', result.user);
      navigate('/dashboard'); // Redirect to dashboard
    } catch (error) {
      console.error('Error during Google sign-in:', error);
      setErrorMessage(getCustomErrorMessage(error.code));
      setLoading(false);
    }
  };

  const handleFacebookSignIn = async () => {
    setLoading(true);
    const provider = new FacebookAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      console.log('Facebook sign-in successful:', result.user);
      navigate('/dashboard'); // Redirect to dashboard
    } catch (error) {
      console.error('Error during Facebook sign-in:', error);
      setErrorMessage(getCustomErrorMessage(error.code));
      setLoading(false);
    }
  };

  const getCustomErrorMessage = (errorCode) => {
    switch (errorCode) {
      case 'auth/user-not-found':
        return 'No user found with this email.';
      case 'auth/wrong-password':
        return 'Incorrect password. Please try again.';
      case 'auth/invalid-email':
        return 'The email address is not valid.';
        case 'auth/invalid-credential':
        return 'Please check your credentials and try again.';
      case 'auth/user-disabled':
        return 'This user has been disabled.';
        case 'auth/popup-closed-by-user':
        return 'Popup closed by user.';
        case 'auth/popup-blocked':
        return 'Popup blocked by browser.';
        
      default:
        return 'An error occurred. Please try again.';
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevShow) => !prevShow);
  };

  return (
    <main className="relative w-screen min-h-screen overflow-x-hidden bg-white">
    <Banner />
      <section className="px-4 py-16 md:px-8">
        <div className="container mx-auto">
          <div className="max-w-lg p-6 mx-auto bg-white rounded-lg ">
            <h2 className="mb-4 text-2xl font-bold text-center text-gray-800">Login to Your Account</h2>
            <p className="mb-6 text-sm text-center text-gray-600">Enter your details to access your account</p>
            
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

              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="rememberMe"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <label htmlFor="rememberMe" className="block ml-2 text-sm text-gray-800">
                    Remember Me
                  </label>
                </div>
                <a href="/forgot-password" className="text-sm text-blue-500 hover:underline">
                  Forgot Password?
                </a>
              </div>

              <CustomButton
                title="Login"
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
                  className="flex items-center justify-center w-full gap-2 p-3 font-medium text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50"
                >
                  <FcGoogle size={24} />
                  Sign in with Google
                </button>
               
              </div>
            </form>

            <p className="mt-6 text-sm text-center text-gray-600">
              Don’t have an account?{' '}
              <a href="/register" className="text-blue-500 hover:underline">
                Sign up
              </a>
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Login;