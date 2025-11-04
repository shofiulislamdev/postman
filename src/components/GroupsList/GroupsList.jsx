import React from 'react'
import { HiOutlineDotsVertical } from "react-icons/hi";
import friendsreunion from "../../assets/friendsreunion.png"
import friendsforever from "../../assets/friendsforever.png"
import crazycousins from "../../assets/crazycousins.png"

const GroupsList = () => {
    return (
        <div className='shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] rounded-[20px] pt-[13px] pb-[21px] pl-[20px] pr-[22px]'>
            <div className='flex justify-between items-center'>
                <h1 className='font-primary font-semibold text-[20px]'>Groups List</h1>
                <HiOutlineDotsVertical className='text-xl' />
            </div>

            <div className='px-[10px] h-[390px] overflow-y-scroll'>
                <div className='flex justify-between items-center mt-[17px] border-b pb-[13px] border-black/25'>
                    <div className='flex items-center'>
                        <img src={friendsreunion} alt="" />

                        <div className='ml-[14px]'>
                            <h3 className='font-semibold font-primary text-[18px]'>Friends Reunion</h3>
                            <p className='font-primary font-medium text-[14px] text-[#4D4D4D]/75'>Hi Guys, Wassup!</p>
                        </div>
                    </div>

                    <button className='font-primary font-semibold text-[20px] bg-[#1E1E1E] text-white px-[22px] py-[2px] rounded-[5px]'>Join</button>

                </div>


                <div className='flex justify-between items-center mt-[17px] border-b pb-[13px] border-black/25'>
                    <div className='flex items-center'>
                        <img src={friendsforever} alt="" />

                        <div className='ml-[14px]'>
                            <h3 className='font-semibold font-primary text-[18px]'>Friends Forever</h3>
                            <p className='font-primary font-medium text-[14px] text-[#4D4D4D]/75'>Good to see you.</p>
                        </div>
                    </div>

                    <button className='font-primary font-semibold text-[20px] bg-[#1E1E1E] text-white px-[22px] py-[2px] rounded-[5px]'>Join</button>

                </div>


                <div className='flex justify-between items-center mt-[17px] border-b pb-[13px] border-black/25'>
                    <div className='flex items-center'>
                        <img src={crazycousins} alt="" />

                        <div className='ml-[14px]'>
                            <h3 className='font-semibold font-primary text-[18px]'>Crazy Cousins</h3>
                            <p className='font-primary font-medium text-[14px] text-[#4D4D4D]/75'>What plans today?</p>
                        </div>
                    </div>

                    <button className='font-primary font-semibold text-[20px] bg-[#1E1E1E] text-white px-[22px] py-[2px] rounded-[5px]'>Join</button>

                </div>

                <div className='flex justify-between items-center mt-[17px] border-b pb-[13px] border-black/25'>
                    <div className='flex items-center'>
                        <img src={friendsreunion} alt="" />

                        <div className='ml-[14px]'>
                            <h3 className='font-semibold font-primary text-[18px]'>Friends Reunion</h3>
                            <p className='font-primary font-medium text-[14px] text-[#4D4D4D]/75'>Hi Guys, Wassup!</p>
                        </div>
                    </div>

                    <button className='font-primary font-semibold text-[20px] bg-[#1E1E1E] text-white px-[22px] py-[2px] rounded-[5px]'>Join</button>

                </div>


                <div className='flex justify-between items-center mt-[17px] border-b pb-[13px] border-black/25'>
                    <div className='flex items-center'>
                        <img src={friendsreunion} alt="" />

                        <div className='ml-[14px]'>
                            <h3 className='font-semibold font-primary text-[18px]'>Friends Reunion</h3>
                            <p className='font-primary font-medium text-[14px] text-[#4D4D4D]/75'>Hi Guys, Wassup!</p>
                        </div>
                    </div>

                    <button className='font-primary font-semibold text-[20px] bg-[#1E1E1E] text-white px-[22px] py-[2px] rounded-[5px]'>Join</button>

                </div>
            </div>
        </div>
    )
}

export default GroupsList