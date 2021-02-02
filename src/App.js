import { useState } from 'react'
import HomePage from './routes/Home/'
import GamePage from './routes/Game/'

const App = () => {
  const pages = ['HOME','GAME', 'ABOUT', 'CONTACT',]
  const [page, setPage] = useState('app')

  const handleChangePage = () => {
    if(page === 'app') {
      setPage('game')
    } else {
      setPage('app')
    }
  }

  switch (page) {
    case 'app': 
      return <HomePage pages={pages} onChangePage={handleChangePage}/>
    case 'game': 
      return <GamePage onChangePage={handleChangePage}/>
    default:
      return <HomePage />
  }
}

export default App;