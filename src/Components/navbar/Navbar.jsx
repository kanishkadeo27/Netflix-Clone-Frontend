import './navbar.scss';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import profileImage from './../../images/profilePhoto.jpg';
import { useState } from 'react';
const Navbar = () => {
    const [isScrolled,setIsScrolled]=useState(false);

    window.onscroll = ()=>{
        setIsScrolled(window.scrollY === 0 ? false : true);
        return()=>{
            window.onscroll = null;
        }
    }
    console.log(isScrolled);
    return (
        <div className={isScrolled ? "navbar scrolled":'navbar'}>
            <div className="container">
                <div className="left">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1198px-Netflix_2015_logo.svg.png?20190206123158" alt="netflix-logo" />
                    <span>Homepage</span>
                    <span>Series</span>
                    <span>Movies</span>
                    <span>New and Popular</span>
                    <span>My List</span>
                </div>
                <div className="right">
                    <SearchIcon className='icon' />
                    <span>KIDS</span>
                    <NotificationsIcon className='icon' />
                    <img src={profileImage} alt="profile-icon-img" />
                    <div className="profile">
                        <ArrowDropDownIcon className='icon' />
                        <div className="options">
                            <span>Settings</span>
                            <span>Logout</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar