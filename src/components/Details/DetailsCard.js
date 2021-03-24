import React from 'react';

const DetailsCard = ({details}) => {
    return (
        <div>
           <div className="backgroundDetails">
               <img className="d-flex justify-content-center " src={details.strTeamBadge} alt=""/>
            </div>
            <div className="container">
                <div className=" row cardDesign">
        <div className="col-md-4">
      <div className="text-white p-4">
      <h4>{details.strAlternate}</h4>
        <h6>Founded: February 20, 1992</h6>
        <h6>Country: {details.strCountry}</h6>
        <h6>Sport Type: {details.strSport}</h6>
        <h6>Gender: {details.strGender}</h6>
      </div>
        </div>
        <div className="col-md-8 imageSide d-flex justify-content-end">
            <img className="img-fluid p-3 " src={details.strTeamFanart3} alt=""/>
        </div>
                </div>
                <div className="pt-3">
                    <p>{details.strDescriptionEN}</p>
                </div>
                <div className="d-flex justify-content-center py-4">
                    
                  <a target="_blank" href="">  <img style={{width:"50px"}} src="https://i.ibb.co/Z1wWgVr/Facebook.png" alt=""/></a>
                 <a href=""> <img style={{width:"50px"}} src="https://i.ibb.co/2yfygrJ/Twitter.png" alt=""/></a>
                 <a href="">
                     <img style={{width:"50px"}} src="https://i.ibb.co/vY58q40/YouTube.png" alt=""/>
                 </a>
                </div>
            </div>
        </div>
    );
};

export default DetailsCard;