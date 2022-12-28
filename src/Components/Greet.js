import React from 'react'


// function Greet(){
//     return <h1>Hello harshith</h1>
// }

// const Greet = ({name,heroname})=>{
//     return <h1>Hello {name} a.ka. {heroname}</h1>
// }

const Greet = (props)=>{
  const {name,heroname} = props
    return <h1>Hello {name} a.ka. {heroname}</h1>
}




export default Greet