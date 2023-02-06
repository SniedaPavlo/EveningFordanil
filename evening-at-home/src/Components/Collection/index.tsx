import React from 'react'
import ItemCollection from './ItemCollection/ItemCollection'
import s from './Collection.module.scss'
import { useSelector } from 'react-redux'
// types 
// import { CollectionProps } from '../../types/types'
import { ItemObj } from '../../types/types'
//store
import { RootStore } from '../../redux/store'



function Collection() {

    const items1: ItemObj[] = useSelector((state: RootStore) => state.CollectionState.Products)
    return (
        <div className={s.wrapper}>
            <div className={s.wrapper__backround}>

                {/* <svg className={s.backround} width="1440" height="529" viewBox="0 0 1440 529" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_76_2497)">
                    <path d="M1440 529H0V0H1440V529Z" fill="url(#paint0_linear_76_2497)" />
                </g>
                <defs>
                    <linearGradient id="paint0_linear_76_2497" x1="732" y1="568.675" x2="729.743" y2="-0.0386655" gradientUnits="userSpaceOnUse">
                        <stop stop-opacity="0" />
                        <stop offset="0.562486" />
                    </linearGradient>
                    <clipPath id="clip0_76_2497">
                        <rect width="1440" height="529" fill="white" />
                    </clipPath>
                </defs>
            </svg>
            <svg className={s.backround2} width="1440" height="529" viewBox="0 0 1440 529" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_76_2497)">
                    <path d="M1440 529H0V0H1440V529Z" fill="url(#paint0_linear_76_2497)" />
                </g>
                <defs>
                    <linearGradient id="paint0_linear_76_2497" x1="732" y1="568.675" x2="729.743" y2="-0.0386655" gradientUnits="userSpaceOnUse">
                        <stop stop-opacity="0" />
                        <stop offset="0.562486" />
                    </linearGradient>
                    <clipPath id="clip0_76_2497">
                        <rect width="1440" height="529" fill="white" />
                    </clipPath>
                </defs>
            </svg> */}

                <div className={s.title}>
                    Вся Колекція
                </div>

                <div className={s.collection__wrapper}>
                    {items1.map((el) => {
                        return <ItemCollection key={el.id} obj={el} />
                    })}
                </div>
            </div>

        </div>
    )
}

export default Collection







