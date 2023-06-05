import React, { useState } from 'react'

// import {RxHamburgerMenu} from "react-icons/rx"
import { Link, NavLink } from "react-router-dom";
import { GrCart } from "react-icons/gr";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { trust, img, img2, kampur, pavel, tima, contact, insta, tweet, fb } from "../assets"
import Footer from './Footer';
const Navbar = () => {
    ScrollReveal({
        reset: true,
        distance: '100px',
        duration: 1500,
        delay: 400
        //interval
      });
      ScrollReveal().reveal('.top', { delay: 300, origin: 'top'  });
      ScrollReveal().reveal('.bottom', { delay: 300, origin: 'bottom'  });
    
      
    const [toggle, setToggle] = useState(true)
    return (
        <>

            <div className="navbar container  ">

                <div className='top-0 flex items-center left-0 w-full  fixed z-10 justify-around my-8'>
                    <div className="left">
                        <div className="logo text-black text-4xl font-extrabold w-36">
                            GET FIIT.
                        </div>
                    </div>
                    <div>
                        <ul className="sm:flex space-x-5  md:space-x-0 md:flex-row lg:flex lg:space-x-14 lg:flex-row font-bold hidden md:block text-black">
                            <li className='hover:text-blue-400 cursor-pointer'>Home</li>
                            <li className='hover:text-blue-400 cursor-pointer'>About</li>
                            <li className='hover:text-blue-400 cursor-pointer'>Contact</li>
                        </ul>
                    </div>
                    <div className="right-mobile  sm:block md:hidden xl:hidden 2xl:hidden ">
                        <div className="nav-items my-4">
                            {
                                toggle ? (
                                    ""
                                ) :
                                    <div className=" absolute bg-slate-100 w-full top-14 left-0 ">
                                        <div className="nav-items my-4">

                                            <ul className="flex flex-col text-center p-5 space-y-9 text-black mt-24">
                                                <li>Home</li>
                                                <li>About</li>
                                                <li>Contact</li>
                                            </ul>

                                        </div>
                                    </div>
                            }
                        </div>
                    </div>
                    <div
                        className="md:hidden mr-7 -mt-5">
                        {
                            toggle ? <GiHamburgerMenu className='text-black' onClick={() => setToggle(false)} /> : <AiOutlineClose className='text-black' onClick={() => setToggle(true)} />
                        }
                    </div>
                </div>
                <div className='md:flex md:flex-row p-10  lg:-mt-10 items-center'>
                    <div className="p-8 ">
                        <div className=" p-4 pb-16 mt-10 mb-40 md:w-[60%] lg:w-[50%] md:p-16  md:mt-10 lg:mt-20 md:pb-44 md:-mr-72">
                            <p className="text-xl mt-20 title text-black font-extrabold md:text-3xl text-center"> Remember who you're doing it for. It's Your Workout, Your Time, Your Body, Own It.</p>
                            <button type="button" className="relative mx-36 px-8 py-4 ml-20 mt-9 overflow-hidden  font-semibold rounded dark:bg-gray-100 dark:text-gray-900 bg-white">REGISTER
                                <span className="absolute top-0 right-0 px-5 py-1 text-xs tracking-wider text-center uppercase whitespace-no-wrap origin-bottom-left transform rotate-45 -translate-y-full translate-x-1/3 bg-black text-black dark:bg-violet-400">NOW</span>
                            </button>
                        </div>
                    </div>
                    <div className='w-[20rem] relative mr-20'>
                        <img src={img} alt="" className='hidden md:block vibrate1' />
                        <img src={img2} className='absolute right-60 -top-16 hidden md:block vibrate2' alt="" />

                    </div>
                </div>
            </div>
            {/* lg:left-64 */}
            <div className='lg:absolute -mt-40 lg:mt-36 lg:top-[40rem]  lg:mx-auto'>

                <p className=' text-lg lg:text-3xl bg-white p-2 text-black text-center font-semibold '>Excersises in Your Home with these Home Excersises</p>
                <div className=' grid gap-6 grid-cols-2 mx-auto w-fit lg:flex lg:flex-row justify-between mt-10'>
                    <div className="box1 w-fit text-center cursor-pointer hover:scale-105 rounded-3xl p-4 shadow-lg shadow-slate-400 ">
                        <img src="" className="w-20 mx-auto" />
                        <p className="mt-2 font-extrabold text-sm ">SHOULDERS</p>
                    </div>
                    <div className="box1 w-fit text-center cursor-pointer hover:scale-105 rounded-3xl p-4 shadow-lg shadow-slate-400 ">
                        <img src="" className="w-20 mx-auto" />
                        <p className="mt-2 font-extrabold text-sm ">CHEST</p>
                    </div>
                    <div className="box1  w-fit text-center cursor-pointer hover:scale-105 rounded-3xl p-4 shadow-lg shadow-slate-400 ">
                        <img src="" className="w-20 mx-auto" />
                        <p className="mt-2 font-extrabold text-sm ">UPPER ARMS</p>
                    </div>
                    <div className="box1   w-fit text-center cursor-pointer hover:scale-105 rounded-3xl p-4 shadow-lg shadow-slate-400 ">
                        <img src="" className="w-20 mx-auto" />
                        <p className="mt-2 font-extrabold text-sm ">WAIST</p>
                    </div>
                </div>

                <Link to="/ExcersisesDetails">
                    <p className='font-extrabold text-lg hover:underline  mx-auto w-fit mt-10 hover:shadow-slate-400'> MORE </p>
                </Link>

                <div className="trust mt-20">
                    <div className="p font-extrabold text-3xl text-center">TRUSTED BY 3,00,000 PEOPLE <img className=' mx-auto w-20 mt-10 ' src={trust} alt="" srcset="" /> </div>

                </div>

                <div className='testimonials mt-30 lg:p-20 p-5'>
                    <h1 className='mt-10 font-bold text-3xl'>OUR TESTIMONIALS</h1>
                    <div className="divmain flex flex-col lg:grid lg:grid-cols-3 lg:mt-10 mt-5">
                        <div className="div top"> <img src={kampur} alt="" /> </div>
                        <div className="div bottom"><p className='p-5 mt-5 italic'>"Joining Get Fiit Gym was one of the best decisions I've ever made for my fitness journey. The state-of-the-art equipment, knowledgeable trainers, and supportive community have helped me achieve my fitness goals faster than I ever thought possible. Get Fiit is my fitness sanctuary!" - Mark</p></div>
                        <div className="div top"><img src={pavel} alt="" /></div>
                        <div className="div bottom"><p className='p-5 mt-5 italic'>"I've tried several gyms in the past, but none compare to the welcoming and inclusive environment of Get Fiit. From the moment I walked in, I felt like part of a fitness family. The variety of classes, friendly staff, and positive atmosphere motivate me to push myself harder every day. Get Fiit is my happy place!" - Jessica</p></div>
                        <div className="div top"><img src={tima} alt="" /></div>
                        <div className="div bottom"><p className='p-5 mt-5 italic'>"I can't say enough good things about Get Fiit. The trainers here are top-notch and genuinely care about helping you reach your fitness goals. They provide personalized workout plans and are always available to offer guidance and support. Thanks to Get Fiit, I've transformed both physically and mentally. It's more than just a gym; it's a life-changing experience!" - Ava</p></div>
                    </div>
                </div>

                <div className="contact">
                    <div className="main flex items-center flex-col lg:flex-row justify-evenly p-10">
                        <div className="left  ">
                            <img className='w-96' src={contact} alt="" />
                        </div>

                        <div className="right text-center items-center my-10 gap-0 w-fit p-10">
                            <div className='text-lg mt-2'>Address: 1722 Avene Road, North Hills Washington DC </div>
                            <div className='text-lg mt-2'>E-mail: getfiit@gmail.com </div>
                            <div className='text-lg mt-2'>Phone: 7148841587 </div>
                            <p className='flex  mx-5 lg:mx-36 items-center space-x-5 mt-2'><img className='w-10 cursor-pointer' src={fb} alt="" /><img className='w-10 cursor-pointer' src={insta} alt="" />
                                <img className='w-10 cursor-pointer' src={tweet} alt="" /></p>
                        </div>
                    </div>
                </div>

                <Footer />
            </div>

        </>
    )
}

export default Navbar
