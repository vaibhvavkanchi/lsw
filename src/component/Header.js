import React from 'react'
import { IoIosArrowDown } from 'react-icons/io'

function Header() {
  return (
    <div className="flex gap-5 justify-between px-20 py-7 w-full shadow-lg bg-gray-950 max-md:flex-wrap max-md:px-5 max-md:max-w-full shadow-md">
    <img
      loading="lazy"
      src="images/logo.png"
      className="shrink-0 max-w-full aspect-[3.7] w-[187px]"
    />
    <div className="flex gap-5 justify-between items-center my-auto max-md:flex-wrap">
      <div className="flex gap-5 justify-between self-stretch my-auto text-base font-bold text-white">
        <div>STAKE TO EARN</div>
        <div className="flex gap-1.5 whitespace-nowrap items-center">
          <div>ABOUT</div>
          <IoIosArrowDown className="text-3x1"/>
        </div>
        <div>HELP</div>
      </div>
      <div className="flex gap-5 items-start self-stretch">
        <img
          loading="lazy"
          src="images/twitter.png"
          className="shrink-0 self-stretch aspect-[1.03] w-[35px]"
        />
        <img
          loading="lazy"
          src="images/tele.png"
          className="shrink-0 aspect-[1.28] w-[37px]"
        />
        <img
          loading="lazy"
          src="images/discord.png"
          className="shrink-0 w-11 aspect-[1.33]"
        />
      </div>
      <div className="justify-center self-stretch px-7 py-2 my-auto text-xs font-bold text-white bg-indigo-500 rounded-xl shadow-sm max-md:px-5">
        BUY NOW
      </div>
    </div>
  </div>
  )
}

export default Header