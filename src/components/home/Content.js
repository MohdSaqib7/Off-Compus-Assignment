import Data from '../main/Data';
import picture from '../photo/pic.jpg';
import {useNavigate} from 'react-router-dom';

function Content(){

    const navigate = useNavigate();
    const moviesPage = ()=>{
        navigate("/Movies");
    }

    return(
        <div className="home-container">

            <div className="section-1">
                <div className='head'>
                    <h1 className='heading'>Movie information Hub</h1>
                    <p className='para'>We provide a list of your favourite movies information about the cast.</p>
                </div>
            </div>

            <div className='section-2'>
                {
                    Data.map((e)=>{
                        return(
                            <div className='box'>
                                <div class="pic">
                                    <img src={picture} alt="loading"></img>
                                </div>
                                <h3 className='sec-2-heading'>{e.title}</h3>
                                <p className='sec-2-para'>{e.description}</p>
                            </div>
                        )
                    })
                }
            </div>

            
            <div className='section-3'>    
                <button className="expandButton" onClick={moviesPage}>View all</button>
            </div>

        </div>
    )
}

export default Content;