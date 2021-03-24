import React, { useEffect, useState } from 'react';
import './Details.css'
import { useParams } from 'react-router-dom';
import DetailsCard from './DetailsCard';

const Details = () => {
    let { idTeam } = useParams();
    const [details,setDetails] = useState('')
    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`)
        .then(res => res.json())
        .then(data => setDetails(data.teams))
    },[])
    console.log(details);
    return (
        <div className="details">
            {details &&
                details.map(details => <DetailsCard details={details} key={details.idTeam}></DetailsCard>
            
                    )
            }
        </div>
    );
};

export default Details;