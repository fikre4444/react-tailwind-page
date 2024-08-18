import Header from './components/Header';
import Navbar from './components/Navbar';
import MainContent from './components/MainContent';

function App() {

  return (
    <div className="bg-black h-full text-white">
      <Header />
      <div className="flex">
        <Navbar />
        <MainContent />
      </div>
    </div>
  )
}

export default App;
