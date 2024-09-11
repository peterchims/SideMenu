import React, { useState, useEffect} from 'react'
import logo from "../images/223rb (1).png"
import bcklogo from "../images/back.jpg"
import Searchbtn from "../images/8666693_search_icon.png"
import Rht from '../images/rht.png'
import Dashboard from '../images/R.png'
//
import MenuItem from './menuItem';

const menuItems = [
    { 
      name: "Dashboard", exact:true,
      to: '/', 
      iconClassName: 'dashboard-icon' // Assuming this is a class name or use an actual component
    },
  
    { 
      name: "Content", 
      to: '/content',
      subMenus: [
        { name: "Courses", to: '/content/courses' }, 
        { name: "Videos", to: "/content/videos" },
      ],
    },
  
    { 
      name: "Design", 
      to: '/content/design'  // Fixed this line
    }
  ];
  

const SideMenu = (props) =>{
    const [inactive, setInactive] = useState(false);
    useEffect(() => {

        if(inactive){
            document.querySelectorAll('.sub-menu').forEach(el => {
                el.classList.remove('active')
            });
        }
      props.onCollapse(inactive);

    }, [inactive,props]);

    return(
<div className={`side-menu ${inactive ? "inactive" : ""}`}>
    <div className='top-section'>
        <div className='logo'>
<img src={logo} alt="image-logo" />
        </div>
     
        <div onClick={() =>setInactive(!inactive)} className='toggle-btn'>
          {inactive ? (
 <img src={Rht} alt="back-logo" />) : (
    <img src={bcklogo} alt="back-logo" />
 )}
           
        </div>
    </div>
    <div className='search-section'>
        <button  className='search-btn'>
        <img src={Searchbtn} alt="searchbtn" /> 
        </button> 
        <input type="text" placeholder="Search Here...." />
    </div>
    <div className='divider'></div>

    <div className='main-menu'>
           <ul>
            {
                menuItems.map((menuItem,index) => (
                    <MenuItem 
                    key={index} 
                    name={menuItem.name}
                    exact={menuItem.exact}
                    to={menuItem.to}
                    subMenus={menuItem.subMenus || []}
                    />
                ))  
            }
          
           </ul>
    </div>
    <div className="side-menu-footer">
        <div className='avatar'>

        <img src={Dashboard} alt="footer-display"/>
        </div>
       <div className='user-info'>
        <h5> Created by Peter4Tech</h5>
        <p> Connect @peter4tech@gmail.com</p>
       </div>

    </div>
</div>
    );
}

export default SideMenu;