import React from 'react'

class ClassClick extends React.Component{
 
 clickHandler(){
    console.log('click handler')
  }

    render(){
        return(
            <div>
                <button onClick={this.clickHandler}> Class Click</button>
            </div>
        )
    }
}

export default ClassClick