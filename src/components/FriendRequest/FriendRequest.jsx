import React from 'react'
import { HiOutlineDotsVertical } from "react-icons/hi";
import raghav from "../../assets/raghav.png"
import swathi from "../../assets/swathi.png"
import kiran from "../../assets/kiran.png"
import tejesh from "../../assets/tejesh.png"
import marvin from "../../assets/marvin.png"


const FriendRequest = () => {
    return (
        <div className='shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] rounded-[20px] pt-[13px] pb-[21px] pl-[20px] pr-[22px] mt-9'>
            <div className='flex justify-between items-center'>
                <h1 className='font-primary font-semibold text-[20px]'>Friend  Request</h1>
                <HiOutlineDotsVertical className='text-xl' />
            </div>

            <div className='px-[10px] h-[390px] overflow-y-scroll'>
                <div className='flex justify-between items-center mt-[17px] border-b pb-[13px] border-black/25'>
                    <div className='flex items-center'>
                        <img src={raghav} alt="" />

                        <div className='ml-[14px]'>
                            <h3 className='font-semibold font-primary text-[18px]'>Raghav</h3>
                            <p className='font-primary font-medium text-[14px] text-[#4D4D4D]/75'>Dinner?</p>
                        </div>
                    </div>

                    <button className='font-primary font-semibold text-[20px] bg-[#1E1E1E] text-white px-[8px] py-[2px] rounded-[5px]'>Accept</button>

                </div>


                <div className='flex justify-between items-center mt-[17px] border-b pb-[13px] border-black/25'>
                    <div className='flex items-center'>
                        <img src={swathi} alt="" />

                        <div className='ml-[14px]'>
                            <h3 className='font-semibold font-primary text-[18px]'>Swathi</h3>
                            <p className='font-primary font-medium text-[14px] text-[#4D4D4D]/75'>Sure!</p>
                        </div>
                    </div>

                    <button className='font-primary font-semibold text-[20px] bg-[#1E1E1E] text-white px-[8px] py-[2px] rounded-[5px]'>Accept</button>

                </div>


                <div className='flex justify-between items-center mt-[17px] border-b pb-[13px] border-black/25'>
                    <div className='flex items-center'>
                        <img src={kiran} alt="" />

                        <div className='ml-[14px]'>
                            <h3 className='font-semibold font-primary text-[18px]'>Kiran</h3>
                            <p className='font-primary font-medium text-[14px] text-[#4D4D4D]/75'>Hi.....</p>
                        </div>
                    </div>

                    <button className='font-primary font-semibold text-[20px] bg-[#1E1E1E] text-white px-[8px] py-[2px] rounded-[5px]'>Accept</button>

                </div>

                <div className='flex justify-between items-center mt-[17px] border-b pb-[13px] border-black/25'>
                    <div className='flex items-center'>
                        <img src={tejesh} alt="" />

                        <div className='ml-[14px]'>
                            <h3 className='font-semibold font-primary text-[18px]'>Tejeshwini C</h3>
                            <p className='font-primary font-medium text-[14px] text-[#4D4D4D]/75'>I will call him today.</p>
                        </div>
                    </div>

                    <button className='font-primary font-semibold text-[20px] bg-[#1E1E1E] text-white px-[8px] py-[2px] rounded-[5px]'>Accept</button>

                </div>


                <div className='flex justify-between items-center mt-[17px] border-b pb-[13px] border-black/25'>
                    <div className='flex items-center'>
                        <img src={marvin} alt="" />

                        <div className='ml-[14px]'>
                            <h3 className='font-semibold font-primary text-[18px]'>Marvin</h3>
                            <p className='font-primary font-medium text-[14px] text-[#4D4D4D]/75'>Hi Guys, Wassup!</p>
                        </div>
                    </div>

                    <button className='font-primary font-semibold text-[20px] bg-[#1E1E1E] text-white px-[8px] py-[2px] rounded-[5px]'>Accept</button>

                </div>
            </div>
        </div>
    )
}

export default FriendRequest