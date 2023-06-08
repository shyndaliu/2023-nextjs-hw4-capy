import { useState, useEffect } from "react";
import axios from "axios";

export default function CapyOfThe(){
    const [url1, setUrl1] = useState('https://static.vecteezy.com/system/resources/thumbnails/001/826/199/small/progress-loading-bar-buffering-download-upload-and-loading-icon-vector.jpg')
    const [url2, setUrl2] = useState('https://static.vecteezy.com/system/resources/thumbnails/001/826/199/small/progress-loading-bar-buffering-download-upload-and-loading-icon-vector.jpg')

    useEffect(() => {
        axios.get('https://api.capy.lol/v1/capyoftheday?json=true')
        .then((res) => {
        setUrl1(res.data.data.url)
        })

        axios.get('https://api.capy.lol/v1/capyhour?json=true')
        .then((res) => {
        setUrl2(res.data.data.url)
        })
    },[])
    return(
        <>
        <div className="container2">
        <h1>Capy of The Day:</h1>
        <img src={url1}/>
        <h1>Capy of Hour:</h1>
        <img src={url2}/>
        </div>
        </>
    );
};