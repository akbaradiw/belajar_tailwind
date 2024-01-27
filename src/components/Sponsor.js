import Image from 'next/image'
import google from '@/assets/google.png'
import notion from '@/assets/Notion.png'
import slack from '@/assets/Slack.png'
import monday from '@/assets/monday.png'
import trello from '@/assets/trello.png'


const Sponsor = () => {
    const logoSponsor = [notion, google, monday, slack, trello]
    return (
        <div className=' bg-white' >
            <div className='flex justify-center gap-28'>
            {logoSponsor.map((logo) => (
                <div className='mt-7' >
                <Image src={logo} width={120} height={120} />
                </div>
            ))}
            </div>
            
        </div>
    )
}

export default Sponsor