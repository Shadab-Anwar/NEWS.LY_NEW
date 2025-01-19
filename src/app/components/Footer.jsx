import React from 'react'
import { logo, logo_dark } from './Assets'

function Footer() {
  return (
    <>

    <div className="foot bg-[#323232] text-[white] h-[140px] w-full flex py-5 mt-6">
        <div className="foot1 flex flex-row px-[14%] py-0">
        <div className="f1 flex flex-col">
            <img src={logo_dark} alt="no" className='img h-10 w-[170px] bg-blend-screen mb-[-10px] '/><br />
            <div className="b flex justify-content: end"><b className='text-[15px] opacity-[65%] pr-2.5'>News.ly</b></div><div className="txt text-[13px] text-[gray] flex pr-2.5 justify-content: end">Pte.Ltd.&copy;COPYRIGHT 2024</div>
        </div>
        <div className="f2 pl-5">
            <a href="/" className='no-underline text-[white]'><img src="https://assets.inshorts.com/website_assets/images/contact_icon.png" alt="no" className="img2 h-[80px] w-[189px] -mt-2.5 pb-[25px]" /></a>
            <div className="txt2 text-[13px] -mt-4"><a href="/" className='no-underline text-[white]'>Terms&Conditions </a><br />
            <a href="/" className='no-underline text-[white]'>Privacy Policies</a></div>
        </div>
        {/* <div className="f3 flex flex-row pl-[125%] align-items: end">
            <div className="fb"><a href="https://www.facebook.com/news" className='no-underline text-[white]'><img src="https://assets.inshorts.com/website_assets/images/facebook.png" alt="no " className='ics h-[60px] w-[60px] opacity-[80%] m-2 p-4' /></a></div>
            <div className="twi"><a href="https://twitter.com/ShadabAnwa27994" className='no-underline text-[white]'><img src="https://assets.inshorts.com/website_assets/images/twitter.png" alt="no " className='ics h-[60px] w-[60px] opacity-[80%] m-2 p-4' /></a></div>
            <div className="link"><a href="https://www.linkedin.com/in/shadab-anwar/" className='no-underline text-[white]'><img src="https://assets.inshorts.com/website_assets/images/linkedin.png" alt="no" className='ics h-[60px] w-[60px] opacity-[80%] m-2 p-4'/></a></div>
        </div> */}
        </div>
        </div>
    </>
  )
}

export default Footer
