import React ,{Component}from 'react'
import { connect } from 'react-redux'
import { removeItem,addQuantity,subtractQuantity} from '../Store/action'

class Cart extends Component{
 
  render() {
    const cartitems = this.props.addeditems.map(item => {
      return (
        <div key={item.id}>
        <div>
        <img src={item.img} alt={item.img} className=""/>
        </div>
        <div>
        <p>{item.title}</p>
        <p>{item.desc}</p>
        <p>Quantity: {item.quantity}</p>
        </div>
        </div>
      )
    })
    return (
      <div>
      {cartitems}
      </div>
      );
}
}

const mapStateToProps = (state)=>{
  return {
      addeditems: state.addedItems
       }
  }
  const mapDispatchToProps = (dispatch)=>{
    return{
        removeItem: (id)=>{dispatch(removeItem(id))},
        addQuantity: (id)=>{dispatch(addQuantity(id))},
        subtractQuantity: (id)=>{dispatch(subtractQuantity(id))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Cart)