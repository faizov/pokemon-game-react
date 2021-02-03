import cn from 'classnames'
import s from './style.module.css'

const Navbar = ({handleOpen, isOpen, bgActive = false}) => {
    return (
        <nav id={s.navbar} className={cn({[s.bgActive]: bgActive})}>
            <div className={cn(s.navWrapper)}>
                <p className={s.brand}>
                LOGO
                </p>
                <span onClick={handleOpen} className={cn(s.menuButton, {[s.active]: isOpen})}>
                    <span />
                </span>
            </div>
        </nav>
    )
}

export default Navbar;