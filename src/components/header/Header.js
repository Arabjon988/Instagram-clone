import React, { useState } from 'react'
import '../styles-component/Header.css'
import { FiSearch, FiHeart, FiPlusSquare, FiHome } from 'react-icons/fi'
import { RiMessengerFill, RiMessengerLine } from 'react-icons/ri'
import { FaHeart } from 'react-icons/fa'
import { AiFillHome } from 'react-icons/ai'
import { VscAccount } from 'react-icons/vsc'
// import { MdAccountCircle } from 'react-icons/md'
import { useStateValue } from '../../context/stateprovider/StateProvider'
import { IoCompassOutline } from 'react-icons/io5'
import { IoIosCompass } from 'react-icons/io'
import { NavLink, useLocation } from 'react-router-dom'

function Header() {
    const [{user}] = useStateValue('')
  function cutEmail() {
    if(typeof user === "string"){
      return  [...user].splice(0, user.search("@")).join("")
    }
    return ""
  }

  let userName = cutEmail(user)
  console.log(userName)

    const [openProfile, setOpenProfile] = useState(false)

    const location = useLocation('')

    return (
        <div className="header">
            <div className="header__container">
                <div className="header__logo">
                    <img src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.pngloo" alt="logo" className="instagram__logo" />
                </div>
                <div className="header__search">
                    <div className="header__searchBar">
                        <FiSearch />
                        <input type="text" id="#" placeholder="Search" />
                    </div>
                </div>
                <ul className="header__collection">
                    <li className="header__item">
                        <NavLink to="/" >
                            {
                                location.pathname === '/' ? <AiFillHome /> : <FiHome />
                            }
                        </NavLink></li>
                    <li className="header__item"><NavLink to="/messenger" >
                        {
                            location.pathname === '/messenger' ? <RiMessengerFill /> : <RiMessengerLine />
                        }
                    </NavLink></li>
                    <li className="header__item"><NavLink to="/"><FiPlusSquare /></NavLink></li>
                    <li className="header__item"><NavLink to="/compos">
                        {
                            location.pathname === '/compos' ? <IoIosCompass /> : <IoCompassOutline />
                        }
                    </NavLink></li>
                    <li className="header__item"><NavLink to="/heart">
                        {
                            location.pathname === '/heart' ? <FaHeart /> : <FiHeart />

                        }
                    </NavLink></li>
                    <li className="header__item" onClick={() => setOpenProfile(!openProfile)}>
                        <VscAccount />
                        {
                            openProfile? <ul className="profile_options">
                            <li className="option">
                                <NavLink to={`/${userName}`}>Profile</NavLink>
                            </li>
                        </ul> : <> </>
                        }

                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header
// {
//     openProfile ? <MdAccountCircle/> : <VscAccount/>
// }