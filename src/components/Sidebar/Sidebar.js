import React from 'react';
import './Sidebar.css';
import { IoHomeOutline, IoStatsChartOutline, IoCalendarNumberOutline,IoSettingsOutline } from 'react-icons/io5'; 
import {BsFolder2Open, BsChatLeftDots } from 'react-icons/bs';
import {MdLogout} from 'react-icons/md'


const Sidebar = () => {

  const sidebar = [
    {
      title:"Overview",
      icon:<IoHomeOutline/>
    },
    {
      title:"Stats",
      icon:<IoStatsChartOutline/>
    },
    {
      title:"Projects",
      icon:<BsFolder2Open/>
    },
    {
      title:"Chat",
      icon:<BsChatLeftDots/>
    },
    {
      title:"Calendar",
      icon:<IoCalendarNumberOutline/>
    },

    
  ]
  return (
    <div className='sidebar'>
        <div className='sidebar_heading'>.taskez</div>
        {/* sidebar content */}
        {
          sidebar.map((sidebar)=>{
            return(
              <div className='sidebar_box'>
                <div className='sidebar_icon'>{sidebar.icon}</div>
                <div className='sidebar_title'>{sidebar.title}</div>
              </div>
            )
          })
        }
        <div style={{position: "absolute", bottom:"20px"}}>
          <div className='sidebar_box'>
            <IoSettingsOutline color='#9a9a9a'/>
            <div className='sidebar_title'>Setting</div>
          </div>
          <div className='sidebar_box'>
            <MdLogout color='#9a9a9a'/>
            <div className='sidebar_title'>Log Out</div>
          </div>
        </div>
    </div>
  )
}

export default Sidebar