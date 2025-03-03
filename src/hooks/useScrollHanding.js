import { useState, useRef, useEffect } from 'react'

const useScrollHandling = () => {
    const [scrollDrection, setScrollDrection] = useState()
    const previousScrollPosition = useRef(0)
    const [scrollPositon, setScrollPositon] = useState()

    const scrollTrack = () => {
        const currentScrollPositon = Math.floor(window.pageYOffset)
        if (currentScrollPositon > previousScrollPosition.current) {
            setScrollDrection('down')
        } else if (currentScrollPositon < previousScrollPosition.current) {
            setScrollDrection('up')
        }

        previousScrollPosition.current =
            currentScrollPositon <= 0 ? 0 : currentScrollPositon

        setScrollPositon(currentScrollPositon)
    }

    useEffect(() => {
        window.addEventListener('scroll', scrollTrack)

        return () => {
            window.removeEventListener('scroll', scrollTrack)
        }
    }, [])

    return {
        scrollDrection,
        scrollPositon
    }
}

export default useScrollHandling