import "./sidebar.css"

export default function SideBar() {
  return (
    <div className="sidebar">
      <div className="sidebarIteam">
        <span className="sidebarTitle">ABOUT ME</span>
        <img 
        src="https://i.pinimg.com/236x/7a/1e/b8/7a1eb8110ff38d5937b4410d4454b2ac.jpg" 
        alt=""
        />
        
        <p><br/>Hello there! I'm a spirited and 
            curious girl with a passion for exploring the 
            world through words and imagination. 
            I find joy in the simple things, 
            like the feeling of sunshine on my 
            face and the sound of laughter filling 
            the air.</p><br/>
      </div>
      <div className="sidebarIteam">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList"><br/>
            <li className="sidebarListIteam">Life</li>
            <li className="sidebarListIteam">Music</li>
            <li className="sidebarListIteam">Style</li>
            <li className="sidebarListIteam">Sport</li>
            <li className="sidebarListIteam">Tech</li>
            <li className="sidebarListIteam">Cinema</li><br/>
        </ul>
      </div>
      <div className="sidebarIteam">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
        <i className="sidebarIcon fa-brands fa-square-facebook"></i>
        <i className="sidebarIcon fa-brands fa-square-twitter"></i>
        <i className="sidebarIcon fa-brands fa-square-pinterest"></i>
        <i className="sidebarIcon fa-brands fa-square-instagram"></i>
        </div>
      </div>
    </div>
  )
}
