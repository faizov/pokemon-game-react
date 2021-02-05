import { useHistory } from 'react-router-dom'

import s from './style.module.css';

import icon from '../../assets/icon-pikachu.png'

const Header = ({title, descr}) => {
    const history = useHistory();
    const handleClick = () => {
        history.push('/game')
    }

    return (
        <header className={s.root}>
            <div className={s.forest}></div>
            <div className={s.silhouette}></div>
            <div className={s.moon}></div>
            
            <div className={s.container}>
                <h1>{title}</h1>
                <p>{descr}</p>

                <button onClick={handleClick}>Start game <i><img width="25" src={icon} alt=""/></i></button>
            </div>
        </header>
    )
}

export default Header;