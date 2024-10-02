'use client'
import Image from "next/image";
// import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import portrait from "@/public/images/img4.jpg"
import img2 from "@/public/images/img2.jpg"
import img3 from "@/public/images/img3.png"
import logo from '@/public/images/logo.png'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
gsap.registerPlugin(useGSAP);

export default function Home() {

  const currentYear = new Date().getFullYear()
  const overlay = useRef(null)
  const text = useRef(null)
  const logos = useRef(null)

  useGSAP(() => {

    gsap.set(text.current, {
      y: '40%',
    })
    gsap.set(logos.current, {
      scale: 0
    })

    const tl = gsap.timeline({
      defaults: {
        duration: 1.5,
        ease: 'power3.inOut'
      },
      onStart: () => {
        document.body.style.overflow = 'hidden'
      },
      onComplete: () => {
        document.body.style.overflow = ''
      }
    }) 

    tl.to(text.current, {
      y: 0,
      opacity: 1
    }).to(text.current, {
      opacity: 0,
      delay: 0.1
    }).to(logos.current, {
      scale: 1,
      opacity: 1
    }).to(logos.current, {
      rotate: 720,
      scale: 1.5,
      duration: 2
    }).to(logos.current, {
      scale: 0,
      duration: 1.2,
      ease: 'power4.inOut'
    }).to(overlay.current, {
      opacity: 0,
      userSelect: 'none',
      pointerEvents: 'none'
    })
  }, [text, logos, overlay])

  return (
    <div className="overflow-hidden">
      <div ref={overlay} className="fixed w-full h-screen z-[100] bg-cream flex items-center justify-center select-none">
        <p ref={text} className="text-6xl sm:text-8xl uppercase font-bold text-[#c59245] opacity-0">Welcome</p>
        <Image ref={logos} src={logo} alt="" className="absolute w-[7rem] opacity-0"/>
      </div>
      {/* page1 */}
      <div className="relative w-full h-screen overflow-hidden flex items-center justify-center z-10">
        <video className="w-full h-full object-cover brightness-75 bg-[#1a2c1aa8]" autoPlay loop muted playsInline>
          <source src="/videos/yogavid.webm" type="video/webm"/>
          <source src="/videos/yogavid.mp4" type="video/mp4"/>
        </video>
        <div className="absolute bg-[#ffffff1a] w-full h-full top-0 left-0"></div>
        {/* grain overlay */}
        <div className="filt w-full h-full mix-blend-multiply top-0 absolute"></div>
        <svg width="0" height="0">
          <filter id="noise-filter">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.5"
              numOctaves="4"
              result="noise"
            />
            <feBlend mode="multiply" in="SourceGraphic" in2="noise"/>
          </filter>
        </svg>
        <div className="absolute flex flex-col items-center">
          <div className="font-gunsan text-8xl sm:text-9xl md:text-[10rem] lg:text-[15rem] xl:text-[22rem] 4xl:text-[30rem] text-[#dbd4cb] select-none pointer-events-none">
            <p className="relative -translate-x-[7%] leading-[0.65]">yogas7</p>
            <p className="relative translate-x-[7%] leading-[0.65]">studio</p>
          </div>
          <div className="flex translate-y-10 w-full items-center justify-center flex-col relative z-20">
            <div className="relative flex sha rounded-full z-20">
              <motion.a href="https://3dmagazine.aflip.in/e585a148c9.html" target="blank" 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3}}
                className="px-7 py-4 bg-[#dbd4cb] rounded-full text-lg">
                Meet your instructor
              </motion.a>
            </div>
            <div className="absolute top-[5rem] sm:top-auto text-[#dbd4cb] flex items-center justify-center gap-4 sm:gap-[18rem] z-10">
              <motion.div whileHover={{ scale: 1.07 }} transition={{ duration: 0.3}} className="flex">
                <a href="https://www.instagram.com/yogas7.fi/?igsh=NmpjY2psY3JhcWlw" target="blank" className="px-5 py-2 font-medium border-2 border-[#dbd4cb] rounded-full p1social sha">Instagram</a>
              </motion.div>
              <motion.div whileHover={{ scale: 1.07 }} transition={{ duration: 0.3}} className="flex">
                <a href="https://www.facebook.com/share/CjcB12YwpKuSpZua/?mibextid=LQQJ4d" target="blank" className="px-5 py-2 font-medium border-2 border-[#dbd4cb] rounded-full p1social sha">Facebook</a>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* page2 */}
      <div className="relative w-full h-auto md:h-screen bg-[#f1e2d3] z-10 flex items-center justify-center">
        <div className="relative flex flex-col-reverse my-[3%] md:my-0 md:flex-row w-[95%] h-[90%] bg-[#a0b19833] rounded-3xl">
          <div className="relative flex-1 flex items-center justify-center xl:justify-end xl:right-[7%]">
            <div className="flex flex-col my-[10%] items-center justify-center gap-6 text-[#c59245] text-center w-[90%] xl:w-[60%]">
              <p className="text-5xl lg:text-6xl 3xl:text-8xl font-bold">Moikka</p>
              <p className="text-xl md:text-base lg:text-lg xl:text-xl 3xl:text-3xl font-semibold">Olen YOGA S7 yrityksen perustaja. Tarjoan hyvinvointia päästä varapaisiin.
                Elokuussa auennut jooga, pilates ja hyvnvoinnin studio
                Lauttasaaressa Särkiniementie 5. <br /><br />Tule sellaisena kuin olet rauhaissaan
                olohuoneeseen, kun tarvitsen hengähdystaukoa arjen keskellä tai hetken aikaa jakaa 
                ajatuksia. One moment can change a day. One day can change a life. One life can change the world.
                  <br /><br />-Buddha-
              </p>
              <motion.div whileHover={{scale: 1.08}} transition={{duration: 0.2}} className="flex">
                <Link href={'/booking'} className="px-8 py-2 font-semibold border-2 border-[#c59245] rounded-full
                  text-lg 3xl:text-2xl 3xl:border-[3px] 3xl:px-11 3xl:py-3 p2button">
                  Varaa
                </Link>
              </motion.div>
              <p className="text-sm text-[#2e362eb2] cursor-default select-none">
                ePassi, Edenred, Smartum
              </p>
            </div>
          </div>
          <div className="relative flex-1 flex items-center justify-center xl:justify-start xl:left-[2%]">
            <Image src={portrait} alt="" className="mt-[4%] sm:mt-[5%] md:mt-0 w-[92%] h-[30rem] sm:w-[90%] sm:h-[60vw] lg:h-[45vw] 
            xl:w-[70%] xl:h-[90%] object-cover rounded-xl"/>
          </div>
        </div>
      </div>

      {/* page3 */}
      <div className="relative w-full h-auto bg-cream flex flex-col items-center justify-center gap-4
        md:gap-8 4xl:gap-16 py-4 md:py-0 mb-12 z-10">
        <p className="text-[#c59245] text-7xl lg:text-8xl 4xl:text-9xl uppercase font-semibold my-8">Studio</p>
        <div className="relative flex flex-col md:flex-row gap-4 lg:gap-16 4xl:gap-[10rem] justify-center items-center">
          <Image src={img2} alt="" className="object-cover w-[95%] sm:w-[60%] md:w-[40%] lg:w-[30%] rounded-xl"/>
          <Image src={img3} alt="" className="object-cover w-[95%] sm:w-[60%] md:w-[40%] lg:w-[30%] rounded-xl"/>
        </div>
        <p className="text-[#c59245] text-center text-2xl lg:text-4xl 4xl:text-6xl uppercase font-semibold mt-8">
          Studiolla on kaikki tarvittavat välineet
        </p>
      </div>

      {/* footer */}
      <div className="relative w-full h-auto bg-cream z-10 flex flex-col justify-between items-center">
        <div className="absolute top-0 w-[270%] sm:w-[150%] 3xl:w-[115%] h-[10rem] rounded-t-[100%] bg-[#acc89f]"></div>
        <div className="absolute bottom-0 w-full h-[calc(100%-10rem)] bg-[#acc89f]"></div>
        <p className="relative z-10 pt-8 text-white text-2xl font-semibold">Sisäänkäynti 5A rappu B, 5krs</p>
        <div className="z-10 w-full h-full flex items-center justify-center pt-8">
          <iframe className="w-[95%] md:w-[80%] lg:w-[45%] h-[40vh] rounded-2xl" 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1123.2050978898478!2d24.878905045848718!3d60.14873281446169!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46920be8fe13e999%3A0x8532842a7ffbcae5!2sYOGA%20S7!5e0!3m2!1sfi!2sfi!4v1727883967842!5m2!1sfi!2sfi" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <p className="z-10 py-8 text-xs text-white pointer-events-none">&copy; {currentYear}, &copy; YOGAS7, &reg; ALL RIGHTS RESERVED</p>
      </div>
    </div>
  );
}
