import Item1 from '../images/item1.jpg'
import Item2 from '../images/item2.jpg'
import Item3 from '../images/item3.jpg'
import Item4 from '../images/item4.jpg'
import Item5 from '../images/item5.jpg'

import { ADD_TO_CART,REMOVE_ITEM,SUB_QUANTITY,ADD_QUANTITY,ADD_SHIPPING, DISPLAY_ITEM } from '../Store/actionTypes'

const initState = {
    items: [
        {id:1,title:'Winter body', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:110,img:Item1},
        {id:2,title:'Adidas', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:80,img: Item2},
        {id:3,title:'Vans', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:120,img: Item3},
        {id:4,title:'White', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:260,img:Item4},
        {id:5,title:'Cropped-sho', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:160,img: Item5},
        
    ],
    addedItems:[],
    displayitems : [],
    total: 0

}
const reducer= (state = initState,action)=>{
    switch(action.type){
case ADD_TO_CART:
    const addedItems = state.items.find(item => item.id === action.id);
    const existeditem = state.addedItems.find(item => item.id === action.id)
    if(existeditem){
        addedItems.quantity +=1;
        return{
            ...state,

        }}
    else {
            addedItems.quantity = 1;
            return{
            ...state,
            addedItems: [...state.addedItems, addedItems],
        }
    }
    
   case DISPLAY_ITEM : 
    const displayitems = state.items.find(item => item.id === action.id);
    return{
        ...state,
       displayitems: [displayitems],
    }
    default : return state;
    }

}
export default reducer;