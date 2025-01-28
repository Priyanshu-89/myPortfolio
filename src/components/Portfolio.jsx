import React from 'react';
import { RiNextjsFill } from "react-icons/ri";
import { SiDjango } from "react-icons/si";
import video from '../../public/next.gif'
import vid from '../../public/grocery.webm'
import vide from '../../public/ejuice.webm'

function Portfolio() {
  return (
    <>
      <div name="Portfolio" className="max-w-screen-2xl container mx-auto bg-slate-900 text-slate-50 px-4 md:px-20 py-4">
        <h1 className="text-3xl text-[#EF83B9] font-semibold mb-5">Portfolio</h1>

        {/* Next.js Section */}
        <div>
          <h2 className="text-2xl font-semibold mb-3 flex items-center">
            Next.js Projects <RiNextjsFill className="ml-2 text-blue-600" />
          </h2>
          <p className="mb-5">Explore my Next.js projects below, where I’ve built dynamic, fast, and SEO-friendly websites with server-side rendering and static generation.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Next.js Project Card 1 */}
            <div className="border border-gray-300 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-3 text-[#EF83B9]">Tasty Wheels 🍔🍕🚚</h3>
              <p className="text-slate-50 mb-4">
              Worked as full Stack Developer, Designed and developed a robust food delivery web app using Next.js, React.js, Node.js, and MongoDB. Implemented user authentication and role-based authorization with a secure backend to ensure data privacy. Built a responsive and dynamic frontend for seamless navigation and user interaction. Integrated RESTful APIs for efficient data communication, enabling smooth login, signup, and order management, enhancing user experience and application security.
              </p>
              <div className="flex space-x-4">
                <a href={video} target='_blank' className="bg-[#EF83B9] text-sm text-white px-2 py-0 rounded-md  inline-flex items-center justify-center">Video</a>
                <a href='https://github.com/Priyanshu-89/food' target='_blank' className="bg-gray-50 text-[#EF83B9] px-4 py-2 rounded-md ">View Source Code</a>
              </div>
            </div>

            {/* Next.js Project Card 2 */}
            <div className="border border-gray-300 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-3 text-[#EF83B9]">SwiftHarvest 🛒💻🔒</h3>
              <p className="text-slate-50 mb-4">
              Worked as full Stack Developer, developed a grocery product dashboard using ES6, Next.js, React, and MongoDB. It allows the admin to perform CRUD operations, track product sales (daily, weekly, monthly), and view data using charts and visualizations. Integrated Axios for API requests, React-ChartJS-2 for analytics, Next AUTH for authentication, React Hook Form for forms, React Toastify for notifications, and React Stars for user reviews."
              </p>
              <div className="flex space-x-4">
              <a href={vid} target='_blank' className="bg-[#EF83B9] text-sm text-white px-2 py-0 rounded-md  inline-flex items-center justify-center">Video</a>
              <a href='https://github.com/Priyanshu-89/Grocery' target='_blank' className="bg-gray-50 text-[#EF83B9] px-4 py-2 rounded-md ">View Source Code</a>
              </div>
            </div>

            {/* Next.js Project Card 3 */}
            <div className="border border-gray-300 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-3 text-[#EF83B9]">BookHeaven 📚💻🌐</h3>
              <p className="text-slate-50 mb-4">
              Developed a book e-commerce website with an admin panel using ES6, Next.js, React, and MongoDB. The admin panel enables CRUD operations to add or remove books and manage inventory. Implemented role-based authentication for secure access, JWT for user authentication, bcryptjs for password hashing, React Hook Form for form handling, and Axios for API communication.
              </p>
              <div className="flex space-x-4">
              
              <a href='https://github.com/Priyanshu-89/bookheaven' target='_blank' className="bg-gray-50 text-[#EF83B9] px-4 py-2 rounded-md ">View Source Code</a>
              </div>
            </div>

            
          </div>
        </div>

        {/* Real World project  */}

        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-3 flex items-center">
            Real World Projects 🌐
          </h2>
        

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
            {/* Django Project Card 1 */}
            <div className="border border-gray-300 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-3 text-[#EF83B9]">Novocardia</h3>
              <p className="text-slate-50 mb-4">
              Developed a real-world e-commerce website for Novocardia, a medical drug supplier, using Next.js. The website focuses on user-friendly frontend development with features like email validation to ensure secure customer registration and communication. The platform facilitates efficient product browsing and purchase, ensuring a seamless and secure online experience for users in the medical industry.
              </p>
              <div className="flex space-x-4">
              <a href='https://www.novocardia.in/' target='_blank' className="bg-[#EF83B9] text-sm text-white px-2 py-2 w-full text-center rounded-md ">Live Link</a>
             
              </div>
            </div>

            {/* Django Project Card 2 */}
            <div className="border border-gray-300 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-3 text-[#EF83B9]">Eagleye</h3>
              <p className="text-slate-50 mb-4">
              Developed a real-world marketing platform website named Eaglaye, using Next.js. The site focuses on enhancing user engagement with a clean, intuitive interface and secure email validation for customer registration. The platform enables businesses to effectively market their services and products, offering a seamless and user-friendly online experience.
              </p>
              <div className="flex space-x-4">
              <a href='https://eagleye.vercel.app/' target='_blank' className="bg-[#EF83B9] text-sm text-white px-2 py-2 text-center rounded-md w-full ">Live Link</a>
             
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

          <div className="grid grid-cols-1 gap-8">
            {/* Django Project Card 1 */}
            <div className="border border-gray-300 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-3 text-[#EF83B9]">E-Juice World</h3>
              <p className="text-slate-50 mb-4">
              The E-Juice World project aims to create a user-friendly, secure online platform for purchasing e-juices. It offers a comprehensive product catalog, vendor management, and essential features like user authentication, shopping cart, and reviews, focusing on convenience, affordability, and customer satisfaction.
              </p>
              <div className="flex space-x-4">
              <a href={vide} target='_blank' className="bg-[#EF83B9] text-sm text-white px-2 py-0 rounded-md  inline-flex justify-center items-center">Video</a>
              <a href='https://github.com/Priyanshu-89/Ejucie_django_project' target='_blank'  className="bg-gray-50 text-[#EF83B9] px-4 py-2 rounded-md ">View Source Code</a>
              </div>
            </div>

           
          </div>
        </div>

      </div>
    </>
  );
}

export default Portfolio;
