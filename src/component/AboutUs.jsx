import React from 'react';

const AboutUs = () => {
    return (
        <div className="py-20 bg-[#F5F4F1]">
            <div className="max-w-7xl mx-auto px-6 lg:flex items-center gap-16">
                {/* Image Section */}
                <div className="lg:w-1/2 mb-10 lg:mb-0">
                    <div className="relative">
                        <img 
                            src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1000" 
                            alt="Our Coffee Story" 
                            className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
                        />
                        <div className="absolute -bottom-6 -right-6 bg-[#E3B577] p-8 rounded-xl hidden md:block">
                            <p className="font-rancho text-4xl text-[#33312F]">15+ Years of <br /> Excellence</p>
                        </div>
                    </div>
                </div>

                {/* Text Section */}
                <div className="lg:w-1/2 space-y-6">
                    <h4 className="text-[#E3B577] font-semibold tracking-widest uppercase">Our Story</h4>
                    <h2 className="text-5xl font-bold font-rancho text-[#33312F]">Tradition in Every Sip</h2>
                    <p className="text-gray-600 text-lg leading-relaxed">
                        It’s coffee time - Sip & Relish! Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! We believe that coffee is more than just a drink; it's an experience that brings people together.
                    </p>
                    <p className="text-gray-600 text-lg leading-relaxed">
                        Our journey started with a simple passion for the finest beans and a dream to create a space where every cup tells a story of craftsmanship and quality.
                    </p>
                    <div className="grid grid-cols-2 gap-6 pt-6">
                        <div>
                            <h3 className="text-3xl font-rancho font-bold text-[#E3B577]">100%</h3>
                            <p className="text-gray-500">Organic Beans</p>
                        </div>
                        <div>
                            <h3 className="text-3xl font-rancho font-bold text-[#E3B577]">50+</h3>
                            <p className="text-gray-500">Coffee Varieties</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;