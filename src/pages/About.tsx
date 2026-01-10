import travel from '@/assets/images/travel.jpg'
import Navbar from '@/components/Navbar'

export default function About() {
    return (
        <div>
            <Navbar/>
            <div className='  pt-25'>
                <div className="flex justify-center">
                    <img className='w-300 h-100 object-cover mb-20' src={travel} alt="" />
                </div>
                <div>
                    <h1>Tripzy! — <br />
                        your digital travel marketplace</h1>
                </div>
            </div>
        </div>
    )
}
