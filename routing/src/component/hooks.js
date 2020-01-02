import React,{useState} from 'react';

function Hooks(){

    const [title] = useState({"name":"abc"});
    const [ count, setCount] = useState(0)
    
    return(
        <div>
            <h1>{title.name}</h1>
            <h2>Count: {count}</h2>
            <div onClick={()=>{setCount(count+1)}}>Click</div>
        </div>
    )
}

export default Hooks;