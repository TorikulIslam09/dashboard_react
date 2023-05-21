import React from 'react';
import './Heder.scss'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import AnnouncementIcon from '@mui/icons-material/Announcement';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';

const Heder = () => {
    return (
        <div> 

            <div className="heder d-flex align-items-center justify-content-between">
            <div className="search">
                    <input type="text" placeholder='search......' />
                    <SearchOutlinedIcon/>
            </div>
                <div className="items-der">
               
                   <div className="items d-flex align-items-center">
                   <LanguageOutlinedIcon/> 
                   <span>English</span>
                   </div>
                   <div className="items">
                    <DarkModeOutlinedIcon/>
                   </div>
                   <div className="items position-relative">
                        <NotificationsOutlinedIcon/>
                        <span className='notification'>1</span>
                   </div>

                   <div className="items position-relative">
                        <AnnouncementIcon/>
                        <span className='notification'>1</span>
                   </div>
                   <div className="items">
                    <FormatListNumberedIcon/>
                   </div>
                   <div className="items">
                   </div>
                </div>
            </div>
        </div>
    );
};

export default Heder;