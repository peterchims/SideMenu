import React, { useState } from 'react';
import contentPen from '../images/pen.png'
import { NavLink } from 'react-router-dom';


function MenuItem(props) {
    const { name, subMenus, onClick, to, exact} = props;
    const [expand, setExpand] = useState(false);

return(
            <li onClick={props.onClick}>
                <NavLink 
                exact to={to} onClick={() => {setExpand(!expand); }} className='menu-item'>
    <div className='menu-icon'>
        <img src={contentPen} alt="back-logo" />
    </div>
    <span>{name}</span>
</NavLink>

                {subMenus && subMenus.length > 0 ? ( 
                    <ul className={`sub-menu ${expand ? "active" : ""}`}>
                    {subMenus.map((menu, index) => (  
                        <li key={index}>
                        <NavLink to={menu.to}>{menu.name}</NavLink>
                    </li> 
                ))}
                </ul> 
              ) : null}
                
            </li>
);
};
export default MenuItem;