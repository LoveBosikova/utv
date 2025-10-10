import './App.css'
import {  
  Route,
  Routes
  } 
from 'react-router-dom';
import Header from './components/layout/Header/Header';
import MainPage from './components/pages/MainPage/MainPage';
import Navigation from './components/layout/Navigation/Navigation';
import AboutPage from './components/pages/AboutPage/AboutPage';
import PublicPage from './components/pages/PublicPage/PublicPage';
import ProjectsPage from './components/pages/ProjectsPage/projectsPage';
import PartnersPage from './components/pages/PartnersPage/PartnersPage';
import SertificatePage from './components/pages/SertificatePage/SertificatePage';
import ContactPage from './components/pages/ContactPage/ContactPage';

function App() {

  return (
  <>
      <Header />
      <Navigation />
      <Routes>
        <Route index path='/' element={<MainPage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/projects' element={<ProjectsPage />} />
        <Route path='/public' element={<PublicPage />} />
        <Route path='/partners' element={<PartnersPage />} />
        <Route path='/sertificates' element={<SertificatePage />} />
        <Route path='/contacts' element={<ContactPage />} />
      </Routes>
      {/* <Footer /> */}
    </>
  )
}

export default App
