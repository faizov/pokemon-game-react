import bg from './assets/bg3.jpg';

// components
import Header from './components/Header/'
import Layout from './components/Layout/'
import Footer from './components/Footer/'

function App() {
  return (
    <>
      <Header title={'Title'} descr={'Title'}/>
      <Layout id={1} title={'Title'} descr={'This is Description!'} urlBg={bg}/>
      <Layout id={2} title={'Title'} descr={'This is Description!'} colorBg={'tomato'}/>
      <Layout id={3} title={'Title'} descr={'This is Description!'} urlBg={bg}/>
      <Footer />
    </>
  );
}

export default App;
