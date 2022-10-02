import picture from '../photo/pic.jpg';
import {useNavigate} from 'react-router-dom';
import React,{useEffect, useState} from 'react';

function MoviesDetails(){

    const [curmovie, setmovie] = useState([]);

    const getApi = async()=>{
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        setmovie(await response.json()); 
    }

    useEffect(()=>{
        getApi();
    },[])

    const navigate = useNavigate();
    const HomePage = ()=>{
        navigate("/");
    }

    // const fun=()=>{

    // }

    return(
        <div className="movie-container">

            <div>
                <div className='back-Button'>
                    <button onClick={HomePage}><i class="fa fa-arrow-left"></i></button>
                </div>
                <div className='search-box'>
                    <input placeholder='Search title'></input>
                </div>  
            </div>

            <div className='movie-header'>
                <h1 className='movie-heading'>Movie information hub</h1>
            </div>

            <div className='section-2'>
                {
                    curmovie.map((e)=>{
                        return(
                            <div className='box' key={e.id}>
                                <div class="pic">
                                    <img src={picture} alt="loading"></img>
                                </div>
                                <h3 className='sec-2-heading'>{e.title}</h3>
                                <p className='sec-2-para'>{e.body}</p>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
}

export default MoviesDetails;