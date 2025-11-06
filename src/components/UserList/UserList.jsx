import React, { useEffect, useState } from 'react'

import { HiOutlineDotsVertical } from "react-icons/hi";
import raghav from "../../assets/raghav.png"
import swathi from "../../assets/swathi.png"
import kiran from "../../assets/kiran.png"
import tejesh from "../../assets/tejesh.png"
import marvin from "../../assets/marvin.png"

import { FaSquarePlus } from "react-icons/fa6";

import { getDatabase, onValue, ref } from "firebase/database";


const UserList = () => {

    const db = getDatabase();
    const [userList, setUserList] = useState([])

    useEffect(() => {
        const userRef = ref(db, "users")
        onValue(userRef, (snapshot) => {
            let arr = []
            snapshot.forEach((item) => {
                arr.push(item.val())
            })
            setUserList(arr)
        })
    }, [])

    console.log(userList)


    return (
        <div className='shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] rounded-[20px] pt-[13px] pb-[21px] pl-[20px] pr-[22px]'>
            <div className='flex justify-between items-center'>
                <h1 className='font-primary font-semibold text-[20px]'>User List</h1>
                <HiOutlineDotsVertical className='text-xl' />
            </div>

            <div className='px-[10px] h-[390px] overflow-y-scroll'>

                {
                    userList.map((user) => (
                        <div className='flex justify-between items-center mt-[17px] border-b pb-[13px] border-black/25'>
                            <div className='flex items-center'>
                                <img src={raghav} alt="" />

                                <div className='ml-[14px]'>
                                    <h3 className='font-semibold font-primary text-[18px]'>{user.username}</h3>
                                    <p className='font-primary font-medium text-[14px] text-[#4D4D4D]/75'>{user.email}</p>
                                </div>
                            </div>

                            <FaSquarePlus className='text-[30px]' />

                        </div>

                    ))
                }





                {/* <div className='flex justify-between items-center mt-[17px] border-b pb-[13px] border-black/25'>
                    <div className='flex items-center'>
                        <img src={swathi} alt="" />

                        <div className='ml-[14px]'>
                            <h3 className='font-semibold font-primary text-[18px]'>Swathi</h3>
                            <p className='font-primary font-medium text-[14px] text-[#4D4D4D]/75'>Today, 2:31pm</p>
                        </div>
                    </div>

                    <FaSquarePlus className='text-[30px]' />

                </div>


                <div className='flex justify-between items-center mt-[17px] border-b pb-[13px] border-black/25'>
                    <div className='flex items-center'>
                        <img src={kiran} alt="" />

                        <div className='ml-[14px]'>
                            <h3 className='font-semibold font-primary text-[18px]'>Kiran</h3>
                            <p className='font-primary font-medium text-[14px] text-[#4D4D4D]/75'>Yesterday, 6:22pm</p>
                        </div>
                    </div>

                    <FaSquarePlus className='text-[30px]' />

                </div>

                <div className='flex justify-between items-center mt-[17px] border-b pb-[13px] border-black/25'>
                    <div className='flex items-center'>
                        <img src={tejesh} alt="" />

                        <div className='ml-[14px]'>
                            <h3 className='font-semibold font-primary text-[18px]'>Tejeshwini C</h3>
                            <p className='font-primary font-medium text-[14px] text-[#4D4D4D]/75'>Today, 12:22pm</p>
                        </div>
                    </div>

                    <FaSquarePlus className='text-[30px]' />

                </div>


                <div className='flex justify-between items-center mt-[17px] border-b pb-[13px] border-black/25'>
                    <div className='flex items-center'>
                        <img src={marvin} alt="" />

                        <div className='ml-[14px]'>
                            <h3 className='font-semibold font-primary text-[18px]'>Marvin McKinney</h3>
                            <p className='font-primary font-medium text-[14px] text-[#4D4D4D]/75'>Today, 8:56pm</p>
                        </div>
                    </div>

                    <FaSquarePlus className='text-[30px]' />

                </div> */}
            </div>
        </div>
    )
}

export default UserList