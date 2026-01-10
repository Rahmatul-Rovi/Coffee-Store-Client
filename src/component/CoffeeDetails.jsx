import React from 'react';
import { useLoaderData, Link } from 'react-router';
import { ArrowLeft, Coffee, Tag, ShoppingCart, User } from 'lucide-react';

const CoffeeDetails = () => {
    // Router theke loader data niye asha
    const coffee = useLoaderData();
    const { name, supplier, taste, category, details, price, photo } = coffee;

    return (
        <div className="bg-[#F4F3F0] min-h-screen py-12 px-4 md:px-24">
            {/* Back Button */}
            <div className="max-w-5xl mx-auto mb-8">
                <Link to="/" className="flex items-center gap-2 text-[#374151] font-rancho text-2xl hover:text-[#D2B48C] transition-colors">
                    <ArrowLeft size={24} /> Back to home
                </Link>
            </div>

            {/* Details Card */}
            <div className="max-w-5xl mx-auto bg-[#F5F4F1] rounded-lg p-8 md:p-16 shadow-sm flex flex-col md:flex-row items-center gap-12 border border-[#D2B48C]/30">
                
                {/* Image Section */}
                <div className="md:w-1/2 flex justify-center">
                    <img 
                        src={photo} 
                        alt={name} 
                        className="w-full max-w-[350px] object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                    />
                </div>

                {/* Info Section */}
                <div className="md:w-1/2 space-y-6">
                    <h2 className="text-5xl font-rancho font-bold text-[#33312F] border-b-2 border-[#D2B48C] pb-4">
                        {name}
                    </h2>

                    <div className="space-y-4 text-lg">
                        <p className='flex items-center gap-3 text-neutral-700'>
                            <span className="font-bold text-[#33312F] flex items-center gap-1"><Coffee size={18}/> Name:</span> {name}
                        </p>
                        <p className='flex items-center gap-3 text-neutral-700'>
                            <span className="font-bold text-[#33312F] flex items-center gap-1"><User size={18}/> Supplier:</span> {supplier}
                        </p>
                        <p className='flex items-center gap-3 text-neutral-700'>
                            <span className="font-bold text-[#33312F] flex items-center gap-1">✨ Taste:</span> {taste}
                        </p>
                        <p className='flex items-center gap-3 text-neutral-700'>
                            <span className="font-bold text-[#33312F] flex items-center gap-1"><Tag size={18}/> Category:</span> {category}
                        </p>
                        <p className='flex items-center gap-3 text-neutral-700'>
                            <span className="font-bold text-[#33312F] flex items-center gap-1">📦 Details:</span> {details}
                        </p>
                        <p className='flex items-center gap-3 text-neutral-700'>
                            <span className="font-bold text-[#33312F] flex items-center gap-1">💰 Price:</span> 
                            <span className='text-orange-800 font-bold font-rancho text-2xl'>{price} TK</span>
                        </p>
                    </div>

                    <button className="btn bg-[#D2B48C] hover:bg-[#B6966C] text-[#33312F] font-rancho text-xl mt-6 px-10 border-2 border-[#33312F] shadow-md flex items-center gap-2">
                        Add to Cart <ShoppingCart size={20}/>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CoffeeDetails;