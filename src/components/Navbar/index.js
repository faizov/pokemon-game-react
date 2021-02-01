import cn from 'classnames'
import s from './style.module.css'

const Navbar = ({handleOpen, open}) => {
    return (
        <nav id={s.navbar}>
            <div className={cn(s.navWrapper)}>
                <p class={s.brand}>
                LOGO
                </p>
                <a onClick={handleOpen} className={cn(s.menuButton, {[s.active]: open})}>
                    <span />
                </a>
            </div>
        </nav>
    )
}

export default Navbar;