import React from 'react'
import Person from './Person'

function NameList(){
    const names=[
        {'name':'bruce',
        'age':23,
        'skill':'react'
    },
    {'name':'clark',
    'age':23,
    'skill':'react'
},
{'name':'diana',
'age':23,
'skill':'react'
}
    ]

    const personList=names.map(person=>{
        return (
            <Person person={person}/>
        )
    })


    return(
        <div>
            {
              personList
            }
        </div>
    )
}

export default NameList