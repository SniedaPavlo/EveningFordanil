import React, { useEffect, useRef, useState } from 'react'
import style from './About.module.scss'
import mountian_left from '../../img/About/mountian_left.png'
import mountian_right from '../../img/About/mountian_right.png'
import fog from '../../img/About/fog.png'
import moon from '../../img/About/moon.png'
import moon_arrow from '../../img/About/arrow__for__moon.svg'

const About: React.FC = () => {
    const clouds = useRef<HTMLImageElement>(null)
    const [visible, setVisible] = useState(false)


    useEffect(() =>{
        const options  = {
            root: null,
            rootMargin: "0px",
            thresold: 0
        }
        const observer = new IntersectionObserver((entries) =>{
            const [entry] = entries
            setVisible(entry.isIntersecting)
            
        }, options)
        if(clouds.current){
            observer.observe(clouds.current)
        }
        return () =>{
            if(clouds.current){
                observer.unobserve(clouds.current)
                
            }
        }

    }, [])
    return (
    
        <div className={style.wrap}>

            <div className={style.text}>
                <p className={style.title}>
                    Вечір в хату, мамкіни криміналісти
                </p>
                <p className={style.subtitle}>
                    Шуткую, бренд не про в’язницю, бренд - про нашу неньку Україну. Хата - це Україна, вечір - це важка доля, яка випала на наші плечі, але усі ми знаємо, що після вечора наступає день. І в нашій державі обовязкого настане день, коли уся нечисть щезне з нашої землі...
                </p>
            </div>
            <div className={style.wrap_moon}>
                <img className={style.moon} src={moon} alt="" />
                <img className={style.moon_arrow} src={moon_arrow} alt="" />
                <p className={style.moon_text}>Moon Text</p>

            </div>
            <div className={style.dark_gradient}></div>
            <div className={style.mountians}>
                <img className={style.mountian_left} src={mountian_left} alt="" />
                <img className={style.mountian_right} src={mountian_right} alt="" />
            </div>
            <img  ref={clouds} className={`${style.fog} ${visible && style.visible}`} src={fog} alt="" />
           

        </div>

    )
}

export default About