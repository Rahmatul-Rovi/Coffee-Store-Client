import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import CoffeeCard from './CoffeeCard';

const Home = () => {
    const initialCoffees = useLoaderData();
    const [coffees, setCoffees] = useState(initialCoffees);
   return (
        <div className='max-w-7xl mx-auto'> 
            {/* Hero Section */}
            <div className="hero min-h-[500px] rounded-xl mb-12" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070&auto=format&fit=crop)'}}>
                <div className="hero-overlay bg-opacity-60 rounded-xl"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold font-rancho">Would you like a Cup of Delicious Coffee?</h1>
                        <p className="mb-5">It's coffee time - SIp & Relish! Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!!</p>
                        <button className="btn btn-warning bg-[#E3B577] border-none text-black">Learn More</button>
                    </div>
                </div>
            </div>

            {/* Coffee Cards Grid */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 p-4'>
                {
                    coffees.map(coffee => <CoffeeCard 
                        key={coffee._id} 
                        coffees={coffees}
                        setCoffees={setCoffees}
                        coffee={coffee} 
                    />)
                }
            </div>
        </div>
    );
};

export default Home;