import { createSlice } from '@reduxjs/toolkit'
//types 
import { CollectionStateType } from '../../types/types'
// photos (пізніше потрібно замінити за допомогою запроса)
import photo1 from '../../img/Collection/photo1.svg'
import photo2 from '../../img/Collection/photo2.svg'
import photo3 from '../../img/Collection/photo3.svg'
import photo4 from '../../img/Collection/photo4.svg'


const initialState: CollectionStateType = {
    Products: [
        { id: 1, description: 'Толстовка Husll sticker oversize fleece', price: '1,499uah', unrealPrice: '1, 899uah', img: { photo1 } },
        { id: 2, description: 'Толстовка Husll sticker oversize fleece', price: '1,499uah', unrealPrice: '1, 899uah', img: { photo2 } },
        { id: 3, description: 'Толстовка Husll sticker oversize fleece', price: '1,499uah', unrealPrice: '1, 899uah', img: { photo3 } },
        { id: 4, description: 'Толстовка Husll sticker oversize fleece', price: '1,499uah', unrealPrice: '1, 899uah', img: { photo4 } }
    ]
}

const CollectionSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {

    },
})

export const { } = CollectionSlice.actions
export default CollectionSlice.reducer