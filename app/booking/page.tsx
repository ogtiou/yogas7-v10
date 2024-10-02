'use client'
import { motion } from "framer-motion"

export default function Booking() {
  return(
    <div className="overflow-hidden bg-cream">
        <div className="relative flex flex-col w-full h-[200vh] md:h-screen md:flex-row">
            <div className="relative flex-1 flex items-center justify-center hovered">
                <video className="w-full h-full object-cover brightness-75 opacity-0 bg-cream show" autoPlay loop muted>
                    <source src="/videos/yogavid.webm" type="video/webm"/>
                    <source src="/videos/yogavid.mp4" type="video/mp4"/>
                </video>
                <div className="absolute bg-[#ffffff1a] w-full h-full opacity-0 show"></div>
                <div className="absolute flex flex-col items-center justify-center gap-5">
                    <p className="uppercase text-center text-7xl lg:text-8xl text-[#384438ce] font-bold 
                        cursor-default select-none textc">
                        yogas7<br />tunnit
                    </p>
                    <motion.div className="flex" whileHover={{scale: 1.04}} transition={{duration: 0.25}}>
                        <a href="https://www.varaaheti.fi/yogas7/fi/yoga_s7_oy/classes" target="blank" className="px-7 py-3 bg-cream border-4 border-[#384438ce]
                            text-[#384438ce] rounded-full font-semibold text-xl bytton2">
                            Varaa tunti tästä
                        </a>
                    </motion.div>
                </div>
            </div>
            <div className="relative flex-1 flex items-center justify-center hovered">
                <video className="w-full h-full object-cover brightness-75 opacity-0 bg-cream show" autoPlay loop muted>
                    <source src="/videos/yogavid.webm" type="video/webm"/>
                    <source src="/videos/yogavid.mp4" type="video/mp4"/>
                </video>
                <div className="absolute bg-[#ffffff1a] w-full h-full opacity-0 show"></div>
                <div className="absolute flex flex-col items-center justify-center gap-5">
                    <p className="uppercase text-center text-7xl lg:text-8xl text-[#384438ce] font-bold 
                        cursor-default select-none textc">
                        yogas7<br />prepaid
                    </p>
                    <motion.div className="flex" whileHover={{scale: 1.04}} transition={{duration: 0.25}}>
                        <a href="https://www.varaaheti.fi/yogas7/fi/prepaids" target="blank" className="px-7 py-3 bg-cream border-4 border-[#384438ce]
                            text-[#384438ce] rounded-full font-semibold text-xl bytton2">
                            Varaa tunti tästä
                        </a>
                    </motion.div>
                </div>
            </div>
        </div>
    </div>
  )
}
