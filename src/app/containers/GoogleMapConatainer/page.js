"use client";
import React from "react";
import { motion } from 'framer-motion';

const ContactPageContainer = () => {
    return (
        <main id="contact" className="flex justify-center py-10" >

            <div className="container" data-aos="fade-up">
                <div className=' flex flex-col items-center justify-center px-5 text-center  py-10 pb-10'>
                    <p className='text-gray-500 py-1'  >CONTACT</p>
                    <p className='text-2xl '>NEED HELP? <span className='text-red-700'>CONTACT US</span></p>
                </div>

                <div className="mb-3 px-5  md:px-10">
                    <iframe
                        style={{ border: '0', width: '100%' }}
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621"
                        allowFullScreen
                        className="md:h-[500px] h-[350px]"
                    >
                    </iframe>
                </div>

                {/* <section className="md:flex md:flex-col justify-center items-center"> */}




                    <div className="grid grid-cols-1 md:grid-cols-2 md:px-10 p-5 gap-4">
                        <div className="info-item flex items-center   bg-[#EEEEEE] p-1">
                            <div className="bg-red-700 p-3 rounded-full m-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="white" class="bi bi-house-check" viewBox="0 0 16 16">
                                    <path d="M7.293 1.5a1 1 0 0 1 1.414 0L11 3.793V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v3.293l2.354 2.353a.5.5 0 0 1-.708.708L8 2.207l-5 5V13.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 1 0 1h-4A1.5 1.5 0 0 1 2 13.5V8.207l-.646.647a.5.5 0 1 1-.708-.708z" />
                                    <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m1.679-4.493-1.335 2.226a.75.75 0 0 1-1.174.144l-.774-.773a.5.5 0 0 1 .708-.707l.547.547 1.17-1.951a.5.5 0 1 1 .858.514" />
                                </svg>
                            </div>
                            <div className="p-2">
                                <h3 className="text-xl font-bold text-gray-500">Our Address</h3>
                                <p>A108 Adam Street, New York, NY 535022</p>
                            </div>
                        </div>

                        <div className="info-item flex items-center  bg-[#EEEEEE] p-1">
                            <div className="bg-red-700 p-3 rounded-full m-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="white" class="bi bi-envelope" viewBox="0 0 16 16">
                                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-500">Email Us</h3>
                                <p>contact@example.com</p>
                            </div>
                        </div>

                        <div className="info-item flex items-center bg-[#EEEEEE] p-1">
                            <div className="bg-red-700 p-3 rounded-full m-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="white" class="bi bi-telephone" viewBox="0 0 16 16">
                                    <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-500">Call Us</h3>
                                <p>+1 5589 55488 55</p>
                            </div>
                        </div>

                        <div className="info-item flex items-center bg-[#EEEEEE] p-1">
                            <div className="bg-red-700 p-3 rounded-full m-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="white" class="bi bi-alarm" viewBox="0 0 16 16">
                                    <path d="M8.5 5.5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9z" />
                                    <path d="M6.5 0a.5.5 0 0 0 0 1H7v1.07a7.001 7.001 0 0 0-3.273 12.474l-.602.602a.5.5 0 0 0 .707.708l.746-.746A6.97 6.97 0 0 0 8 16a6.97 6.97 0 0 0 3.422-.892l.746.746a.5.5 0 0 0 .707-.708l-.601-.602A7.001 7.001 0 0 0 9 2.07V1h.5a.5.5 0 0 0 0-1zm1.038 3.018a6 6 0 0 1 .924 0 6 6 0 1 1-.924 0M0 3.5c0 .753.333 1.429.86 1.887A8.04 8.04 0 0 1 4.387 1.86 2.5 2.5 0 0 0 0 3.5M13.5 1c-.753 0-1.429.333-1.887.86a8.04 8.04 0 0 1 3.527 3.527A2.5 2.5 0 0 0 13.5 1" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-500">Opening Hours</h3>
                                <div>
                                    <strong>Mon-Sat:</strong> 11AM - 23PM; <strong>Sunday:</strong> Closed
                                </div>
                            </div>
                        </div>
                    </div>
                {/* </section> */}
            </div>
        </main>
    );
};

export default ContactPageContainer;
