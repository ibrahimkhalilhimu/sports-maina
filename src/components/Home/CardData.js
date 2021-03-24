import React from 'react';
import './CardData.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from 'react-router-dom';
const arrow = <FontAwesomeIcon icon={faArrowRight} />;

const CardData = ({data}) => {
  const {strTeamBadge,strTeam,strSport,idTeam} = data;
  let history = useHistory();
  const handleClick = (idTeam) => {
    history.push(`/details/${idTeam}`);
  }
    return (
        <div className="col-md-4">
          
              <div className="card d-flex justify-content-center  align-items-center">
              <img className="card-img-top img-fluid" src={strTeamBadge} alt="league image"/>
              <div className="card-body mt-4">
                <h5 className="card-title text-center">{strTeam}</h5>
                <small> Sports type: {strSport}</small><br/>
                <button onClick={() =>handleClick(idTeam)} className="btn btnCard">
                  Explore
                  <i >{arrow}</i>
                  </button>
              </div>
              
            </div>
        </div>
    );
};

export default CardData;