import Image from 'next/image'
import Logo from '@/assets/DesignAGENCY.png'
const Navbar = () => {
    return (
        <div className="flex justify-between py-3 items-center font-sans">
            <div className="ml-10">
                <Image src={Logo} width={179} height={34}/>
            </div>
            <div className="flex gap-8 mr-14">
                <div className="mt-2 flex gap-10 ml-11">
                <a>Services</a>
                <a>About us</a>
                <a>Contact Us</a>
                </div>
                <div className="p-2 border border-current rounded border-emerald-600 flex gap-4">
                <button >Login</button>
                </div>
                <div className="p-2 border border-current rounded border-none bg-emerald-600 flex gap-4 text-white">
                <button>Register</button>
                </div>
           </div>

        </div>
    )
}

export default Navbar