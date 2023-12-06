import { Link } from "react-router-dom";
import "./topbar.css"

export default function TopBar() { 
  const currentuser = false;
  return (
    <div className='top'>
      <div className="topLeft">
        <i className="topIcon fa-brands fa-square-facebook"></i>
        <i className="topIcon fa-brands fa-square-twitter"></i>
        <i className="topIcon fa-brands fa-square-pinterest"></i>
        <i className="topIcon fa-brands fa-square-instagram"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/">HOME</Link>
            </li>
            <li className="topListItem"><Link className="link" to="/">ABOUT</Link></li>
            <li className="topListItem"><Link className="link" to="/">CONTACT</Link></li>
            <li className="topListItem"><Link className="link" to="/write">WRITE</Link></li>
            <li className="topListItem">
              {currentuser && "LOGOUT"}
            </li>
        </ul>
      </div>
      <div className="topRight">
        {
          currentuser ? (
        <img 
        className="topImg"
        src="https://www.tensionends.com/wp-content/uploads/2022/09/Beautiful-Girl-DP-Images-3.jpg" 
        alt="" 
        />
          ):(
            <ul className="topList">
              <li className="topListItem">
            <Link className="link" to="/login">LOGIN</Link>
            </li>
            <li className="topListItem">
            <Link className="link" to="/register">REGISTER</Link>
            </li>
            </ul>
        
          )
}
        <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>  
      </div>
    </div>
  )
}
