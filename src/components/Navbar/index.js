import { Link } from 'react-router-dom'

import cn from 'classnames'
import s from './style.module.css'

import logo from '../../assets/logo'

const Navbar = ({handleOpen, isOpen, bgActive}) => {
    return (
        <nav id={s.navbar} className={cn({[s.bgActive]: bgActive})}>
            <div className={cn(s.navWrapper)}>
                <div className={s.brand}>
                    <Link to={'/'} onClick={!handleOpen}>
                        <img width="50" src={logo} alt="logo"/>
                    </Link>
                </div>
                <span onClick={handleOpen} className={cn(s.menuButton, {[s.active]: isOpen})}>
                    <span />
                </span>
            </div>
        </nav>
    )
}

export default Navbar;