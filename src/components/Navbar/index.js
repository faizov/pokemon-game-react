import cn from 'classnames'
import s from './style.module.css'

const Navbar = ({handleOpen, open}) => {
    return (
        <nav id={s.navbar}>
            <div className={cn(s.navWrapper)}>
                <p className={s.brand}>
                LOGO
                </p>
                <span onClick={handleOpen} className={cn(s.menuButton, {[s.active]: open})}>
                    <span />
                </span>
            </div>
        </nav>
    )
}

export default Navbar;