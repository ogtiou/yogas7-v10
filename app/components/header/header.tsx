'use client'
import Link from "next/link";
import logo from '@/public/images/logo.png'
import Image from "next/image";
import Menu from "../menu/menu";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Header() {

  const pathname = usePathname()
  const [isActive, setIsActive] = useState<boolean>(false)
  
  useEffect(() => {
    if (isActive) {
        document.body.style.overflow = 'hidden'
    } else {
        document.body.style.overflow = ""
    }

    return () => {
        document.body.style.overflow = ""
    }
}, [isActive])

  return(
    <div className="fixed w-full flex items-center justify-between px-4 sm:px-8 py-4 4xl:px-14 z-50">
      <Link href={'/'} className="w-[5rem] -mx-1 -my-1 z-20">
        <Image src={logo} alt="" className=""/>
      </Link>  
      <div className="hidden md:flex items-center gap-5 bg-[#dbd2c798] pr-2 pl-7 py-2 rounded-xl backdrop-blur-lg">
          <div className="flex items-center gap-7">
              <Link href={'/'} className={`${pathname === '/' ? 'lin' : ''} relative`}>Home</Link>
              <a href="https://3dmagazine.aflip.in/e585a148c9.html" target="blank" className="">About</a>
              <Link href={'/contact'} className={`${pathname === '/contact' ? 'lin' : ''} relative`}>Contact</Link>
          </div>
          <Link href={'/booking'} className="bytton">Booking</Link>
      </div>
      <div onClick={() => setIsActive((prev) => !prev)} className="relative px-4 py-2 bg-[#dbd2c798] backdrop-blur-lg rounded-lg z-20 md:hidden">
        <div className="relative px-[1px] overflow-hidden">
          <div className={`relative text-lg text-center flex -translate-y-[100%] 
            transition-all will-change-transform ${isActive ? 'translate-y-0' : ''}`}>
            <p className="relative">Close</p>
            <p className="absolute translate-y-[100%]">Menu</p>
          </div>
        </div>
      </div>
      <AnimatePresence mode="wait">
        {isActive && <Menu setIsActive={setIsActive}/>}
      </AnimatePresence>
    </div>
  )
}
