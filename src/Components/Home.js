import React , {Component} from 'react'
import Displayitem from '../Containers/Displayitem'
import Item1 from '../images/item1.jpg'
import Item2 from '../images/item2.jpg'
import Item3 from '../images/item3.jpg'
import Item4 from '../images/item4.jpg'
import Item5 from '../images/item5.jpg'
import { connect } from 'react-redux'
import { addToCart, displayitems } from '../Store/action'
import DisplayHome from '../Containers/DisplayHome'


class Home extends Component {
state ={
    display : []
}
   /* state ={
        items: [
            {id:1,title:'Winter body', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:110,img:Item1},
            {id:2,title:'Adidas', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:80,img: Item2},
            {id:3,title:'Vans', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:120,img: Item3},
            {id:4,title:'White', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:260,img:Item4},
            {id:5,title:'Cropped-sho', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:160,img: Item5},
           ],
        dispalyitem : []
    }*/
    displayHandler = (id) =>{
        this.props.displayitems(id);
        alert("added to cart");
        this.props.history.push('/Displayitem');
    
     }
     
     /*displaycart = (id) =>{
        this.props.addToCart(id);
        //alert("added to cart");
        //this.props.history.push('/Displayitem');
     }*/
    
    render(){
      
    
return (
      <div>
      <h1>START SHOPPING</h1>
      <DisplayHome items={this.props.items} displayHandler={this.displayHandler}/>
     </div>
      )
    }
}

const mapStateToProps = (state)=>{
    return {
        items: state.items
         }
    }
const mapDispatchToProps= (dispatch)=>{
    
    return{
        //addToCart:(id)=>{dispatch(addToCart(id))},
        displayitems: (id)=>{dispatch(displayitems(id))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home) 
//export default connect(mapStateToProps)(Home)
