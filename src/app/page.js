// app/page.tsx (Next.js 13+ with app directory)
"use client"
import { FaShower, FaParking, FaUtensils, FaMountain, FaBus, FaStore, FaTree } from 'react-icons/fa'; // Importing the necessary icons
import { FaBed, FaRupeeSign } from "react-icons/fa";
import Image from 'next/image';
import { FaQuoteLeft } from "react-icons/fa";
import Navbar from './component/Navbar';
export default function Home() {
  const rooms = [
    {
      name: "Deluxe Room",
      desc: "Enjoy a stunning mountain view from your private balcony. This room offers a cozy king-size bed, ambient lighting, and elegant wooden interiors for a peaceful retreat.",
      price: "₹800/night",
      image: "/room1.jpg",
    },
    {
      name: "Luxury Suite",
      desc: "A luxurious suite with a separate living room, marble bathroom, and a minibar. Perfect for guests who love space, style, and premium service.",
      price: "₹800/night",
      image: "/room2.jpg",
    },
    {
      name: "Family Room",
      desc: "Spacious and fun-filled, ideal for families with kids. Includes two double beds, a play corner, and enough room for everyone to relax comfortably.",
      price: "₹800/night",
      image: "/room3.jpg",
    },
    {
      name: "Budget Room",
      desc: "Clean, simple, and affordable. Equipped with all essentials like a queen bed, writing desk, and neat bathroom. Great for solo or duo stays.",
      price: "₹800/night",
      image: "/room4.jpg",
    },
  ];
  const testimonials = [
    {
      name: "Aarav Sharma",
      feedback:
        "The rooms were extremely comfortable and the mountain view was breathtaking. Great service and delicious food!",
      image: "/p1.jpg",
    },
    {
      name: "Meera Kapoor",
      feedback:
        "Perfect stay for a weekend getaway! The staff was friendly, and the Deluxe Room had all the amenities we needed.",
      image: "/p2.jpg",
    },
    {
      name: "Ravi Joshi",
      feedback:
        "Affordable and clean rooms. Booking was easy, and the ambiance made it feel like home.",
      image: "/p3.jpg",
    },
    {
      name: "Ravi Joshi",
      feedback:
        "Affordable and clean rooms. Booking was easy, and the ambiance made it feel like home.",
      image: "/p4.jpg",

    },
  ];


  return (
    <main className="min-h-screen bg-[#fff7f0] text-gray-900 font-sans">
      {/* Navbar */}
      <Navbar/>
      {/* Hero Section */}
      <section className="flex flex-col-reverse md:flex-row items-center justify-between w-full bg-white py-12 px-6 md:px-12 gap-8">
        {/* Text on the Left */}
        <div className="w-full md:w-1/2 text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-gray-900 mb-6">
            Welcome to Your <br /> Perfect Homestay
          </h1>
          <p className="text-gray-700 mt-4 max-w-md sm:max-w-lg">
            A serene escape with cozy rooms, mountain views, and all the comforts of home. Perfect for a relaxing getaway.
          </p>
          <button className="mt-6 px-6 py-3 bg-amber-600 text-white rounded-md text-sm font-medium hover:bg-amber-500">
            Explore Rooms
          </button>
        </div>

        {/* Image on the Right */}
        <div className="w-full md:w-1/2 h-64 sm:h-80 md:h-[500px] relative overflow-hidden rounded-lg shadow-lg">
          <Image
            src="/remain.png"
            alt="Modern homestay house"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
      </section>


      {/* Services Section */}
      <section className="bg-white py-16 px-6 md:px-12 text-center">
        <h2 className="text-2xl font-semibold mb-8">Our Premium Services</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {/* Service Cards */}
          <div className="flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mb-4">
              <FaShower className="text-white text-3xl" /> {/* Water Heater Icon */}
            </div>
            <h3 className="text-lg font-semibold">Water Heater</h3>
          </div>

          <div className="flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mb-4">
              <FaParking className="text-white text-3xl" /> {/* Parking Icon */}
            </div>
            <h3 className="text-lg font-semibold">Parking</h3>
          </div>

          <div className="flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mb-4">
              <FaUtensils className="text-white text-3xl" /> {/* Dinner Icon */}
            </div>
            <h3 className="text-lg font-semibold">Dinner</h3>
          </div>

          <div className="flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mb-4">
              <FaMountain className="text-white text-3xl" /> {/* Valley Facing View Icon */}
            </div>
            <h3 className="text-lg font-semibold">Valley Facing View</h3>
          </div>

          <div className="flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mb-4">
              <FaBus className="text-white text-3xl" /> {/* Bus Station Icon */}
            </div>
            <h3 className="text-lg font-semibold">Bus Station</h3>
          </div>

          <div className="flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mb-4">
              <FaStore className="text-white text-3xl" /> {/* Restaurant Icon */}
            </div>
            <h3 className="text-lg font-semibold">Restaurant</h3>
          </div>

          <div className="flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mb-4">
              <FaTree className="text-white text-3xl" /> {/* Tourist Park Icon */}
            </div>
            <h3 className="text-lg font-semibold">Tourist Park</h3>
          </div>
        </div>
      </section>

      {/* Our Rooms Section */}

      <section className="py-16 px-6 md:px-12 bg-[#fff7f0] text-center">
        <h2 className="text-3xl font-bold mb-12 text-gray-800">
          Our <span className="text-amber-600">Rooms</span>
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {rooms.map((room, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-xl overflow-hidden "
            >
              <Image
                src={room.image}
                alt={room.name}
                width={400}
                height={250}
                className="w-full h-56 object-cover"
              />
              <div className="p-5 text-left">
                <h3 className="text-xl font-semibold flex items-center gap-2 text-gray-800">
                  <FaBed className="text-amber-600" /> {room.name}
                </h3>
                <p className="text-sm text-gray-600 mt-2 min-h-[70px]">{room.desc}</p>
                <div className="mt-4 flex items-center gap-1 text-amber-600 font-bold">
                  <FaRupeeSign />
                  <span>{room.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>



      {/* Testimonials Section */}



      <section className="py-20 px-6 md:px-12 bg-white text-center">
        <h2 className="text-3xl font-bold mb-12 text-gray-800">
          What Our <span className="text-amber-600">Guests Say</span>
        </h2>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-[#fff7f0] p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-left"
            >
              <FaQuoteLeft className="text-amber-600 text-2xl mb-4" />
              <p className="text-gray-700 italic mb-6">&quot;{testimonial.feedback}&quot;</p>
              <div className="flex items-center gap-4">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={48}
                  height={48}
                  className="rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-gray-800">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">Guest</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <footer className="bg-[#fff7f0] text-gray-800 pt-12 pb-6 px-6 md:px-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Us */}
          <div>
            <h4 className="text-lg font-semibold mb-4">About Us</h4>
            <p className="text-sm text-gray-600">
              Nestled in the mountains, our hotel offers comfort, scenic beauty, and unmatched hospitality for every traveler.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#home" className="hover:text-amber-600">Home</a></li>
              <li><a href="#rooms" className="hover:text-amber-600">Rooms</a></li>
              <li><a href="#testimonials" className="hover:text-amber-600">Testimonials</a></li>
              <li><a href="#contact" className="hover:text-amber-600">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Email: 245boranerraj@gmail.com</li>
              <li>Phone: +91 8923519805</li>
              <li>Location: Manali, Himachal Pradesh</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
            <p className="text-sm text-gray-600 mb-3">Stay updated with our latest offers.</p>
            <form className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Your email"
                className="p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
              <button
                type="submit"
                className="bg-amber-600 text-white py-2 rounded hover:bg-amber-700 transition duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-300 mt-10 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} MountainStay. All rights reserved.
        </div>
      </footer>


    </main>
  );
}
