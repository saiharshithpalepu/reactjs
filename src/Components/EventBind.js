import React from 'react'

class EventBind extends React.Component{
    constructor(props){
        super(props)
        this.state={
            message:'Hello'
        }
    }

   clickHandler(){
      this.setState({message:'GoodBye'})
   }

    render(){
        return(
            <div>
                <div>{this.state.message}</div>
                <button onClick={this.clickHandler.bind(this)}>click</button>
            </div>
        )
    }
}

export default EventBind