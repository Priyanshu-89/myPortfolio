import React from 'react'

function About() {
    return (
        <>
            <div name="About" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-20'>
                <h1 className='text-3xl font-semibold mb-5'>About</h1>
                <p>I' a passionate web developer dedicated to creating clean, user-friendly websites. I combine creativity and technical expertise to bring innovative ideas to life online</p>
                <br />
                <h1 className='text-green-500 font-semibold text-xl'>Education & Training</h1>
                <span>
                    [Degree/Certification], [Institution], [Year] [Degree/Certification], [Institution], [Year] [Relevent Course], [Platform/Institution], [Year]
                </span>

                <br></br>
                <br />
                <h1 className='text-green-500 font-semibold text-xl'>Skills & Expertise</h1>
                <span>
                    Proficient in [Programming Languages] Experienced with [Software Tools/Technologies] Strong grasp of [Design Principles/Concepts]
                    Excellent problem-solving skills Effective communicator and collaborator
                </span>
                <br></br>
                <br />
                <h1 className='text-green-500 font-semibold text-xl'>Achievements & Awards</h1>
                <p>
                    [Award/Recognition], [Year] [Award/Recognition], [Year] [Award]
                </p>

                <br></br>
                <h1 className='text-green-500 font-semibold text-xl'>Mission Statement</h1>

                <p>
                    I strive to combine AI-driven insights with robust web development, creating websites that not only look great but also adapt and evolve for optimal user engagement.
                </p>
            </div>
        </>
    )
}

export default About