import { useEffect } from 'react'
import { createContext } from 'react'
import Cookies from 'js-cookie'
import { useState } from 'react'
import { getInfo } from '@/apis/authServices'

export const StoreContext = createContext()

function StoreProvider({ children }) {
    const [userInfo, setUserInfo] = useState(null)
    const [userId, setUserId] = useState(Cookies.get('userId'));
    const setUserInfoLogOut = () => {
        setUserInfo(null)
    }

    useEffect(() => {
        if (userId) {
            getInfo(userId)
                .then((res) => {
                    setUserInfo(res.data.data)
                })
                .catch((err) => {
                    console.log(err)
                })
        }
    }, [userId])
    
    return (
        <StoreContext.Provider value={{ userInfo, setUserInfo, setUserInfoLogOut, setUserId }}>
            {children}
        </StoreContext.Provider>
    )
}

export default StoreProvider
