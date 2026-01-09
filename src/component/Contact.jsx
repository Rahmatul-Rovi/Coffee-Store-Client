import React from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold font-rancho text-[#33312F]">
            Get In Touch
          </h2>
          <p className="text-gray-500 mt-4 italic">
            --- We'd love to hear from you ---
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 bg-[#F5F4F1] rounded-3xl overflow-hidden shadow-xl">
          {/* Contact Info */}
          <div className="bg-[#372727] p-12 text-white space-y-8">
            <h3 className="text-3xl font-rancho mb-6">Contact Information</h3>
            <div className="flex items-center gap-6">
              <div className="bg-[#E3B577] p-3 rounded-full text-black">
                <Phone size={24} />
              </div>
              <div>
                <p className="text-sm opacity-70">Call Us</p>
                <p className="text-lg font-semibold">+880 123 456 789</p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="bg-[#E3B577] p-3 rounded-full text-black">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-sm opacity-70">Email Us</p>
                <p className="text-lg  font-semibold">caffeinecastle@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="bg-[#E3B577] p-3 rounded-full text-black">
                <MapPin size={24} />
              </div>
              <div>
                <p className="text-sm opacity-70">Visit Us</p>
                <p className="text-lg font-semibold">Gulshan 2, road-3, Dhaka</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 p-12">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="input input-bordered w-full bg-white text-neutral-800 placeholder-gray-500 focus:border-[#E3B577]"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="input input-bordered w-full bg-white text-neutral-800 placeholder-gray-500 focus:border-[#E3B577]"
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                className="input input-bordered w-full bg-white text-neutral-800 placeholder-gray-500 focus:border-[#E3B577]"
              />
              <textarea
                placeholder="Message"
                className="textarea textarea-bordered w-full h-32 bg-white text-neutral-800 placeholder-gray-500 focus:border-[#E3B577]"
              ></textarea>
              <button className="btn bg-[#372727] text-white hover:bg-[#E3B577] hover:text-black border-none px-10 font-rancho text-xl flex items-center gap-2">
                Send Message <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
