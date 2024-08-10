import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

function Contact() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex flex-col bg-blue-100"> {/* Apply light blue background here */}
            <Navbar />
            <div className="flex-grow flex items-center justify-center">
                <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-lg">
                    <h1 className="text-3xl font-bold mb-4 text-black">Contact Us</h1>
                    <p className="mb-4 text-gray-700">
                        If you have any questions, please contact us at <a href="mailto:contact@eventx.com" className="text-blue-600">contact@eventx.com</a>.
                    </p>
                    <form className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-800">Name</label>
                            <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded-md bg-white text-black" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-800">Email</label>
                            <input type="email" className="mt-1 block w-full p-2 border border-gray-300 rounded-md bg-white text-black" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-800">Message</label>
                            <textarea className="mt-1 block w-full p-2 border border-gray-300 rounded-md bg-white text-black"></textarea>
                        </div>
                        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">Send Message</button>
                    </form>
                    <button onClick={() => navigate(-1)} className="mt-4 text-gray-700 hover:underline">
                        Go Back
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Contact;