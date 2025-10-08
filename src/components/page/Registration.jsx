import React from 'react'
import register from "../../assets/register.png"
import { FaRegEyeSlash } from "react-icons/fa6";

const Registration = () => {
    return (
        <div>
            <div className='flex items-center'>
                <div className='w-[50%] flex justify-end'>

                    <div className='mr-[70px]'>
                        <h3 className='font-secondary font-bold text-[34px] text-[#11175D]'>Get started with easily register</h3>
                        <p className='font-secondary text-[20px] text-[#808080] mt-[13px]'>Free register and you can enjoy it</p>
                        <div className='relative w-[368px] mt-[60px]'>
                            <p className='absolute top-[-9px] left-[27px] bg-white px-[7px] font-secondary font-semibold text-[13px] text-[#11175D] tracking-[2px]'>Email Address</p>
                            <input className='py-[20px] pl-[32px] pr-[66px] w-full border-2 rounded-[9px] border-[#808080]' type="email" placeholder='Email Address' />
                        </div>

                        <div className='relative w-[368px] mt-[60px]'>
                            <p className='absolute top-[-9px] left-[27px] bg-white px-[7px] font-secondary font-semibold text-[13px] text-[#11175D] tracking-[2px]'>Full name</p>
                            <input className='py-[20px] pl-[32px] pr-[66px] w-full border-2 rounded-[9px] border-[#808080]' type="text" placeholder='Full name' />
                        </div>

                        <div className='relative w-[368px] mt-[60px]'>
                            <p className='absolute top-[-9px] left-[27px] bg-white px-[7px] font-secondary font-semibold text-[13px] text-[#11175D] tracking-[2px]'>Password</p>
                            <input className='py-[20px] pl-[32px] pr-[66px] w-full border-2 rounded-[9px] border-[#808080]' type="text" placeholder='Password' />
                            <FaRegEyeSlash className='absolute top-[26px] left-[340px] text-[#808080] cursor-pointer' />
                        </div>

                        <div>
                            <button className='relative py-[20px] bg-[#1E1E1E] pl-[150px] pr-[148px] text-white font-secondary cursor-pointer text-[20px] font-semibold rounded-[86px] mt-[51px]'>Sign up
                                <span className='absolute top-[50%] left-[50%] bg-[#5B36F5]/30 h-[40px] w-[98px] blur-[10px] -translate-[50%]'></span>
                            </button>
                        </div>
                        <div className='w-[368px] mt-[35px]'>
                            <p className='text-center font-third text-[13px] text-[#03014C]'>Already  have an account ? <span className='font-bold text-[#EA6C00] cursor-pointer'>Sign In</span></p>
                        </div>

                    </div>

                </div>
                <div className='w-[50%]'>
                    <img className='h-screen w-full object-cover' src={register} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Registration