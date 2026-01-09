import React from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';

const SignIn = () => {
    const handleSignIn = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#fdf8f3] p-5">
            <div className="bg-white p-10 rounded-2xl shadow-xl w-full max-w-[450px] border-t-[10px] border-[#6F4E37]">
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-[#6F4E37] font-serif">Welcome Back</h2>
                    <p className="text-gray-500 mt-2">Log in to grab your favorite cup!</p>
                </div>

                <form onSubmit={handleSignIn} className="space-y-5">
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                        <input 
                            type="email" name="email" placeholder="email@example.com" 
                            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#6F4E37] outline-none transition-all" 
                            required 
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Password</label>
                        <input 
                            type="password" name="password" placeholder="••••••••" 
                            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#6F4E37] outline-none transition-all" 
                            required 
                        />
                    </div>

                    <button className="w-full bg-[#6F4E37] hover:bg-[#5a3e2b] text-white font-bold py-3 rounded-xl shadow-lg transition duration-300">
                        Sign In
                    </button>
                </form>

                <div className="relative my-8 border-b border-gray-200 text-center">
                    <span className="absolute top-[-10px] left-1/2 -translate-x-1/2 bg-white px-4 text-gray-400 text-sm">OR</span>
                </div>

                <button className="w-full flex items-center justify-center gap-3 border border-gray-300 py-3 rounded-xl hover:bg-gray-50 transition duration-300 text-gray-700 font-medium">
                    <FaGoogle className="text-red-500" /> Sign In with Google
                </button>

                <p className="text-center text-gray-600 mt-8">
                    New here? <Link to="/signup" className="text-[#6F4E37] font-bold hover:underline">Create Account</Link>
                </p>
            </div>
        </div>
    );
};

export default SignIn;