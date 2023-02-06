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







