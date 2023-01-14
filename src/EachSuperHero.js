import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


function EachSuperHero(){

    
    const { id } = useParams();
    const [hero, setHero] = useState([]);

    useEffect(() => {
        const getHero = async () => {
            const respHero = await axios.get(`http://localhost:3003/superheroes/${id}`);
            setHero(respHero.data);
        }
        getHero();
    }, [])


    return (
         <div className="eachCard">
            <div className='titleEC'>
                <h1>{hero.name}</h1>
            </div>
            <div>
                <img src={hero.image} width="400px" height="400px"/>
            </div>
            <div>
                <h2>{hero.alter_ego}</h2>
            </div>
            <div>
                <h2>{hero.publisher}</h2>
            </div>
            <div>
                <h2>{hero.first_appearance}</h2>
            </div>
            <div>
                <h2>{hero.characters}</h2>
            </div>

            
         </div>
    );
}
export default EachSuperHero