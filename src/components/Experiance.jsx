import React from 'react';
import dj from '../../public/dj.png';
import gsap from '../../public/gsap.png';
import java from '../../public/java.png';
import mern from '../../public/mern.png';
import next from '../../public/next.png';
import ts from '../../public/ts.png';
import front from '../../public/front.png';

function Experiance() {
  const cardItem = [
    {
      id: 0,
      title: "Front",
      name: "Frontend Stack",
      image: front,
    },
    {
      id: 1,
      title: "MERN",
      name: "MERN",
      image: mern,
    },
    {
      id: 2,
      title: "Next",
      name: "Next.js",
      image: next,
    },
    {
      id: 3,
      title: "DJ",
      name: "Django",
      image: dj,
    },
    {
      id: 4,
      title: "GSAP",
      name: "GSAP",
      image: gsap,
    },
    {
      id: 5,
      title: "Java",
      name: "Java",
      image: java,
    },
    {
      id: 6,
      title: "TypeScript",
      name: "TypeScript",
      image: ts,
    },
  ];

  return (
    <div name="Experiance" className="max-w-screen-2xl container mx-auto text-white px-4 md:px-20 bg-slate-900 py-4">
      <h1 className="text-3xl font-semibold mb-5 text-[#EF83B9]">Experience</h1>
      <span className="underline font-semibold">Technologies I've Worked With</span>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-8">
        {cardItem.map((item) => (
          <div
            key={item.id}
            className=" flex flex-col items-center text-center transform transition-transform duration-300 hover:scale-105"
          >
            <img src={item.image} alt={item.title} className="h-24 w-24 mb-4" />
            <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
            {/* <p className="text-gray-500">{item.title}</p> */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experiance;
