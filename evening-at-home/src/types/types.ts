

export interface ItemObj {
    id: number,
    description: string,
    price: string,
    unrealPrice: string,
    img: object
}

export interface CollectionProps {
    items: ItemObj[]
}

export interface ItemCollectionProps {
    obj: {
        id: number,
        description: string,
        price: string,
        unrealPrice: string,
        img: object
    }
}

// CollectionSlice
export interface CollectionStateType {
    Products: ItemObj[]
}

//FAQ 
export interface FAQItemType {
    id: number,
    question: string,
    answer: string,
}

export interface FAQItemTypeProps {
    obj: FAQItemType,
    // activeItem: null | number,
    // changeActive: (id: number) => void,



}