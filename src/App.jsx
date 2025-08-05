import { Header, Footer, Home, About, SkillsInfo, Services, Portfolio, GetInTouch, Clients, Contacts, ScrollToTop, ThemeToggle } from './components';

function App() {
 return (
  <>
   <Header />
   <main>
    <Home />
    <About />
    <SkillsInfo />
    <Services />
    <Portfolio />
    <GetInTouch />
    <Clients />
    <Contacts/>
   </main>
   <Footer />
   <ScrollToTop/>
   <ThemeToggle/>
  </>
 );
}

export default App;
