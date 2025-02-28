import { useRef, useState, useEffect } from 'react'

const useTranslateX = () => {
    const [scrollDrection, setScrollDrection] = useState()
    const previousScrollPosition = useRef(0)
    const [translateXPositon, setTranslateXPositon] = useState(16)
    const [scrollPositon, setScrollPositon] = useState()

    const scrollTrack = () => {
        const currentScrollPositon = Math.floor(window.pageYOffset)
        if (currentScrollPositon > previousScrollPosition.current) {
            setScrollDrection('down')
        } else if (currentScrollPositon < previousScrollPosition.current) {
            setScrollDrection('up')
        }
        previousScrollPosition.current =
            currentScrollPositon < 0 ? 0 : currentScrollPositon

        setScrollPositon(currentScrollPositon)
    }

    const handleTranslateX = () => {
        if (scrollDrection === 'down' && scrollPositon >= 1520) {
            setTranslateXPositon(
                translateXPositon <= 0 ? 0 : translateXPositon - 1
            )
        } else if (scrollDrection === 'up') {
            setTranslateXPositon(
                translateXPositon > 16 ? 16 : translateXPositon + 1
            )
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', scrollTrack)
        return () => {
            window.removeEventListener('scroll', scrollTrack)
        }
    }, [])

    useEffect(() => {
        handleTranslateX()
    }, [scrollPositon])

    return { translateXPositon }
}

export default useTranslateX
