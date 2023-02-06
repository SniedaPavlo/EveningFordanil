import React from 'react'
import { ItemCollectionProps } from '../../../types/types'
import s from './ItemCollection.module.scss'
import photo1 from '../../../img/Collection/photo1.svg'


const ItemCollection: React.FC<ItemCollectionProps> = ({ obj }) => {
    console.log(obj.unrealPrice)
    return (
        <div className={s.wrapper}>
            <div className='contsainer'>
                <div className={s.item__wrapper}>
                    <img className={s.photo} src={photo1} alt="" />
                    <div className={s.description}>
                        {obj.description}
                    </div>
                    <div className={s.price__wrapper}>
                        <span className={s.price}>
                            {obj.price}
                        </span>
                        <span className={s.unreal__price}>
                            {obj.unrealPrice}
                        </span>
                    </div>
                    <div className={s.btn__wrapper__main}>
                        <span className={s.btn__text}>
                            Переглянути
                        </span>
                        <div className={s.btn__wrapper}>
                            <button className='btn'></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemCollection