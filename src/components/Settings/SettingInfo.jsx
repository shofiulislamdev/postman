import React, { useState } from 'react'
import profile from "../../assets/raghav.png"

import { RiEdit2Fill } from "react-icons/ri";
import { AiFillMessage } from "react-icons/ai";
import { RiImageAddFill } from "react-icons/ri";
import { useDispatch, useSelector } from 'react-redux';
import { getAuth, updateProfile } from 'firebase/auth';
import { getDatabase, ref, set } from 'firebase/database';
import { userNameUpdate } from '../../slices/userSlice';




const SettingInfo = () => {

  const db = getDatabase()
  const auth = getAuth();
  const dispatch = useDispatch()
  const data = useSelector((selector) => (selector.userInfo?.value?.user))

  const [show, setShow] = useState(false)
  const [showDisplayName, setShowDisplayName] = useState(data?.displayName || "")
  const [newName, setNewName] = useState("")

  const handleEditNameShow = () => {
    setShow(!show)
  }

  const handleEditName = () => {
    console.log(newName)

    if (auth.currentUser) {
      updateProfile(auth.currentUser, {
        displayName: newName,
      })
      set(ref(db, 'users/' + data?.uid), {
        username: newName,
      }).then(() => {
        dispatch(userNameUpdate(newName))
      }).catch((err)=>{
        console.log(err)
      })

    }


  }
  return (
    <div className='font-primary shadow p-5 mt-5 w-[700px]'>
      <h2 className='text-5xl font-bold'>Profile Settings</h2>

      <div className='flex items-center gap-x-5 mt-20 border-b py-5'>
        <img className='w-[100px]' src={profile} alt="" />
        <div>
          <p className='text-2xl font-bold mb-2'>{data?.displayName}</p>
          <p>Stay home stay safe</p>
        </div>
      </div>

      <div className='my-10'>

        <div className='flex items-center'>
          <RiEdit2Fill className='text-[25px]' />
          <p onClick={handleEditNameShow} className='text-lg font-semibold ml-[35px]'>Edit Profile Name.</p>
        </div>
        {
          show &&
          <div>
            <input
              // name={showDisplayName}
              type="text"
              onChange={(e) => setNewName(e.target.value)}
              // value={showDisplayName}
              placeholder='Edit name' className='border w-[300px] p-2' />
            <button onClick={handleEditName} className='bg-[#1E1E1E] text-white px-3 py-2 rounded ml-4'>submit</button>
          </div>

        }

        <div className='flex items-center'>
          <AiFillMessage className='text-[25px]' />
          <p className='text-lg font-semibold ml-[35px]'>Edit Profile Status Info.</p>
        </div>

        <div className='flex items-center'>
          <RiImageAddFill className='text-[25px]' />
          <p className='text-lg font-semibold ml-[35px]'>Edit Profile Photo.</p>
        </div>

      </div>
    </div>
  )
}

export default SettingInfo