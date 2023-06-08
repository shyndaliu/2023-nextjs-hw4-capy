import axios from 'axios'
import { useState } from 'react';


export default function Home(){
    const [url, setUrl] = useState('https://cdn-icons-png.flaticon.com/512/4467/4467515.png')
    const getRandomImage = () =>{
        axios.get('https://api.capy.lol/v1/capybara?json=true')
        .then(res => {
            setUrl(res.data.data.url);
        }).catch(err => console.log(err))
    }
    return(
        <>
        <div className="container">
        <h1>We are `cappy` to see you here! Capybaras are the coolest animals!</h1>
        <button onClick={getRandomImage} className='button-2'>
            give me a pic
        </button>
        <img src={url}/>
        </div>
        </>
    );
};