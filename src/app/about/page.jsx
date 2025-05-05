import React from 'react'
import Image from 'next/image'
import Navbar from '../component/Navbar'

const Page = () => {
  return (
    <div>
        <Navbar/>
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gradient-to-r from-amber-100 to-rose-100 px-6 py-20 gap-10">
      {/* Image Side */}
      <div className="relative w-full md:w-1/2 h-72 md:h-[500px] rounded-3xl overflow-hidden shadow-lg">
        <Image
          src="/nono.jpg" // Make sure this image is placed in your /public folder
          alt="Homely Stay"
          layout="fill"
          objectFit="cover"
          className="rounded-3xl"
        />
      </div>

      {/* Text Side */}
      <div className="max-w-xl glassmorphism bg-white/60 backdrop-blur-xl p-8 rounded-3xl shadow-2xl text-center md:text-left relative z-10">
        {/* Glowing Background Blobs */}
        <div className="absolute -top-10 -left-10 w-32 h-32 bg-amber-400 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-ping"></div>
        <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-rose-400 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-ping"></div>

        {/* Content */}
        <h2 className="text-4xl font-extrabold text-gray-900 mb-4">About <span className="text-amber-600">Homely</span></h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Homely isn’t just a place to stay—it’s where nature meets nurture. From scenic mornings to cozy nights, every detail is designed for peace, privacy, and playful vibes.
        </p>
        <p className="text-gray-600">
          Perfect for dreamers, remote workers, explorers, or anyone chasing calm. ✨
        </p>

        {/* CTA */}
        <button className="mt-6 px-6 py-3 bg-amber-600 text-white rounded-full shadow-md hover:bg-amber-500 transition-transform transform hover:scale-105">
          Meet Our Story →
        </button>
      </div>
    </section>
    </div>
  )
}

export default Page
