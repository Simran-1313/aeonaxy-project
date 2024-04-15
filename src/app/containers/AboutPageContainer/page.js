"use client";
import React, { useState } from "react";
import Image from "next/image";
import aboutimg1 from "../../../public/about_images/about.jpg";
import aboutimg2 from "../../../public/about_images/about-2.jpg";
import { motion } from "framer-motion";
import Styles from "./AboutPageContainer.module.css";
import Link from "next/link";
import Stats from "@/components/AboutComponent/Stats";

const AboutPageContainer = () => {
   
    

  const [youTubeVideo, setYouTubeVideo] = useState(false);

  return (
    <>
      <main className="flex flex-col md:px-20  pb-5 md:pb-14 overflow-hidden " id="about">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 200 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              ease: "easeInOut",
            }}
            viewport={{ once: true }}
          >
            <div className="py-14 flex flex-col items-center justify-center ">
              <p className="text-gray-500">ABOUT US</p>
              <p className="text-2xl ">
                LEARN MORE <span className="text-red-700"> ABOUT US</span>
              </p>
            </div>
          </motion.div>
        </div>

        <section className="md:flex items-center  h-full ">
          <div className="  md:pr-2  h-full md:w-2/3">
            <motion.div
              initial={{ opacity: 0, y: 200 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                ease: "easeInOut",
              }}
              viewport={{ once: true }}
            >
              <div className="relative w-full h-full">
                <Image
                  src={aboutimg1}
                  height="full"
                  width="full"
                  alt="img not working"
                />
                <div className="bg-white text-black  flex flex-col font-bold absolute  bottom-[20%]  left-1/2  transform -translate-x-1/2  text-center  p-4 place-content-center h-[100px] w-[70%] ">
                  <p className="text-xl">Book a table</p>
                  <p className="text-xl text-red-700">+1 5589 55488 55</p>
                </div>
              </div>
            </motion.div>
          </div>

          <div className=" h-full   md:w-1/3 ">
            <motion.div
              initial={{ opacity: 0, y: 200 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                ease: "easeInOut",
              }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col   px-5 text-left">
                <p className="py-2 md:py-0">
                  Indulge your taste buds in the good experience of Food
                  Restrained Yummy, where culinary delights meet innovation! Our
                  delectable offerings are designed to tantalize your senses and
                  redefine your dining experience.
                </p>
                <div className="flex flex-col p-5">
                  <p className="flex items-center">
                    <span className="px-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="red"
                        class="bi bi-check2-all"
                        viewBox="0 0 16 16"
                      >
                        <path d="M12.354 4.354a.5.5 0 0 0-.708-.708L5 10.293 1.854 7.146a.5.5 0 1 0-.708.708l3.5 3.5a.5.5 0 0 0 .708 0zm-4.208 7-.896-.897.707-.707.543.543 6.646-6.647a.5.5 0 0 1 .708.708l-7 7a.5.5 0 0 1-.708 0" />
                        <path d="m5.354 7.146.896.897-.707.707-.897-.896a.5.5 0 1 1 .708-.708" />
                      </svg>
                    </span>{" "}
                    Innovative Fusion Creations.
                  </p>
                  <p className="flex  items-center">
                    <span className="px-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="red"
                        class="bi bi-check2-all"
                        viewBox="0 0 16 16"
                      >
                        <path d="M12.354 4.354a.5.5 0 0 0-.708-.708L5 10.293 1.854 7.146a.5.5 0 1 0-.708.708l3.5 3.5a.5.5 0 0 0 .708 0zm-4.208 7-.896-.897.707-.707.543.543 6.646-6.647a.5.5 0 0 1 .708.708l-7 7a.5.5 0 0 1-.708 0" />
                        <path d="m5.354 7.146.896.897-.707.707-.897-.896a.5.5 0 1 1 .708-.708" />
                      </svg>
                    </span>
                    Fresh, Locally-Sourced Ingredients.
                  </p>
                  <p className="flex items-center">
                    <span className="px-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="red"
                        class="bi bi-check2-all"
                        viewBox="0 0 16 16"
                      >
                        <path d="M12.354 4.354a.5.5 0 0 0-.708-.708L5 10.293 1.854 7.146a.5.5 0 1 0-.708.708l3.5 3.5a.5.5 0 0 0 .708 0zm-4.208 7-.896-.897.707-.707.543.543 6.646-6.647a.5.5 0 0 1 .708.708l-7 7a.5.5 0 0 1-.708 0" />
                        <path d="m5.354 7.146.896.897-.707.707-.897-.896a.5.5 0 1 1 .708-.708" />
                      </svg>
                    </span>
                    Artistic Presentation for Visual Feast
                  </p>
                </div>
              </div>
            </motion.div>

            <div className="px-5 ">
              <motion.div
                initial={{ opacity: 0, y: 200 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1,
                  ease: "easeInOut",
                }}
                viewport={{ once: true }}
              >
                <div className="  pb-2">
                  Much like selecting ingredients for a recipe, go the right
                  template ensures a harmonious blend of design and
                  functionality. These pre-designed frameworks not only save
                  time but also offer a the starting point for customization.
                </div>
                <div className="flex justify-center py-4 md:py-2 relative">
                  <Image
                    src={aboutimg2}
                    height={300}
                    width="full"
                    alt="img not working"
                    className="md:h-[275px]"
                  />

                  <div className="  absolute  bottom-0  left-1/2  transform -translate-x-1/2  ">
                    <Link href={"/video"}>
                      <div
                        class={`${Styles.btn}  hover:cursor-pointer `}
                        href="/video"
                      ></div>
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        
      </main>
      <Stats/>
    </>
  );
};

export default AboutPageContainer;
