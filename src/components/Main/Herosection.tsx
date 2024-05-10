
import shipping from '../../assets/delivery-truck.png';
import clock from '../../assets/clock.png';
import growth from '../../assets/growth.png';
import { Link } from "react-router-dom";
import bigImg from '../../assets/herosectionImg/bigImg.jpg';
import hero1 from '../../assets/herosectionImg/hero1.jpg'
import hero2 from '../../assets/herosectionImg/hero2.jpg'



function Herosection() {
  return (
    <div className='flex flex-row h-[100vh] w-full justify-center items-center'>
      <div className='w-[60%] bg-primeryColor h-full flex flex-col justify-center items-center'>
        <div className='w-[50%] h-[60%] flex flex-col gap-7 justify-center items-center box-border p-6'>
          <div className='text-4xl font-serif font-bold flex flex-col gap-[8px]'>
            <h1>Plant A Tree</h1>
            <h1>Today It Will</h1>
            <h1>Help Us Breath </h1>
            <h1>Tommorow</h1>
          </div>
          <div className='box-border w-[78%]'>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <Link to='' className='p-3 bg-mainColor text-white font-semibold rounded-xl'>
            Shop Now
          </Link>
        </div>


        <div className='absolute w-auto flex bg-white p-2 gap-4 translate-y-[230px]'>
          <div className='flex flex-col items-center p-4 border-r-2 border-slate-400'>
            <img src={shipping} alt="shipping" className='h-6 w-6'/>
            <h1>Free Shipping</h1>
          </div>
          <div className='flex flex-col items-center p-4 border-r-2 border-slate-400'>
            <img src={growth} alt="care" className='h-6 w-6'/>
            <h1>Garden Care</h1>
          </div>
          <div className='flex flex-col items-center p-4'>
            <img src={clock} alt="support" className='h-6 w-6'/>
            <h1>Support</h1>
        </div>


      </div>
      </div>
      <div className='w-[40%] h-full relative flex justify-center items-center'>
          <div className='absolute h-[80%] w-[700px] right-3 translate-y-[100px]'>
            <img src={bigImg} alt="myImg" className='absolute h-[400px] w-[700px] object-cover'/>
            <img src={hero1} alt="myImg" className='absolute h-[150px] w-[200px] -left-[35px] -top-[20px] object-cover'/>
            <img src={hero2} alt="myImg" className='absolute h-[150px] w-[200px] top-[180px] -left-[35px] object-cover'/>
          </div>
      </div>
      
    </div>
  )
}

export default Herosection