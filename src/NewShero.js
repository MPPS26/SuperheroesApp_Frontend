import axios from 'axios'
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


function NewShero (){

    const  {id}  = useParams()

    const [hero, setHero] = useState([]);
    const [name, setName] = useState ("");
    const [publisher, setPublisher] = useState ("");
    const [alter_ego, setAlter_ego] = useState ("");
    const [first_appearance, setFirst_appearance] = useState ("");
    const [image, setImage] = useState ("");
    const [character, setCharacter] = useState ("")
    

    useEffect(() => {
        const getHero = async () => {
            const respHero = await axios.get(`http://localhost:3003/superheroes`);
                setHero(respHero.data);
        }
        getHero();
    }, []);

    const saveNewSH = async () => {
        const payload = {
            name: name,
            publisher: publisher,
            alter_ego: alter_ego,
            first_appearance: first_appearance,               
            image: image,
            characters: character
        };

        const respHero = await axios.post(`http://localhost:3003/superheroes`, payload);      
        if (respHero.status === 201){ 
            let oldSH = hero; 
            oldSH.push(respHero.data);
            setHero(oldSH);
        }
    };

    return (

        <div>

            <p>NAME</p> <input type="text" value={name} onChange={(event) => setName(event.target.value)}/>
            <p>PUBLISHER</p> <input type="text" value={publisher} onChange={(event) => setPublisher(event.target.value)}/>
            <p>ALTER EGO</p> <input type="text" value={alter_ego} onChange={(event) => setAlter_ego(event.target.value)}/>
            <p>FIRST APPEARANCE</p> <input type="text" value={first_appearance} onChange={(event) => setFirst_appearance(event.target.value)}/>
            <p>IMAGE</p> <input type="text" value={image} onChange={(event) => setImage(event.target.value)}/>
            <p>CHARACTER</p> <input type="text" value={character} onChange={(event) => setCharacter(event.target.value)}/><br/>
            <p><button onClick={saveNewSH}>SAVE</button></p>
        </div>
    );
}

export default NewShero