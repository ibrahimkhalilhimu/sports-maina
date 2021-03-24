import React, { useEffect, useState } from 'react';
import Data from '../../Data/Data';
import CardData from './CardData';
import './Home.css'
const Home = () => {

    const [post,setPost] = useState(null)
    useEffect(()=>{
        const url =`https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League`
        fetch(url)
        .then(res=>res.json())
        .then(data=>
            
            setPost(data.teams)
           
            );
    },[])
console.log(post);
    return (
        <div >
            <div className="background">
                <h2 className="d-flex align-content-center justify-content-center text-white pt-5">Sports Mania</h2>
            </div>
            <div className="container">
             <div className="row py-3">
             {post &&
                post.length === 0 && <h1 className="text-danger text-center">Loading ....</h1>
                     }
     {
     post &&
        post.map(cardData => ( <CardData data={cardData} key={cardData.idTeam} ></CardData>))
     }
      
        </div>
        </div>
        </div>
    );
};

export default Home;