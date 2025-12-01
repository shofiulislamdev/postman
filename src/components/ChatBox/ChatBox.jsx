import React from 'react'
import raghav from "../../assets/raghav.png"
import { HiOutlineDotsVertical } from "react-icons/hi";
import { TbTriangleFilled } from "react-icons/tb";




import { MdOutlineEmojiEmotions } from "react-icons/md";
import { CiCamera } from "react-icons/ci";
import { FaTelegramPlane } from "react-icons/fa";





const ChatBox = () => {
    return (
        <div className='shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] font-primary px-[50px] py-[25px] rounded-[20px]'>
            <div className='flex justify-between items-center border-b border-black/25 pb-[30px]'>
                <div className='flex items-center gap-x-[33px]'>
                    <div>
                        <img src={raghav} alt="" />
                    </div>

                    <div>
                        <h2 className='font-semibold text-[24px]'>Swathi </h2>
                        <p>Online</p>
                    </div>
                </div>

                <div>
                    <HiOutlineDotsVertical className='text-2xl' />
                </div>
            </div>

            <div className='py-[56px] border-b border-black/25'>
                <div className='my-2'>
                    <div className='relative'>
                        <p className='py-[13px] px-[52px] bg-[#F1F1F1] inline-block font-medium rounded-[10px]'>Hey There !</p>

                        <div className='absolute bottom-[-3px] left-[-10px]'>
                            <TbTriangleFilled className='text-[#F1F1F1] text-2xl' />
                        </div>
                    </div>
                    <p className='text-[12px] font-medium text-gray-400 mt-2'>Today, 2:01pm</p>
                </div>

                <div className='my-2 text-end'>
                    <div className='relative'>
                        <p className='py-[13px] px-[52px] bg-[#1E1E1E] text-white inline-block font-medium rounded-[10px]'>Hello...</p>

                        <div className='absolute bottom-[-3px] right-[-10px]'>
                            <TbTriangleFilled className='text-[#1E1E1E] text-2xl' />
                        </div>
                    </div>
                    <p className='text-[12px] font-medium text-gray-400 mt-2'>Today, 2:01pm</p>
                </div>


                <div className='my-2'>
                    <div className='relative'>
                        <p className='py-[13px] px-[52px] bg-[#F1F1F1] inline-block font-medium rounded-[10px]'>Hey There !</p>

                        <div className='absolute bottom-[-3px] left-[-10px]'>
                            <TbTriangleFilled className='text-[#F1F1F1] text-2xl' />
                        </div>
                    </div>
                    <p className='text-[12px] font-medium text-gray-400 mt-2'>Today, 2:01pm</p>
                </div>

                <div className='my-2 text-end'>
                    <div className='relative'>
                        <p className='py-[13px] px-[52px] bg-[#1E1E1E] text-white inline-block font-medium rounded-[10px]'>Hello...</p>

                        <div className='absolute bottom-[-3px] right-[-10px]'>
                            <TbTriangleFilled className='text-[#1E1E1E] text-2xl' />
                        </div>
                    </div>
                    <p className='text-[12px] font-medium text-gray-400 mt-2'>Today, 2:01pm</p>
                </div>
            </div>



            <div className='flex space-x-3 mt-[10px] items-center'>
                <div className='relative'>
                    <input type="text" placeholder='Message' className='w-[543px] pr-[200px] pl-[10px] bg-[#F1F1F1] py-[13px] rounded-[10px]' />
                    <div className='flex absolute top-[15px] right-[12px] space-x-[13px]'>
                        <MdOutlineEmojiEmotions className='text-[20px] text-[#707070] cursor-pointer' />
                        <CiCamera className='text-[20px] cursor-pointer' />
                    </div>
                </div>

                <div className='bg-[#1E1E1E] p-[15px] rounded-[10px] cursor-pointer'>
                    <FaTelegramPlane className='text-white' />
                </div>
            </div>





            {/* <div>
                <div className='bg-[#F1F1F1] py-[13px] w-[543px] mt-2 rounded-[10px] flex pl-[10px]'>
                    <input type="text" className='w-full pr-[300px] pl-[10px]' />

                    <div className='flex space-x-[13px] mr-[10px]'>
                        <MdOutlineEmojiEmotions className='text-[20px] text-[#707070]' />
                        <CiCamera className='text-[20px]' />
                    </div>
                </div>
            </div> */}



        </div>
    )
}

export default ChatBox