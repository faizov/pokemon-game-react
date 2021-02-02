
const Game = ({onChangePage}) => {
    const handleClickButton = () => {
        onChangePage && onChangePage();
      }
    return (
        <>
            <p>Pokemon Game!</p>
            <button onClick={handleClickButton}>На главную</button>
        </>
    )
}

export default Game;