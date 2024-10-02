export default function Contact() {
  return(
    <div className="overflow-hidden">
        <div className="w-full h-screen flex items-center justify-center">
            <div className="relative flex flex-col items-center justify-center gap-24 px-12 py-12 
                w-[95%] lg:w-auto border-4 border-[#384438ce] text-center rounded-3xl">
                <div className="flex flex-col items-center justify-center text-3xl sm:text-6xl text-[#384438ce] uppercase font-bold">
                    <p>Tavoita puhelimella</p>
                    <p className="text-2xl sm:text-4xl">+358 50 522 4550</p>
                </div>
                <div className="flex flex-col items-center justify-center text-3xl sm:text-6xl text-[#384438ce] font-bold">
                    <p className="uppercase">Tavoita sähköpostilla:</p>
                    <a href="mailto:rajusanna7@gmail.com" className="hover:underline underline-offset-[10px] text-2xl sm:text-4xl">rajusanna7@gmail.com</a>
                </div>
            </div>
        </div>
    </div>
  )
}
