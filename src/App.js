import { useState } from 'react'
import HomePage from './routes/Home/'
import GamePage from './routes/Game/'

const App = () => {
  const [page, setPage] = useState('app')

  const handleChangePage = () => {
    setPage('game')
  }

  switch (page) {
    case 'app': 
      return <HomePage onChangePage={handleChangePage}/>
    case 'game': 
      return <GamePage />
    default:
      return <HomePage />
  }
}

export default App;