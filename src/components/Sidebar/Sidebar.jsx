import React from 'react'
import profilepic from "../../assets/profilepic.png"
import { GoHome } from "react-icons/go";
import { AiOutlineMessage } from "react-icons/ai";
import { IoSettingsOutline } from "react-icons/io5";
import { ImExit } from "react-icons/im";
import GroupsList from '../GroupsList/GroupsList';
import Friends from '../Friends/Friends';
import FriendRequest from '../FriendRequest/FriendRequest';
import MyGroups from '../MyGroups/MyGroups';
import UserList from '../UserList/UserList';
import BlockedUsers from '../BlockedUsers/BlockedUsers';

const Sidebar = () => {
    return (
        <>
            <div className='p-[35px] flex'>
                <div className='bg-[#1E1E1E] font-primary text-white w-[186px] h-screen rounded-[20px] relative'>
                    <div className='flex justify-center pt-[38px]'>
                        <img src={profilepic} alt="" />
                    </div>

                    <div>
                        <div className='relative after:absolute after:content-[""] after:top-0 after:left-0 after:w-[167px] after:h-full after:bg-white after:z-[-1] z-1 after:ml-[20px] after:rounded-lg before:absolute before:content-[""] before:top-0 before:right-0 before:h-full before:w-[10px] before:bg-[#1E1E1E] before:rounded-tl-lg before:rounded-bl-lg before:shadow-2xl/90 before:shadow-[-2px_0px_4px_0px_rgba(0,0,0,0.25)]      flex justify-center mt-[78px] py-[20px] cursor-pointer'>
                            <GoHome className='text-5xl text-[#1E1E1E]' />
                        </div>
                    </div>


                    <div>
                        <div className='relative after:absolute after:content-[""] after:top-0 after:left-0 after:w-[167px] after:h-full after:bg-white after:z-[-1] z-1 after:ml-[20px] after:rounded-lg before:absolute before:content-[""] before:top-0 before:right-0 before:h-full before:w-[10px] before:bg-[#1E1E1E] before:rounded-tl-lg before:rounded-bl-lg before:shadow-2xl/90 before:shadow-[-2px_0px_4px_0px_rgba(0,0,0,0.25)]      flex justify-center mt-[57px] py-[20px] cursor-pointer'>
                            <AiOutlineMessage className='text-5xl text-[#1E1E1E]' />
                        </div>
                    </div>

                    <div>
                        <div className='relative after:absolute after:content-[""] after:top-0 after:left-0 after:w-[167px] after:h-full after:bg-white after:z-[-1] z-1 after:ml-[20px] after:rounded-lg before:absolute before:content-[""] before:top-0 before:right-0 before:h-full before:w-[10px] before:bg-[#1E1E1E] before:rounded-tl-lg before:rounded-bl-lg before:shadow-2xl/90 before:shadow-[-2px_0px_4px_0px_rgba(0,0,0,0.25)]      flex justify-center mt-[57px] py-[20px] cursor-pointer'>
                            <IoSettingsOutline className='text-5xl text-[#1E1E1E]' />
                        </div>
                    </div>

                    <div className='absolute left-[50%] translate-x-[-50%] bottom-[48px]'>

                        <ImExit className='text-5xl text-white' />

                    </div>

                </div>


                <div>
                    <div className='flex'>
                        <GroupsList></GroupsList>

                        <Friends></Friends>
                        <UserList></UserList>
                    </div>

                    <div className='flex mt-[43px]'>
                        <FriendRequest></FriendRequest>
                        <MyGroups></MyGroups>
                        <BlockedUsers></BlockedUsers>
                    </div>
                </div>



            </div>




        </>
    )
}

export default Sidebar