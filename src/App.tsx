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
// import PartnersPage from './components/pages/PartnersPage/PartnersPage';
import SertificatePage from './components/pages/SertificatePage/SertificatePage';
import ContactPage from './components/pages/ContactPage/ContactPage';
import ProgramsPage from './components/pages/ProgramsPage/ProgramsPage';

function App() {

  return (
  <>
      <Header />
      <Navigation />
      <Routes>
        <Route index path='utv/' element={<MainPage />} />
        <Route path='utv/about' element={<AboutPage />} />
        <Route path='utv/meet' element={<ProjectsPage />} />
        <Route path='utv/story' element={<PublicPage />} />
        <Route path='utv/programs' element={<ProgramsPage />} />
        <Route path='utv/other' element={<SertificatePage />} />
        <Route path='utv/teachers' element={<ContactPage />} />
        <Route path='utv/faces' element={<ContactPage />} />
        <Route path='utv/media' element={<ContactPage />} />
        <Route path='utv/contacts' element={<ContactPage />} />
        <Route path='*' element={<MainPage />} />
      </Routes>
      {/* <Footer /> */}
    </>
  )
}

export default App
