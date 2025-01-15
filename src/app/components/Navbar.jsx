import React from 'react'
import { logo } from './Assets'

function Navbar() {
  return (
    
    <div className='pb-14'>
        <>
        {/* const [Active, setActive] = useState(false);
        function onclickmenu (){
            setActive(!Active)
        } */}
        <div className="nav flex h-[70px] flex-row items-center shadow-[0px_1px_8px_grey] w-full fixed z-[2] bg-[white] overflow-hidden ">
          <div className="navigation">
          </div>
          <div className="logo flex h-[25px] pl-[45%]">
            <img
                src={logo}
              alt="no logo"
              className=' h-36 my-[-55px] ml-[-20px]'
            />
          </div>

          

        </div>
      </>
      
    </div>
  )
}

export default Navbar
