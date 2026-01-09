import React, { useContext } from 'react'; // useContext ইমপোর্ট করুন
import { Link } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../Contexts/AuthProvider'; 


const SignUp = () => {
    // useContext ব্যবহার করুন
    const { createUser } = useContext(AuthContext);

    const handleSignUp = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        
        // ফায়ারবেসে ইউজার ক্রিয়েট করা
        createUser(email, password)
            .then(result => {
                console.log('User created:', result.user);
                alert("Sign Up Successful!");
            })
            .catch(error => {
                console.error('Error:', error.message);
            });
    };

    return (
    <div className="min-h-screen flex items-center justify-center bg-[#fdf8f3] p-5">
        <div className="bg-white p-10 rounded-2xl shadow-xl w-full max-w-[450px] border-t-[10px] border-[#6F4E37]">
            <div className="text-center mb-8">
                {/* Brand Name - Coffee color explicit rakha hoyeche */}
                <h2 className="text-4xl font-bold text-[#6F4E37] font-rancho">Sign Up</h2>
                <p className="text-gray-500 mt-2 italic text-sm">Join us and smell the fresh coffee!</p>
            </div>

            <form onSubmit={handleSignUp} className="space-y-5">
                <div>
                    <label className="block text-sm font-semibold text-[#372727] mb-2">Full Name</label>
                    <input 
                        type="text" name="name" placeholder="Enter your name" 
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl bg-white text-neutral-800 placeholder-gray-400 focus:ring-2 focus:ring-[#6F4E37] outline-none transition-all" 
                        required 
                    />
                </div>
                
                <div>
                    <label className="block text-sm font-semibold text-[#372727] mb-2">Email Address</label>
                    <input 
                        type="email" name="email" placeholder="Enter Your Email Address" 
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl bg-white text-neutral-800 placeholder-gray-400 focus:ring-2 focus:ring-[#6F4E37] outline-none transition-all" 
                        required 
                    />
                </div>
                <div>
                    <label className="block text-sm font-semibold text-[#372727] mb-2">Password</label>
                    <input 
                        type="password" name="password" placeholder="Enter Your Password" 
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl bg-white text-neutral-800 placeholder-gray-400 focus:ring-2 focus:ring-[#6F4E37] outline-none transition-all" 
                        required 
                    />
                </div>

                <button className="w-full bg-[#6F4E37] hover:bg-[#5a3e2b] text-white font-bold py-3 rounded-xl shadow-lg transition duration-300 font-rancho text-xl tracking-wider">
                    Sign Up
                </button>
            </form>

            <div className="relative my-8 border-b border-gray-200 text-center">
                <span className="absolute top-[-10px] left-1/2 -translate-x-1/2 bg-white px-4 text-gray-400 text-xs">OR</span>
            </div>

            <button className="w-full flex items-center justify-center gap-3 border border-gray-300 py-3 rounded-xl hover:bg-gray-50 bg-white transition duration-300 text-[#372727] font-medium">
                <FaGoogle className="text-red-500" /> Sign Up with Google
            </button>

            <p className="text-center text-gray-600 mt-8">
                Already have an account? <Link to="/signin" className="text-[#6F4E37] font-bold hover:underline">Log In</Link>
            </p>
        </div>
    </div>
);
}
export default SignUp;