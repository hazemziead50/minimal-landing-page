
import Navbar from './components/Navbar';
import Hero from './components/Hero'
import Clients from './components/Clients'
import Community from './components/Community';
import Unlock from './components/Unlock';
import Achievements from './components/Achievements';
import Calender from './components/Calender';
import Customers from './components/Customers';
import CommunityUpdates from './components/CommunityUpdates'
import Cta from './components/Cta'
import Footer from './components/Footer'

function App() {


  return (
    <div className="font-sans">
      <Navbar />
      <Hero/>
      <Clients/>
      <Community/>
      <Unlock/>
      <Achievements/>
      <Calender/>
      <Customers/>
      <CommunityUpdates/>
      <Cta/>
      <Footer/>
    </div>
  )
}

export default App
