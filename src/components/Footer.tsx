"use client";
import React, { useState } from 'react';

function Footer() {
    const [email, setEmail] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Reset form fields
        setEmail("");
    };

    return (
        <footer className='bg-black text-gray-400 py-10 dark:bg-black dark:bg-grid-[#e4dcc7]/[0.09]'>
            <div className='max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-40 px-4 sm:px-6 lg:px-8'>
                <div className='p-4 order-1 lg:order-1'>
                    <h3 className="text-[#e4dcc7] mb-4 text-center lg:text-left text-2xl font-semibold">Join the Waitlist</h3>
                    <form onSubmit={handleSubmit} className="relative z-10 mt-4">
                        <input
                            type="email"
                            placeholder="Your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="rounded-lg border border-[#e4dcc7] focus:ring-2 focus:ring-teal-500 w-full bg-neutral-950 placeholder:text-neutral-700 mb-4 p-2"
                            required
                        />
                        <button
                            type="submit"
                            className="w-full bg-[#141218] text-[#e4dcc7] rounded-lg py-2 font-semibold hover:bg-[#2d2c31] transition duration-300"
                        >
                            Submit
                        </button>
                    </form>
                </div>
                <div className='p-4 order-2 lg:order-2 flex flex-col lg:flex-row lg:space-x-8'>
                    <div className='mb-8 lg:mb-0'>
                        <h3 className='text-[#e4dcc7] mb-4 text-2xl font-semibold'>Follow Us</h3>
                        <ul className='flex space-x-4 justify-start mb-4'>
                            <li><a href='https://www.snapchat.com/add/imflawd' className='hover:text-white'><img src='/logo/snap.png' alt='Twitter' className='w-6 h-6' /></a></li>
                            <li><a href='https://www.instagram.com/artemyx.in/' className='hover:text-white'><img src='/logo/instagram.png' alt='Instagram' className='w-6 h-6' /></a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className='text-[#e4dcc7] mb-4 text-2xl font-semibold'>Quick Links</h3>
                        <ul className='space-y-2'>
                            <li><a href='/' className='hover:text-[#e4dcc7]'>Home</a></li>
                            <li><a href='/shop' className='hover:text-[#e4dcc7]'>Shop</a></li>
                            <li><a href='/about' className='hover:text-[#e4dcc7]'>About</a></li>
                            <li><a href='/privacypolicy' className='hover:text-[#e4dcc7]'>Privacy Policy</a></li>
                            <li><a href='/returnpolicy' className='hover:text-[#e4dcc7]'>Return Policy</a></li>
                            <li><a href='/t&c' className='hover:text-[#e4dcc7]'>Terms of Service</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='text-center mt-20 text-[#e4dcc7]'>
                &copy; {new Date().getFullYear()} HAZHTeq Innovations Pvt Ltd. All rights reserved.
            </div>
        </footer>
    );
}

export default Footer;
