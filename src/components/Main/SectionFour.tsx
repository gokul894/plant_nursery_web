
import secFour1img from '../../assets/sectionFourImg/secTree1.jpg'
import secFour2img from '../../assets/sectionFourImg/secTree2.jpg'
import secFour3img from '../../assets/sectionFourImg/secTree3.jpg'
import { Link } from 'react-router-dom'


function SectionFour() {
  return (
    <div className='h-auto w-full flex flex-col justify-center items-center gap-4 p-8'>
        <div className='h-auto w-[500px] mb-8 flex flex-col gap-1 items-center'>
            <h1 className='text-3xl font-serif font-bold'>Our New Latest Blog With</h1>
            <h1 className='text-3xl font-serif font-bold'>Our New Project</h1>
            <p>Take a look at our service !!</p>
        </div>
        <div className='h-auto w-full flex flex-row justify-center items-center gap-10 mt-8 rounded-2xl mb-[40px]'>
            <div className='h-auto w-[350px] flex flex-col justify-center items-center rounded-2xl bg-secondaryColor'>
                <img src={secFour1img} alt="sectionFour" className='object-fill h-[280px] rounded-2xl' />
                <div className='flex flex-col p-8 justify-center items-center rounded-b-2xl relative gap-4'>
                    <h1 className='text-xl font-bold text-slate-800'>Professional gardening services</h1>
                    <p className='text-slate-800'>Lorem ipsum dolor adipisicing elit. Accusamus similique vero quaerat Doloribus minus dignissimos error cum odio ipsa tempore!</p>
                    <Link to='' className=' bg-mainColor text-white p-2 mb-2 rounded-xl'>
                    Shop Now
                    </Link>
                </div>
            </div>
            <div className='h-auto w-[350px] flex flex-col justify-center items-center rounded-2xl bg-secondaryColor relative top-[40px]'>
                <img src={secFour2img} alt="sectionFour" className='object-fill h-[280px] rounded-2xl' />
                <div className='flex flex-col p-8 justify-center items-center rounded-b-2xl relative gap-4'>
                    <h1 className='text-xl font-bold text-slate-800'>Professional gardening services</h1>
                    <p className='text-slate-800'>Lorem ipsum dolor adipisicing elit. Accusamus similique vero quaerat Doloribus minus dignissimos error cum odio ipsa tempore!</p>
                    <Link to='' className=' bg-mainColor text-white p-2 mb-2 rounded-xl'>
                    Shop Now
                    </Link>
                </div>
            </div>
            <div className='h-auto w-[350px] flex flex-col justify-center items-center rounded-2xl bg-secondaryColor'>
                <img src={secFour3img} alt="sectionFour" className='object-fill h-[280px] rounded-2xl' />
                <div className='flex flex-col p-8 justify-center items-center rounded-b-2xl relative gap-4'>
                    <h1 className='text-xl font-bold text-slate-800'>Professional gardening services</h1>
                    <p className='text-slate-800'>Lorem ipsum dolor adipisicing elit. Accusamus similique vero quaerat Doloribus minus dignissimos error cum odio ipsa tempore!</p>
                    <Link to='' className=' bg-mainColor text-white p-2 mb-2 rounded-xl'>
                    Shop Now
                    </Link>
                </div>
            </div>
             
        </div>
    </div>
  )
}

export default SectionFour