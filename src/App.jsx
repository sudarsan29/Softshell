import Hero from "./components/Hero";
import Process from './components/process';
import WhyToChooseUs from "./components/whyToChooseUs";
import Clients from './components/clients';
import ContactForm from "./components/contactForm";
import ChatWidget from "./components/ChatWidget";

function App() {
  return (
    <>
      <Hero />
      <div
      className="min-h-screen bg-cover bg-center bg-fixed"
      style={{ backgroundImage: "url('/maxresdefault.jpg')" }}
    >
      <Process />
      <WhyToChooseUs /> 
      <Clients />
      <ContactForm />
      <ChatWidget />
    </div>
    </>
    
  );
}

export default App;
