import React from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends React.Component{
    constructor(props){
        super(props)
        this.state={
            parentname:'parent'
        }

        this.greetParent=this.greetParent.bind(this)
    }

    greetParent(childName){
        alert(`Hello ${this.state.parentname} from ${childName}`)
    }

    render(){
        return(
        <div>
         <ChildComponent greetHandler={this.greetParent}/>
        </div>
        )
    }
}

export default ParentComponent