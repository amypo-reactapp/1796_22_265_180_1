import {useState} from 'react'

function TodoItem({item, del}){
    return (
        <tr>
            <td>{item}</td>
            <td><button onClick={del}>delete</button></td>
        </tr>
    );
}

export default function Todo(){
    
}