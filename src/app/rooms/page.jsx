import React from 'react'
import Image from 'next/image'
import Navbar from '../component/Navbar'

const RoomsGallery = () => {
  const rooms = Array.from({ length: 8 }, (_, i) => `/room${i + 1}.jpg`)
  const tags = [
    'Ocean View',
    'Mountain Retreat',
    'City Lights',
    'Rustic Escape',
    'Modern Luxury',
    'Nature-Inspired',
    'Cozy Corner',
    'Elegant Suite',
  ]

  return (
    <div>
        <Navbar/>
        <section className="bg-white py-16 px-6 md:px-12">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
          Discover Your <span className="text-amber-600">Perfect Stay</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg">
          From cozy corners to luxury suites, our hand-picked rooms blend comfort and charm for every traveler.
          Find the one that speaks to your soul and makes you feel truly at home.
        </p>
      </div>

      {/* Responsive Grid Layout */}
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {rooms.map((src, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-2xl shadow-lg group bg-gray-100 animate-fade-in"
          >
            {/* Tag Label */}
            <div className="absolute top-3 left-3 bg-white/80 text-amber-600 px-2 py-1 text-xs font-semibold rounded z-10 backdrop-blur">
              {tags[index] || `Room ${index + 1}`}
            </div>

            {/* Room Image */}
            <div className="relative w-full aspect-[3/2]">
              <Image
                src={src}
                alt={`Room ${index + 1}`}
                fill
                className="object-cover rounded-2xl transition duration-300 ease-in-out group-hover:scale-105 group-hover:brightness-90"
              />
            </div>

            {/* Gradient Overlay Text */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent text-white text-sm p-3 font-medium">
              Room {index + 1}
            </div>
          </div>
        ))}
      </div>
    </section>
    </div>
  )
}

export default RoomsGallery
