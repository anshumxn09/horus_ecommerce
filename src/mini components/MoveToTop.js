import React, { useEffect, useState } from 'react'
import './MoveToTop.css'
const MoveToTop = () => {
    const [hide, setHide] = useState('hideme');
    const goToUp = () => {
        window.scrollTo({
            top : 0,
            left : 0,
            behavior : 'smooth'
        })
    }

    const listenToScroll = () => {
        let heightToHidden = 400;
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        if(winScroll > heightToHidden){
            setHide("")
        }else setHide("hideme");
    }
    useEffect(() => {
        window.addEventListener('scroll', listenToScroll);
    }, [])
  return (
   <div className={`moveIcon ${hide}`} onClick={goToUp}title={"MOVE TO TOP"}>
    <i class="fa-solid fa-arrow-up"></i>
   </div>
  )
}

export default MoveToTop