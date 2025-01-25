import React from 'react';
import { RiNextjsFill } from "react-icons/ri";
import { SiDjango } from "react-icons/si";
import video from '../../public/next.gif'

function Portfolio() {
  return (
    <>
      <div name="Portfolio" className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-4">
        <h1 className="text-3xl font-semibold mb-5">Portfolio</h1>

        {/* Next.js Section */}
        <div>
          <h2 className="text-2xl font-semibold mb-3 flex items-center">
            Next.js Projects <RiNextjsFill className="ml-2 text-blue-600" />
          </h2>
          <p className="mb-5">Explore my Next.js projects below, where I’ve built dynamic, fast, and SEO-friendly websites with server-side rendering and static generation.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Next.js Project Card 1 */}
            <div className="border border-gray-300 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-3">Next.js Project 1</h3>
              <p className="text-gray-700 mb-4">
                A dynamic e-commerce platform with real-time product updates and smooth user interactions.
              </p>
              <div className="flex space-x-4">
                <a href={video} target='_blank' className="bg-blue-500 text-sm text-white px-2 py-0 rounded-md hover:bg-blue-600 inline-flex items-center justify-center">Video</a>
                <a href='https://github.com/Priyanshu-89/food' target='_blank' className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700">View Source Code</a>
              </div>
            </div>

            {/* Next.js Project Card 2 */}
            <div className="border border-gray-300 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-3">Next.js Project 2</h3>
              <p className="text-gray-700 mb-4">
                A blog website with static generation, ensuring fast page loads and smooth content management.
              </p>
              <div className="flex space-x-4">
              <button className="bg-blue-500 text-sm text-white px-2 py-0 rounded-md hover:bg-blue-600">Video</button>
              <button className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700">View Source Code</button>
              </div>
            </div>

            {/* Next.js Project Card 3 */}
            <div className="border border-gray-300 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-3">Next.js Project 3</h3>
              <p className="text-gray-700 mb-4">
                A portfolio website built with Next.js, featuring server-side rendering for fast content delivery.
              </p>
              <div className="flex space-x-4">
              <button className="bg-blue-500 text-sm text-white px-2 py-0 rounded-md hover:bg-blue-600">Video</button>
              <button className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700">View Source Code</button>
              </div>
            </div>

            {/* Next.js Project Card 4 */}
            <div className="border border-gray-300 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-3">Next.js Project 4</h3>
              <p className="text-gray-700 mb-4">
                A responsive Next.js website with integrated API for live data fetching and real-time updates.
              </p>
              <div className="flex space-x-4">
              <button className="bg-blue-500 text-sm text-white px-2 py-0 rounded-md hover:bg-blue-600">Video</button>
              <button className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700">View Source Code</button>
              </div>
            </div>
          </div>
        </div>

        {/* Django Section */}
        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-3 flex items-center">
            Django Projects <SiDjango className="ml-2 text-green-600" />
          </h2>
          <p className="mb-5">Here are some of my Django projects where I've built powerful back-end systems with robust data management and user authentication features.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Django Project Card 1 */}
            <div className="border border-gray-300 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-3">Django Project 1</h3>
              <p className="text-gray-700 mb-4">
                A secure login and registration system with custom user authentication and real-time data storage.
              </p>
              <div className="flex space-x-4">
              <button className="bg-blue-500 text-sm text-white px-2 py-0 rounded-md hover:bg-blue-600">Video</button>
              <button className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700">View Source Code</button>
              </div>
            </div>

            {/* Django Project Card 2 */}
            <div className="border border-gray-300 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-3">Django Project 2</h3>
              <p className="text-gray-700 mb-4">
                A task management application with advanced features like deadlines, reminders, and multiple user roles.
              </p>
              <div className="flex space-x-4">
              <button className="bg-blue-500 text-sm text-white px-2 py-0 rounded-md hover:bg-blue-600">Video</button>
              <button className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700">View Source Code</button>
              </div>
            </div>

            {/* Django Project Card 3 */}
            <div className="border border-gray-300 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-3">Django Project 3</h3>
              <p className="text-gray-700 mb-4">
                A real-time chat application built with Django and WebSockets for interactive messaging.
              </p>
              <div className="flex space-x-4">
              <button className="bg-blue-500 text-sm text-white px-2 py-0 rounded-md hover:bg-blue-600">Video</button>
              <button className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700">View Source Code</button>
              </div>
            </div>

            {/* Django Project Card 4 */}
            <div className="border border-gray-300 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-3">Django Project 4</h3>
              <p className="text-gray-700 mb-4">
                A blog platform with an admin dashboard for content management and user management features.
              </p>
              <div className="flex space-x-4">
              <button className="bg-blue-500 text-sm text-white px-2 py-0 rounded-md hover:bg-blue-600">Video</button>
              <button className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700">View Source Code</button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}

export default Portfolio;
