
import secOneImg from '../../assets/sectionImg/sectionOne.png'
import { Link } from 'react-router-dom'

function SectionOne() {
  return (
    <div className='h-[100dvh] min-w-full flex justify-center items-center'>
      <div className='flex flex-row min-h-[60%] max-w-[70%]  absolute justify-evenly items-center'>
        <div className='min-w-[40%] h-[300px] relative bg-secondaryColor rounded-tr-3xl'>
          <img src={secOneImg} alt="secImg" className='absolute h-[600px] w-[600px] object-cover -top-[200px]'/>
        </div>
        <div className='max-w-[40%] h-full relative flex flex-col items-center gap-3'>
          <div className='p-3 flex flex-col gap-3'>
            <h1 className='text-2xl font-serif font-bold'>Make Your Garden Good Nutrition</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt eligendi molestiae pariatur necessitatibus voluptatum. Ullam sapiente reprehenderit eos veniam dolore! Dolores porro minus non quasi, neque voluptates praesentium obcaecati consectetur nihil quo itaque, Illum consequatur aliquid sequi non, temporibus exercitationem animi!</p>
          </div>
          <Link to='' className=' bg-mainColor text-white p-2 mb-2 rounded-xl'>
            Shop Now
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SectionOne