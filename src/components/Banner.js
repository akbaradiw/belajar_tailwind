import Image from 'next/image'
import Saint from '@/assets/sunankalijaga.png'

const Banner = () => {
    return (
        <div className=" flex justify-around py-3 items-center font-sans">
         <div>
            <h1 className='text-5xl ml-11 pl-4 mb-10' style={{width: '500px'}}>
            Increase Your Customers Loyalty and Satisfaction
            </h1>
            <p className='text-2xl ml-11 mb-8 pl-4' style={{width: '500px'}}>
            We help businesses like yours earn more customers, standout from competitors,  make more money
            </p>
             <button className="ml-11 border border-current rounded border-none bg-emerald-600  text-white" style={{width: '200px', height: '80px'}}> Get Started</button>  
            </div>   
            <div className="ml-10">
                <Image src={Saint} width={700} height={646}/>
            </div>
        </div>
    )
}

export default Banner