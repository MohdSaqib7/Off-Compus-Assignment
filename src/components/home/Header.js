import mylogo from '../photo/logo.png';
function Header(){
    return(
        <div className="header">
            <div className="logo">
                <img src={mylogo} alt="Loading"></img>
            </div>
        </div>
    )
}

export default Header;