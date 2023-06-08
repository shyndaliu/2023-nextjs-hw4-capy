import { useState, useEffect } from "react";
import axios from "axios";


export default function CapyFact(){
    const [fact, setFact] = useState('...')

    useEffect(() => {
        axios.get('https://api.capy.lol/v1/fact')
        .then((res) => {
        setFact(res.data.data.fact)
        })
    },[])
    return(<>
    <div className="container2">
        <h1>Did you know that ...</h1>
        <p>{fact}</p>
        <h1>???</h1>
    </div>
    </>)
}