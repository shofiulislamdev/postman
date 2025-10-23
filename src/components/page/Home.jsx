import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { getAuth, onAuthStateChanged } from "firebase/auth";

const Home = () => {
    const auth = getAuth();
    const data = useSelector(state => (state.userInfo.value))


    const [verify, setVerify] = useState(false)

    onAuthStateChanged(auth, (user) => {
        if (user.emailVerified) {
           setVerify(true)
        } 
    });

    return (
        <div>
            {
                verify ?
                    <p className='text-green-700'>Home</p>
                    :
                    <p>Please verify your email</p>
            }
        </div>
    )
}

export default Home