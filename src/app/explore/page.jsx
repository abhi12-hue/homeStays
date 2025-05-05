// pages/explore.js
import Image from 'next/image';
import Navbar from '../component/Navbar';

const ExplorePage = () => {
  const places = [
    {
      name: "Someshwar Temple",
      description:
        "Tucked away in the serene Someshwar Valley of Almora, Someshwar Temple is dedicated to Lord Shiva. A grand fair on Shivratri draws thousands of devotees. The festive atmosphere, cultural energy, and spiritual vibe make it an unforgettable experience.",
      imageUrl: "/bg3.jpeg",
    },
    {
      name: "Kausani",
      description:
        "Nicknamed the 'Switzerland of India', Kausani offers stunning panoramic views of Trisul, Nanda Devi, and Panchchuli peaks. Located in the Bageshwar district, it's a paradise for nature lovers and peace seekers.",
      imageUrl: "/bg2.jpg",
    },
    {
      name: "Bageshwar",
      description:
        "Known for its rivers, temples, and scenic beauty, Bageshwar is the administrative heart of its district. A spiritual and serene escape, it’s perfect for exploring culture and nature together.",
      imageUrl: "/bg1.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
          Explore Nearby Destinations
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {places.map((place, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 ease-in-out overflow-hidden"
            >
              <div className="relative h-56 w-full">
                <Image
                  src={place.imageUrl}
                  alt={place.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-xl"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                  {place.name}
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {place.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExplorePage;
