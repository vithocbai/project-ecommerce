import { useEffect } from 'react'
import useScrollHanding from './useScrollHanding'
import { useState } from 'react'

const useTranslateXImage = () => {
    const [translateXPositon, setTranslateXPositon] = useState(16)
    const { scrollDrection, scrollPositon } = useScrollHanding()

    const handleTranslateX = () => {
        if (scrollDrection === 'down' && scrollPositon > 1550) {
            setTranslateXPositon(
                translateXPositon <= 0 ? 0 : translateXPositon - 1
            )
        } if(scrollDrection === 'up') {
            setTranslateXPositon(
                translateXPositon >= 16 ? 16 : translateXPositon + 1
            )
        }
    }

    useEffect(() => {
        handleTranslateX()
    }, [scrollPositon])
    return {translateXPositon}
}

export default useTranslateXImage;
