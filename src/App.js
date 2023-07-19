/* eslint-disable */
import './App.css';
import Header from './components/Header';
import Home from './routes/home';
import About from './routes/About';
import Contact from './routes/Contact';
import Skills from './routes/Skills';
import Services from './routes/Services';
import Qualification from './routes/Qualification';
import Work from './routes/Work';
import ScrollUp from './components/scrollUp';
import Footer from './routes/Footer';

const App = () => (
  <body>
    <Header />
    <main className="page_container">
      <Home />
      <About />
      <Skills />
      <Services />
      <Qualification />
      <Work />
      <Contact />
      <Footer />
    </main>
    <ScrollUp />
  </body>
);
export default App;
