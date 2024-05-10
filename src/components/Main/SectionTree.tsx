
import secTree1 from '../../assets/sectionTreeImg/secTree1.png'

function SectionTree() {
  return (
    <div className='h-[100dvh] min-w-full flex justify-center items-center'>
      <div className='flex flex-row min-h-[60%] max-w-full justify-center items-center gap-[100px] bg-secondaryColor'>
        <img src={secTree1} alt="secImg" className='h-[300px] w-[450px] object-fill relative -top-[40px]'/>
        <div className='w-[30%] h-full relative flex flex-col items-center gap-3 -ml-8'>
          <div className='p-3 flex flex-col gap-3'>
            <h1 className='text-2xl font-serif font-bold'>SignUp And Get 20% Off On Next Order</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt eligendi molestiae pariatur necessitatibus voluptatum. Ullam sapiente reprehenderit eos veniam dolore Illum consequatur aliquid sequi non, temporibus exercitationem animi!</p>
          </div>
          <div className='p-2 flex flex-row justify-center items-center gap-2 bg-white rounded-md -ml-8'>
            <input type="text" placeholder='Enter your email address' className='outline-none text-center text-xl'/>
            <button type='button' className='text-white font-semibold bg-mainColor p-2 rounded-md'>SUBSCRIBE</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SectionTree