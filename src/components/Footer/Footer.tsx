import logo from '../../assets/logo_nursery.png'

function Footer() {
  return (
    <div className='flex flex-col text-white bg-mainColor'>
      <div className='flex flex-row justify-between p-8'>
        <div>
          <h1>About</h1>
          <ul>
            <li>Compony</li>
            <li>Carear</li>
            <li>Legel</li>
            <li>Help</li>
          </ul>
        </div>
        <div>
        <h1>About</h1>
          <ul>
            <li>Compony</li>
            <li>Carear</li>
            <li>Legel</li>
            <li>Help</li>
          </ul>
        </div>
        <div>
        <h1>About</h1>
          <ul>
            <li>Compony</li>
            <li>Carear</li>
            <li>Legel</li>
            <li>Help</li>
          </ul>
        </div>
        <div>
        <h1>About</h1>
          <ul>
            <li>Compony</li>
            <li>Carear</li>
            <li>Legel</li>
            <li>Help</li>
          </ul>
        </div>
      </div>
      <div className='w-full flex flex-col items-center justify-center p-8'>
          <div className='flex flex-row gap-2 font-bold text-2xl text-lime-600 mb-2'>
            <img src={logo} alt="logo" className='h-8 w-8' />
            <i>Plant</i><i>Nursery</i>
          </div>
          <h1>&#169; 2024 plant nursery: All rights reserved</h1>
          <div>
            logos
          </div>
      </div>
    </div>
  )
}

export default Footer