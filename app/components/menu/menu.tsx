'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"
import { menu } from "@/app/anim"
import { motion } from "framer-motion"

interface isAct {
  setIsActive: (isActive: boolean) => void
}
export default function Menu({ setIsActive }: isAct) {

    const pathname = usePathname()

  return(
    <motion.div variants={menu} initial="closed" animate='open' exit='closed' className="w-full h-screen bg-[#f1e2d3d8] fixed top-0 left-0 flex items-center justify-center backdrop-blur-2xl z-10
        md:hidden">
        <div className="flex items-center justify-center flex-col text-7xl gap-6 text-[#303b30d0] font-semibold">
            <Link onClick={() => setIsActive(false)} href={'/'} className={`${pathname === '/' ? 'lin2' : ''} relative`}>Home</Link>
            <a onClick={() => setIsActive(false)} href="https://3dmagazine.aflip.in/e585a148c9.html" target="blank" className="">About</a>
            <Link onClick={() => setIsActive(false)} href={'/contact'} className={`${pathname === '/contact' ? 'lin2' : ''} relative`}>Contact</Link>
            <Link onClick={() => setIsActive(false)} href={'/booking'} className={`${pathname === '/booking' ? 'lin2' : ''} relative`}>Booking</Link>
        </div>
    </motion.div>
  )
}
