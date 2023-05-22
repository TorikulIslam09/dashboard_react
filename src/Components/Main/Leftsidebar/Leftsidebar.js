import React from 'react';
import './Leftsidebar.scss';
import DashboardIcon from '@mui/icons-material/Dashboard';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import FilterFramesIcon from '@mui/icons-material/FilterFrames';
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
import CottageIcon from '@mui/icons-material/Cottage';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsSystemDaydreamIcon from '@mui/icons-material/SettingsSystemDaydream';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom';
const Leftsidebar = () => {
    return (
        <div className='leftsidebar ps-2'>
            <div className="logo">
                <p>React Dashboard</p>
            </div>
            <div className="left-center">
                <ul>
                    <p className="muted m-0">Main</p>
                    <li> <DashboardIcon/> <Link to="/">Dashboard</Link> </li>
                    <p className="title m-0">List</p>
                    <li> <Person2OutlinedIcon/> <Link to="/customers">Customers</Link> </li>
                    <li> <Inventory2Icon/> <Link to="/product">Product</Link> </li>                   
                    <li> <FilterFramesIcon/> Order </li>
                    <li> <AirportShuttleIcon/> Delivery </li>
                    <p className="title m-0">Usefull</p>
                    <li> <CottageIcon/> States  </li>
                    <li> <NotificationsIcon/> Notifications  </li>
                    <p className="title m-0">Service</p>
                    <li> <SettingsSystemDaydreamIcon/> Sytem Helth </li>
                    <li> <PsychologyIcon/> Logs </li>
                    <li> <SettingsIcon/> Settings </li>
                    <p className="title m-0">Profile</p>
                    <li> <AccountBoxIcon/> <Link to='/login'>Login</Link> </li>
                    <li> <LogoutIcon/> Logout </li>
                </ul>

            </div>
            <div className="left-option"></div>
        </div>
    );
};

export default Leftsidebar;