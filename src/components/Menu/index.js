import cn from 'classnames'
import s from './style.module.css'

const Menu = ({open, pages}) => {
    return (
        <div className={cn(s.menuContainer, {[s.active]: open})}>
            <div className={s.overlay} />
            <div className={s.menuItems}>
                <ul>
                    {
                        pages.map(
                            (item) => 
                            <li>
                                <a href={item}>
                                    {item}
                                </a>
                            </li>
                        )
                    }
                </ul>
            </div>
        </div>
    )
}

export default Menu;