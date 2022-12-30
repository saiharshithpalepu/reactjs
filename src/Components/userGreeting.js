import React from 'react'

class UserGreeting extends React.Component{
constructor(props){
    super(props)
    this.state={
        isLoggedIn:true
    }
}

render(){
    // if(this.state.isLoggedIn){
    //     return <div> Welcome Harshith</div>
    // }else{
    //     return <div>Welcome Guest</div>
    // }

    // let message=''
    // if(this.state.isLoggedIn){
    //     message=<div>Welcome Harshith</div>
    // }else{
    //     message=<div>Welcome Guest</div>
    // }

//   return(  this.state.isLoggedIn?<div>Welcome Harshith</div>:<div>Welcome Guest</div>
//   )

  return this.state.isLoggedIn && <div >Welcome Harshith</div>

    // return message
}
}

export default UserGreeting