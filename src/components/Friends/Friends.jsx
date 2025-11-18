import React, { useEffect, useState } from 'react'

import { HiOutlineDotsVertical } from "react-icons/hi";
import raghav from "../../assets/raghav.png"
import swathi from "../../assets/swathi.png"
import kiran from "../../assets/kiran.png"
import tejesh from "../../assets/tejesh.png"
import marvin from "../../assets/marvin.png"
import { useSelector } from 'react-redux';
import { getDatabase, onValue, ref } from 'firebase/database';

const Friends = () => {


    const data = useSelector((selector) => selector?.userInfo?.value?.user);
    const db = getDatabase();
    const [friendsList, setFriendsList] = useState([]);

    useEffect(() => {
        const friendRef = ref(db, "friend");
        onValue(friendRef, (snapshot) => {
            let arr = [];
            snapshot.forEach((item) => {
                const fr = item.val();

                if (fr.senderId == data?.uid || fr.receiverId == data?.uid) {
                    arr.push(fr);
                }
            });
            setFriendsList(arr);
        });
    }, [])






    return (
        <div className='shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] rounded-[20px] pt-[13px] pb-[21px] pl-[20px] pr-[22px]'>
            <div className='flex justify-between items-center'>
                <h1 className='font-primary font-semibold text-[20px]'>Friends</h1>
                <HiOutlineDotsVertical className='text-xl' />
            </div>

            <div className='px-[10px] h-[390px] overflow-y-scroll'>


                {
                    friendsList.map((item) => {
                        const friendName =
                            item.senderId == data?.uid
                                ? item.receiverName
                                : item.senderName;

                        return (

                            <div className='flex justify-between items-center mt-[17px] border-b pb-[13px] border-black/25'>
                                <div className='flex items-center'>
                                    <img src={raghav} alt="" />

                                    <div className='ml-[14px]'>
                                        <h3 className='font-semibold font-primary text-[18px]'>{friendName}</h3>
                                        {/* <p className='font-primary font-medium text-[14px] text-[#4D4D4D]/75'>Dinner?</p> */}
                                    </div>
                                </div>

                                {/* <p className='font-primary font-medium text-[10px] text-black/50'>Today, 8:56pm</p> */}

                            </div>

                        )

                    })
                }





                {/* <div className='flex justify-between items-center mt-[17px] border-b pb-[13px] border-black/25'>
                    <div className='flex items-center'>
                        <img src={raghav} alt="" />

                        <div className='ml-[14px]'>
                            <h3 className='font-semibold font-primary text-[18px]'>Raghav</h3>
                            <p className='font-primary font-medium text-[14px] text-[#4D4D4D]/75'>Dinner?</p>
                        </div>
                    </div>

                    <p className='font-primary font-medium text-[10px] text-black/50'>Today, 8:56pm</p>

                </div> */}


                {/* <div className='relative flex justify-between items-center mt-[17px] border-b pb-[13px] border-black/25'>
                    <div className='flex items-center'>
                        <img src={swathi} alt="" />

                        <div className='ml-[14px]'>
                            <h3 className='font-semibold font-primary text-[18px]'>Swathi</h3>
                            <p className='font-primary font-medium text-[14px] text-[#4D4D4D]/75'>Sure!</p>
                        </div>
                    </div>

                    <p className='font-primary font-medium text-[10px] text-black/50'>Today, 2:31pm</p>

                    <div className='absolute h-[15px] w-[15px] top-[35px] left-[40px] bg-green-600 rounded-[50%] border-2 border-white'></div>

                </div>


                <div className='flex justify-between items-center mt-[17px] border-b pb-[13px] border-black/25'>
                    <div className='flex items-center'>
                        <img src={kiran} alt="" />

                        <div className='ml-[14px]'>
                            <h3 className='font-semibold font-primary text-[18px]'>Kiran</h3>
                            <p className='font-primary font-medium text-[14px] text-[#4D4D4D]/75'>Hi.....</p>
                        </div>
                    </div>

                    <p className='font-primary font-medium text-[10px] text-black/50'>Yesterday, 6:22pm</p>

                </div>

                <div className='flex justify-between items-center mt-[17px] border-b pb-[13px] border-black/25'>
                    <div className='flex items-center'>
                        <img src={tejesh} alt="" />

                        <div className='ml-[14px]'>
                            <h3 className='font-semibold font-primary text-[18px]'>Tejeshwini C</h3>
                            <p className='font-primary font-medium text-[14px] text-[#4D4D4D]/75'>I will call him today.</p>
                        </div>
                    </div>

                    <p className='font-primary font-medium text-[10px] text-black/50'>Today, 12:22pm</p>

                </div>


                <div className='flex justify-between items-center mt-[17px] border-b pb-[13px] border-black/25'>
                    <div className='flex items-center'>
                        <img src={marvin} alt="" />

                        <div className='ml-[14px]'>
                            <h3 className='font-semibold font-primary text-[18px]'>Marvin</h3>
                            <p className='font-primary font-medium text-[14px] text-[#4D4D4D]/75'>Hi Guys, Wassup!</p>
                        </div>
                    </div>

                    <p className='font-primary font-medium text-[10px] text-black/50'>Today, 8:56pm</p>

                </div> */}
            </div>
        </div>
    )
}

export default Friends