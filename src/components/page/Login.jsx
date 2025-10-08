import React from 'react'
import login from "../../assets/login.png"
import { FcGoogle } from "react-icons/fc";
import { FaRegEyeSlash } from "react-icons/fa6";



const Login = () => {
    return (
        <div className='pt-[100px]'>

            <div className='flex items-center'>
                <div className='w-[50%] flex justify-end'>

                    <div className='mr-[174px]'>
                        <h3 className='font-secondary font-bold text-[34px] text-[#11175D]'>Login to your account!</h3>
                        <div className='flex items-center border w-[228px] py-[22px] pl-[30px] border-[#808080] rounded-[8px] mt-[30px]'>
                            <FcGoogle />
                            <button className='ml-[10px] font-third text-[13px] font-semibold tracking-[2%] cursor-pointer'>Login with Google</button>

                        </div>
                        <div className='relative w-[368px] mt-[60px]'>
                            <p className='absolute top-[-9px] left-[-6px] bg-white px-[7px] font-secondary font-semibold text-[13px] text-[#11175D] tracking-[2px]'>Email Address</p>
                            <input className='py-[20px] pl-[0px] pr-[66px] w-full border-b-2 outline-0 border-[#808080]' type="email" placeholder='Enter Your Email Address' />
                        </div>


                        <div className='relative w-[368px] mt-[60px]'>
                            <p className='absolute top-[-9px] left-[-6px] bg-white px-[7px] font-secondary font-semibold text-[13px] text-[#11175D] tracking-[2px]'>Password</p>
                            <input className='py-[20px] pl-[0px] pr-[66px] w-full border-b-2 border-[#808080] outline-0' type="text" placeholder='Enter Your Password' />
                            <FaRegEyeSlash className='absolute top-[26px] left-[350px] text-[#808080] cursor-pointer' />

                        </div>

                        <div>
                            <button className='relative py-[20px] cursor-pointer bg-[#1E1E1E] pl-[122px] pr-[122px] text-white font-secondary text-[20px] font-semibold rounded-[9px] mt-[51px]'>Login to Continue
                                <span className='absolute top-[50%] left-[50%] bg-[#5B36F5]/30 h-[40px] w-[170px] blur-[10px] -translate-[50%]'></span>
                            </button>
                        </div>
                        <div className=' mt-[35px]'>
                            <p className=' font-third text-[13px] text-[#03014C]'>Don’t have an account ? <span className='font-bold text-[#EA6C00] cursor-pointer'>Sign up</span></p>
                        </div>

                    </div>

                </div>
                <div className='w-[50%]'>
                    <img className='h-screen w-full object-cover' src={login} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Login