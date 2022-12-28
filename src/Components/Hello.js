import React from 'react'

const Hello=()=>{
 return(
    // <div>
    //     <h1>Hello Harshith</h1>
    // </div>
    React.createElement('h1',{className:'dummyClass',id:'H1'},'Hello Harshith')
 )
}

export default Hello