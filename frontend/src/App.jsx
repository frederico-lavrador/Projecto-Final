import Header from './components/Header';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';
import Book from './pages/Book/Book';

function App() {

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
