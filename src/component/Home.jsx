import React, { useState } from 'react';
import { useLoaderData, Link } from 'react-router';
import CoffeeCard from './CoffeeCard';

const Home = () => {
    const initialCoffees = useLoaderData();
    const [coffees, setCoffees] = useState(initialCoffees);

    return (
        <div className='bg-white'>
            {/* Hero Section */}
            <div className="hero min-h-[600px]" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070&auto=format&fit=crop)' }}>
                <div className="hero-overlay bg-opacity-50"></div>
                <div className="hero-content text-left text-neutral-content w-full max-w-7xl">
                    <div className="max-w-xl">
                        <h1 className="mb-5 text-5xl font-bold font-rancho">Would you like a Cup of Delicious Coffee?</h1>
                        <p className="mb-5 text-lg">It's coffee time - Sip & Relish! Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!!</p>
                        <button className="btn bg-[#E3B577] border-none text-black font-rancho text-xl px-8 hover:bg-transparent hover:text-white hover:border-2 hover:border-[#E3B577]">Learn More</button>
                    </div>
                </div>
            </div>

            {/* Features Section */}
           <div className='bg-[#ECEAE3] py-16 px-4'>
    <div className='max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 '>
        <FeatureItem icon="☕" title="Awesome Aroma" desc="You will love the greeting bliss of our roasted coffee beans." />
        <FeatureItem icon="⭐" title="High Quality" desc="We served the coffee to you maintaining the best quality." />
        <FeatureItem icon="🍃" title="Pure Grades" desc="The coffee is made of the green coffee beans which you will love." />
        <FeatureItem icon="🔥" title="Proper Roasting" desc="Your coffee is brewed by roasting the green coffee beans." />
    </div>
</div>

            {/* Products Section */}
            <div className="max-w-7xl mx-auto my-20">
                <div className="text-center mb-12">
                    <p className="text-gray-600">--- Sip & Savor ---</p>
                    <h2 className="text-5xl font-bold font-rancho text-[#33312F] mb-6">Our Popular Products</h2>
                    <Link to="/addCoffee">
                        <button className="btn bg-[#E3B577] border-2 border-[#33312F] hover:bg-[#F5F4F1] font-rancho text-xl px-6">
                            Add Coffee <span className="ml-2">☕</span>
                        </button>
                    </Link>
                </div>

                {/* Coffee Cards Grid */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8 px-4'>
                    {coffees.map(coffee => (
                        <CoffeeCard 
                            key={coffee._id} 
                            coffees={coffees}
                            setCoffees={setCoffees}
                            coffee={coffee} 
                        />
                    ))}
                </div>
            </div>

            {/* Instagram/Follow Us Section */}
            <div className="max-w-7xl mx-auto mb-20 px-4 text-center">
                <p className="text-gray-600">Follow Us Now</p>
                <h2 className="text-5xl font-bold font-rancho text-[#33312F] mb-10">Follow on Instagram</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <img className="rounded-lg hover:scale-105 transition w-full h-full object-cover" src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=500" alt="" />
                    <img className="rounded-lg hover:scale-105 transition w-full h-full object-cover" src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?q=80&w=500" alt="" />
                    <img className="rounded-lg hover:scale-105 transition w-full h-full object-cover" src="https://images.unsplash.com/photo-1506368249639-73a05d6f6488?q=80&w=500" alt="" />
                    <img className="rounded-lg hover:scale-105 transition w-full h-full object-cover" src="https://images.unsplash.com/photo-1498804103079-a6351b050096?q=80&w=500" alt="" />
                </div>
            </div>
        </div>
    );
};

// Sub-component for Feature
const FeatureItem = ({ icon, title, desc }) => (
    <div className='space-y-3'>
        <div className='text-4xl text-[#33312F]'>{icon}</div>
        <h3 className='text-2xl font-rancho font-bold text-[#33312F]'>{title}</h3>
        <p className='text-gray-600'>{desc}</p>
    </div>
);

export default Home;