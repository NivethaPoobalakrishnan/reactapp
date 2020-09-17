import React from 'react'
import { connect } from 'react-redux'
import { addToCart } from '../Store/action'

const Displayitem = props => {
    
let itemList = props.displayitems.map(item=>{
        return(
            <div key={item.id}>
        <img src={item.img} alt={item.title}/>
        <p>{item.title}</p>
      <p>{item.desc}</p>
        <p><b>Price: {item.price}$</b></p>
        <button onClick={()=> {props.addToCart(item.id)}}>ADD TO CART</button>
        </div>
        )
    })
    return(
    <div>
    <p>displayingg........</p>
  {itemList}
    </div>
)
}


const mapStateToProps = (state)=>{
    return {
        displayitems: state.displayitems
         }
    }
const mapDispatchToProps= (dispatch)=>{
    
    return{
        addToCart: (id)=>{dispatch(addToCart(id))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Displayitem)