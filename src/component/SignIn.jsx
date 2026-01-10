import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../Contexts/AuthProvider'; // Path thik nio
import Swal from 'sweetalert2';

const SignIn = () => {
    const { signInUser, signInWithGoogle } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const handleSignIn = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        signInUser(email, password)
            .then(result => {
                Swal.fire({
                    title: "Logged In!",
                    text: "Welcome back to Coffee House",
                    icon: "success",
                    confirmButtonColor: "#6F4E37",
                });
                // Private route theke ashle oi page-e pathabe, nahole home-e
                navigate(location?.state ? location.state : '/');
            })
            .catch(error => {
                console.error(error.message);
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Invalid Email or Password!",
                });
            });
    };

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                Swal.fire({
                    title: "Success!",
                    text: "Signed in with Google",
                    icon: "success",
                });
                navigate(location?.state ? location.state : '/');
            })
            .catch(error => console.error(error.message));
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#fdf8f3] p-5">
            <div className="bg-white p-10 rounded-2xl shadow-xl w-full max-w-[450px] border-t-[10px] border-[#6F4E37]">
                <div className="text-center mb-8">
                    <h2 className="text-4xl font-bold text-[#6F4E37] font-rancho">Welcome Back</h2>
                    <p className="text-gray-500 mt-2 italic text-sm">Log in to grab your favorite cup!</p>
                </div>

                <form onSubmit={handleSignIn} className="space-y-5">
                    <div>
                        <label className="block text-sm font-semibold text-[#372727] mb-2">Email Address</label>
                        <input 
                            type="email" name="email" placeholder="email@example.com" 
                            className="w-full px-4 py-3 border border-gray-200 rounded-xl bg-white text-neutral-800 placeholder-gray-400 focus:ring-2 focus:ring-[#6F4E37] outline-none transition-all" 
                            required 
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-semibold text-[#372727] mb-2">Password</label>
                        <input 
                            type="password" name="password" placeholder="••••••••" 
                            className="w-full px-4 py-3 border border-gray-200 rounded-xl bg-white text-neutral-800 placeholder-gray-400 focus:ring-2 focus:ring-[#6F4E37] outline-none transition-all" 
                            required 
                        />
                    </div>

                    <button className="w-full bg-[#6F4E37] hover:bg-[#5a3e2b] text-white font-bold py-3 rounded-xl shadow-lg transition duration-300 font-rancho text-xl tracking-wider">
                        Sign In
                    </button>
                </form>

                <div className="relative my-8 border-b border-gray-200 text-center">
                    <span className="absolute top-[-10px] left-1/2 -translate-x-1/2 bg-white px-4 text-gray-400 text-sm font-bold">OR</span>
                </div>

                <button 
                    onClick={handleGoogleSignIn}
                    className="w-full flex items-center justify-center gap-3 border border-gray-300 py-3 rounded-xl hover:bg-gray-50 bg-white transition duration-300 text-[#372727] font-medium shadow-sm">
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