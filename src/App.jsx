import { Header, Footer, Home, About, SkillsInfo, Services, Portfolio, GetInTouch, Clients, Contacts } from './components';

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
  </>
 );
}

export default App;
