import { Link } from 'react-router-dom';
import cn from 'classnames';
import s from './style.module.css';

const MENU = [
    {
        title: 'HOME',
        to: '/'
    },
    {
        title: 'GAME',
        to: 'game'
    },
    {
        title: 'ABOUT',
        to: 'about'
    },
    {
        title: 'CONTACT',
        to: 'contact'
    }
]

const Menu = ({isOpen, handleOpen}) => {

    return (
        <div className={cn(s.menuContainer, {
                [s.active]: isOpen === true, 
                [s.deactive]: isOpen === false
            })}>
            <div className={s.overlay} />
            <div>
                <ul>
                    {
                        MENU.map(({title, to}, index) => (
                            <li key={index}>
                                <Link to={to} onClick={handleOpen}>
                                    {title}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default Menu;