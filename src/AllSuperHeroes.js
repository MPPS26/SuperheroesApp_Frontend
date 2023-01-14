import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./AllSuperHeroes.css";

function AllsuperHeroes() {
  const { id } = useParams;

  const [heroes, setHeroes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getHeroes = async () => {
      const respHeroes = await axios.get(`http://localhost:3003/superheroes`);
      setHeroes(respHeroes.data);
    };
    getHeroes();
  }, []);

  const deleteSH = async (id) => {
    const response = await axios.delete(
      `http://localhost:3003/superheroes/${id}`
    );
    setHeroes(heroes.filter((oneHero) => oneHero.id !== id));
  };

  return (
    <>
      <div>
        <button className="btn2" onClick={() => navigate("/heroes/new")}>
          CREATE A SUPERHERO
        </button>
      </div>
      <div className="card">
        {heroes.map((hero) => (
          <div>
            <div>
              <button
                className="btn"
                onClick={() => {
                  navigate(`/${hero.id}`);
                }}
              >
                {hero.name}
              </button>
            </div>
            <div>
              <img src={hero.image} width="400px" height="400px" />
            </div>
            <div key={hero.id}></div>
            <div className="containBtn">
              <div>
                <button
                  className="btn"
                  onClick={() => {
                    deleteSH(hero.id);
                  }}
                >
                  Delete Super Hero
                </button>
              </div>
              <div>
                <button
                  className="btn"
                  onClick={() => {
                    navigate(`/heroes/edit/${hero.id}`);
                  }}
                >
                  Edit Super Hero
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default AllsuperHeroes;
