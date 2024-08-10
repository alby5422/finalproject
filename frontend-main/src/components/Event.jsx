import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Event() {
  const [event, setEvent] = useState([]);
  const navigate = useNavigate(); // Initialize navigate hook

  useEffect(() => {
    const getEvent = async () => {
      try {
        const res = await axios.get("http://localhost:4001/event");
        console.log(res.data);
        setEvent(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getEvent();
  }, []);
  return (
    <> 
    <div className="bg-blue-100 min-h-screen py-8"> {/* Light blue background */}
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
      <div className="mt-28 text-center">
        <h1 className="text-2xl md:text-4xl font-bold text-black">
          We're delighted to have you{" "}
          <span className="text-pink-500">Here! :)</span>
        </h1>
        <p className="mt-12 text-gray-700">
          Welcome to EVENTX, the ultimate event management app designed to simplify and enhance your event planning experience. Whether you’re organizing a corporate conference, a wedding, a birthday party, or any special occasion, EVENTX provides you with all the tools you need to create unforgettable events effortlessly. With our intuitive interface, real-time collaboration, and comprehensive planning features, managing every detail of your event has never been easier. Join the EVENTX community today and make your next event a seamless success!
        </p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
        {event.map((item) => (
          <Cards key={item.id} item={item} />
        ))}
      </div>
      <div className="mt-8 flex justify-center">
        <button
          onClick={() => navigate(-1)} // Go back to the previous page
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Go Back
        </button>
      </div>
    </div>
    </div>
    </>
   
  );
}
export default Event;