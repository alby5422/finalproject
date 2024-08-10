import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

function About() {
    const navigate = useNavigate();

    return (
        <div className="bg-blue-100 min-h-screen">
            <Navbar />
            <div className="flex items-center justify-center min-h-screen py-8">
                <div className="bg-white shadow-md rounded-lg p-6 max-w-3xl w-full">
                    <h1 className="text-3xl font-bold mb-4 text-black">About EventX</h1>
                    <p className="mb-4 text-gray-800">
                        EventX is your go-to platform for designing and planning various events. We provide all the tools you need to create memorable and successful events.
                    </p>
                    <h2 className="text-2xl font-bold mb-2 text-black">Our Mission</h2>
                    <p className="mb-4 text-gray-800">
                        To simplify event planning and provide an exceptional user experience with our innovative platform.
                    </p>
                    <h2 className="text-2xl font-bold mb-2 text-black">Our Team</h2>
                    <p className="mb-4 text-gray-800">
                        We are a team of passionate event planners and tech enthusiasts dedicated to making your event planning process seamless and enjoyable.
                    </p>
                    <button onClick={() => navigate(-1)} className="mt-4 text-blue-600 hover:underline">
                        Go Back
                    </button>
                </div>
            </div>
        </div>
    );
}

export default About;