import React from 'react'
import "./SideBar.css";
import Home from "../Home/Home";
import { BsChevronLeft , BsChevronRight} from "react-icons/bs";
import { useState } from "react";
import SideBarList from './SideBarList';

const SideBar = ({theme,changeTheme}) => {

const [expandSideBar, setExpandSidebar] = useState(false);

    const handleEpandClick = ()=> {
        setExpandSidebar
    (!expandSideBar)
    }

  return (
    <div className='container-fluid  sidebar-section'>
        <div className={expandSideBar ? 'sidebar-expand sidebar':'sidebar'}>
            <div className='icon-for-sidebar-expand-and-collapse'>

                <p onClick={handleEpandClick}>
                    {expandSideBar ? (
                        <BsChevronLeft size={30}/>
                    ):(
                        <BsChevronRight size={30}/> )}
                   
                    </p>
            </div>

            <SideBarList expandSideBar={expandSideBar} />
        </div>

        <div className='container-fluid'>
            <Home  changeTheme={changeTheme} theme={theme} />
        </div>
    </div>
  )
}

export default SideBar