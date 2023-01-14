import axios from 'axios'
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';



function EditSuperHero (){

    const  {id}  = useParams()
    const navigate = useNavigate()

    const [hero, setHero] = useState([]);
    const [name, setName] = useState ("")
    const [publisher, setPublisher] = useState ("")
    const [alter_ego, setAlter_ego] = useState ("")
    const [first_appearance, setFirst_appearance] = useState ("")
    const [image, setImage] = useState ("")
    const [character, setCharacter] = useState ("")
    

    useEffect(() => {
        const getHero = async () => {
            let respChanged = ""
            respChanged = await axios.get(`http://localhost:3003/superheroes/${id}`); 
                setName(respChanged.data.name);
                setPublisher(respChanged.data.publisher);
                setAlter_ego(respChanged.data.alter_ego);
                setFirst_appearance(respChanged.data.first_appearance);
                setImage(respChanged.data.image);
                setCharacter(respChanged.data.characters);

        }
        getHero();
    }, [id]) 


    const EditHero = async () => {
        const edit = {   
            name: name,
            publisher: publisher,
            alter_ego: alter_ego,
            first_appearance: first_appearance,               
            image: image,
            characters: character,
        };    
        const resp = await axios.patch(`http://localhost:3003/superheroes/${id}`, edit);
    };

    return (
        <div>
            <p>NAME</p> <input type="text" value={name}  onChange={(event) => setName(event.target.value)}/>
            <p>PUBLISHER</p> <input type="text" value={publisher} onChange={(event) => setPublisher(event.target.value)}/>
            <p>ALTER EGO</p> <input type="text" value={alter_ego} onChange={(event) => setAlter_ego(event.target.value)}/>
            <p>FIRST APPEARANCE</p> <input type="text" value={first_appearance} onChange={(event) => setFirst_appearance(event.target.value)}/>
            <p>IMAGE</p> <input type="text" value={image} onChange={(event) => setImage(event.target.value)}/>
            <p>CHARACTER</p> <input type="text" value={character} onChange={(event) => setCharacter(event.target.value)}/>
            <p> <button onClick= {EditHero} to='/'>SAVE</button></p>
        </div>
    );
}

export default EditSuperHero
