import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';


const Footer = () => {
    return (
        <footer className="relative pt-20 overflow-hidden" 
            style={{ 
                backgroundImage: "url('https://raw.githubusercontent.com/ProgrammingHero1/coffee-store-resources/main/15.jpg')", 
                backgroundSize: 'cover' 
            }}>
            
            {/* Overlay to make text readable */}
            <div className="absolute inset-0 bg-white/90"></div>
            
            <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 pb-16">
                {/* Brand Section */}
                <div className='space-y-6'>
                  <img 
                        className='w-20' 
                        src="/images/unnamed.jpg" 
                        alt="Coffee Logo" 
                    />
                    <h2 className="text-4xl font-rancho font-bold text-[#33312F]">Caffeine Castle</h2>
                    <p className='text-[#1B1B1B] text-lg max-w-md leading-relaxed'>
                        Always ready to be your friend. Come & Have a cup of coffee to make your day more memorable and enjoy every moment with us.
                    </p>
                    <div className='flex gap-5'>
                        <Facebook className='text-[#33312F] hover:text-[#E3B577] cursor-pointer transition-all' size={28} />
                        <Twitter className='text-[#33312F] hover:text-[#E3B577] cursor-pointer transition-all' size={28} />
                        <Instagram className='text-[#33312F] hover:text-[#E3B577] cursor-pointer transition-all' size={28} />
                    </div>
                </div>

                {/* Contact Section */}
                <div className='flex flex-col justify-center space-y-7'>
                    <h2 className="text-4xl font-rancho font-bold text-[#33312F]">Get in Touch</h2>
                    <div className='space-y-5'>
                        <div className='flex items-center gap-4 text-[#1B1B1B] text-lg'>
                            <Phone className='text-[#33312F]' fill='#33312F' size={20} /> 
                            <span>+880 123 456 789</span>
                        </div>
                        <div className='flex items-center gap-4 text-[#1B1B1B] text-lg'>
                            <Mail className='text-[#33312F]' fill='#33312F' size={20} /> 
                            <span>caffeinecastle@gmail.com</span>
                        </div>
                        <div className='flex items-center gap-4 text-[#1B1B1B] text-lg'>
                            <MapPin className='text-[#33312F]' fill='#33312F' size={20} /> 
                            <span>Gulshan 2,road-3,Dhaka</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="relative bg-[#372727] text-white py-5 text-center font-rancho text-xl tracking-widest">
                <p>Copyright © 2026 Caffeine-Castle | All Rights Reserved</p>
            </div>
        </footer>
    );
};

export default Footer;