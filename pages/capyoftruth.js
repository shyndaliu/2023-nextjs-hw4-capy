import { useState, useEffect } from "react";
import axios from "axios";

export default function CapyOfTruth(){
    const [name, setName] = useState('');
    const [updated, setUpdated] = useState('');
    const [id, setId] = useState(1);
    const [url, setUrl] = useState('https://static.vecteezy.com/system/resources/thumbnails/001/826/199/small/progress-loading-bar-buffering-download-upload-and-loading-icon-vector.jpg')

    const handleChange = (event) => {
        setName(event.target.value);
    };
    const handleClick = () => {
        setUpdated(name);
        for(let i=0; i<updated.length;i++){
            let x = id;
            setId(x+updated[i].charCodeAt())
        }
        axios.get('https://api.capy.lol/v1/capybara/'+ id + '?json=true')
        .then(res => {
            setUrl(res.data.data.url);
        }).catch(err => console.log(err))
    };

    return <>
    <div>
        <h1>Capybaras are not just funny animals. They can depict various human's emotions as well as personalities</h1>
        <h2>Write your name and we we'll show you as a capybara!</h2>
        <div className="form__group">
            <input type="text" className="form__input" id="name" placeholder="Full name" required="" onChange={handleChange} />
            <button className="button-2" onClick={handleClick}>submit</button>
        </div>
        <img src={url}/>
    </div>
    </>
}