import React, { useState } from 'react'
import register from "../../assets/register.png"
import { FaRegEyeSlash } from "react-icons/fa6";

const Registration = () => {

    const [email, setEmail] = useState("");
    const [fullName, setFullName] = useState("")
    const [password, setPassword] = useState("")



    const [emailError, setEmailError] = useState("");
    const [fullNameError, setFullNameError] = useState("")
    const [passwordError, setPasswordError] = useState("")




    const handleEmail = (e) => {
        setEmail(e.target.value);
        setEmailError("")
    }


    
    
    const handleFullName = (e) => {
        setFullName(e.target.value)
        setFullNameError("")

    }


    const handlePassword = (e) => {
        setPassword(e.target.value)
        setPasswordError("")

    }

    const handleSignUp = () => {
        console.log(email);
        if (!email) {
            setEmailError("Bhai mail de");
        } else {
            if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
                setEmailError("Please enter the correct email")
            }
        }
        console.log(fullName, password)
        if (!fullName) {
            setFullNameError("Bhai tui name de")
        }
        if(!password){
            setPasswordError("tui password de")
        } else {
            if(!/^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/.test(password)){
                setPasswordError("The string must contain at least 1 lowercase alphabetical character, at least 1 uppercase alphabetical character, at least 1 numeric character, at least one special character must be 6 characters or longer")
            }
            // if(!/(?=.*[a-z])/.test(password)){
            //     setPasswordError("The string must contain at least 1 lowercase alphabetical character")
            // } else if (!/(?=.*[A-Z])/.test(password)){
            //     setPasswordError("The string must contain at least 1 uppercase alphabetical character gg")
            // }
        }
    }





    return (
        <div>
            <div className='flex items-center'>
                <div className='w-[50%] flex justify-end'>

                    <div className='mr-[70px]'>
                        <h3 className='font-secondary font-bold text-[34px] text-[#11175D]'>Get started with easily register</h3>
                        <p className='font-secondary text-[20px] text-[#808080] mt-[13px]'>Free register and you can enjoy it</p>
                        <div className='relative w-[368px] mt-[60px]'>
                            <p className='absolute top-[-9px] left-[27px] bg-white px-[7px] font-secondary font-semibold text-[13px] text-[#11175D] tracking-[2px]'>Email Address</p>
                            <input onChange={handleEmail} value={email} className='py-[20px] pl-[32px] pr-[66px] w-full border-2 rounded-[9px] border-[#808080]' type="email" placeholder='Email Address' />
                            <p className='bg-blue-500 px-2 rounded text-white text-[14px] mt-2'>{emailError}</p>
                        </div>

                        <div className='relative w-[368px] mt-[60px]'>
                            <p className='absolute top-[-9px] left-[27px] bg-white px-[7px] font-secondary font-semibold text-[13px] text-[#11175D] tracking-[2px]'>Full name</p>
                            <input onChange={handleFullName} className='py-[20px] pl-[32px] pr-[66px] w-full border-2 rounded-[9px] border-[#808080]' type="text" placeholder='Full name' />
                            <p className='bg-blue-500 px-2 rounded text-white text-[14px] mt-2'>{fullNameError}</p>
                        </div>

                        <div className='relative w-[368px] mt-[60px]'>
                            <p className='absolute top-[-9px] left-[27px] bg-white px-[7px] font-secondary font-semibold text-[13px] text-[#11175D] tracking-[2px]'>Password</p>
                            <input onChange={handlePassword} className='py-[20px] pl-[32px] pr-[66px] w-full border-2 rounded-[9px] border-[#808080]' type="text" placeholder='Password' />
                            <FaRegEyeSlash className='absolute top-[26px] left-[340px] text-[#808080] cursor-pointer' />
                            <p className='bg-blue-500 px-2 rounded text-white text-[14px] mt-2'>{passwordError}</p>
                        </div>

                        <div>
                            <button onClick={handleSignUp} className='relative py-[20px] bg-[#1E1E1E] pl-[150px] pr-[148px] text-white font-secondary cursor-pointer text-[20px] font-semibold rounded-[86px] mt-[51px]'>Sign up
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