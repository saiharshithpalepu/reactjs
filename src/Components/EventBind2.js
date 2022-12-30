import React from 'react'

class EventBind2 extends React.Component{
    constructor(props){
        super(props)
        this.state={
            message:'Hello'
        }
        this.clickHandler=this.clickHandler.bind(this)
    }

   clickHandler(){
      this.setState({message:'GoodBye'})
   }

    render(){
        return(
            <div>
                <div>{this.state.message}</div>
                <button onClick={this.clickHandler}>click</button>
            </div>
        )
    }
}

export default EventBind2