import React,{Component} from 'react'

class DisplayHome extends Component{

    render(){
    let itemList = this.props.items.map(item=>{
        return(
            <div key={item.id} onClick={()=> {this.props.displayHandler(item.id)}}>
        <img src={item.img} alt={item.title}/>
        <p>{item.title}</p>
      <p>{item.desc}</p>
        <p><b>Price: {item.price}$</b></p>
      
                    </div>
            
        )
    })
    return (
        <div>
    {itemList}
        </div>
    );
}
}

export default DisplayHome;