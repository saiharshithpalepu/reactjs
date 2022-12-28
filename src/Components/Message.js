import React ,{Component} from 'react'

class Message extends Component{
    constructor(){
        super()
        this.state={
          message:'Welcome Vistor'
        }
    }

    changeMessage() {
        this.setState({
            message:'Thank You for subscribing'
        })
    }

    
    render(){
        return(
            <div>
            <div>{this.state.message}</div>
            <button onClick={()=>this.changeMessage()}>subscribe</button>
            </div>
        )
    }
}

export default Message