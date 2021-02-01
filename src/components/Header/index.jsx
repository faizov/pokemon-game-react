import s from './style.module.css';

const Header = ({title, descr, handleClickButton}) => {

    const handleClick = () => {
        handleClickButton && handleClickButton();
    }

    return (
        <header className={s.root}>
            <div className={s.forest}></div>
            <div className={s.container}>
                <h1>{title}</h1>
                <p>{descr}</p>

                <button onClick={handleClick}>Start game</button>
            </div>
        </header>
    )
}

export default Header;