import { useEffect, useState } from 'react'

export default function ScrollToTop() {

    const [isVisible, setIsVisible] = useState(true)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if( window.scrollY > 400){
                setIsVisible(true);
            }
            else{
                setIsVisible(false);
            }
        },[])
    })

    const scrollToTop = () => {
        window.scrollTo({
            top:0,
            behavior:'smooth'
        })
    }


  return (
    <div className='relative'  style={{ zIndex: 999}}>
        {isVisible && (
            <button type="button" onClick={scrollToTop} 
            className= " fixed bottom-16 right-16 bg-black text-white rounded-full font-bold text-xl px-1">
                    <i class="ri-arrow-up-s-fill"></i>
               </button>
        )}
     
    </div>
  )
}