
import secTwo1 from '../../assets/sectionTwoImg/secTwo1.jpg'
import secTwo2 from '../../assets/sectionTwoImg/secTwo2.jpg'
import secTwo3 from '../../assets/sectionTwoImg/secTwo3.jpg'


function SectionTwo() {
  return (
    <div className='h-[50vh] w-full flex flex-col items-center gap-4'>
        <h1 className="text-2xl font-serif font-bold">Products Price List</h1>
        <div className='flex flex-col items-center'>
            <p className=' text-teal-800'>There are the story of our customers who have joined us great.</p>
            <p className=' text-teal-800'>plessure when using this crazy feature</p>
        </div>
        <div className='flex flex-row mt-2 gap-5'>
            <img src={secTwo1} alt="secTwo1" className='h-[200px] w-[300px] object-cover rounded-t-2xl'/>
            <img src={secTwo2} alt="secTwo2" className='h-[200px] w-[300px] object-cover rounded-t-2xl'/>
            <img src={secTwo3} alt="secTwo3" className='h-[200px] w-[300px] object-cover
            rounded-t-2xl'/>
        </div>
    </div>
  )
}

export default SectionTwo