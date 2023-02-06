import { configureStore } from '@reduxjs/toolkit'
import CollectionState from '../redux/Collection/CollectionSlice'
//types 
import { CollectionStateType } from '../types/types'

export const store = configureStore({
    reducer: {
        CollectionState,
    },
})

// export type RootStore = ReturnType<typeof store.getState>

export type RootStore = {
    CollectionState: CollectionStateType
}
export default store