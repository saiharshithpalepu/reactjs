import React from 'react'
import '../css/practice1.css'

class Practice1 extends React.Component{
    constructor(props){
        super(props)

        this.state={
            name:'guest',
            activeClass:''
        }
    }

    selectname(e){
        this.setState({
            name:e.target.value,
            activeClass:'active'
        })
    }

    render(){
        return (
            <div>
            <select onChange={(e)=>{this.selectname(e)}}>
                <option disabled selected>---select name---</option>
                <option >Harshith</option>
                <option>Giridhar</option>
                <option >Nikhil</option>
            </select>

            <div className={`name ${this.state.activeClass}`}>{this.state.name}</div>
           </div>
            
        )
    }
}

export default Practice1