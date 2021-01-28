// components
import Header from './components/Header/'
import Layout from './components/Layout/'
import Footer from './components/Footer/'

import bg from './assets/bg3.jpg';

function App() {
  return (
    <>
      <Header 
        title={'Pokemon game'} 
        descr={'This is Description!'}
      />

      <Layout 
        id={1} 
        title={'Title'} 
        descr={'This is Description!'} 
        urlBg={bg}
      />

      <Layout 
        id={2} 
        title={'Title'} 
        descr={'This is Description!'} 
        colorBg={'#8bc34a'}
      />

      <Layout 
        id={3} 
        title={'Title'} 
        descr={'This is Description!'} 
        urlBg={bg}
      />

      <Footer />
    </>
  );
}

export default App;
