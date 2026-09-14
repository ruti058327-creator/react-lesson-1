import './App.css';
import Header from './components/Header/Header';
import Flower from './components/Flower/Flower';

function App() {
  return (
    <>
      <Header />
      
      {/* הפרח המלא שהיה לנו */}
      <Flower flowerName="חמנייה" petalColor="yellow" centerColor="brown" />

      {/* מופע 1: רק שם וצבע עלי כותרת */}
      <Flower flowerName="כלנית" petalColor="red" />

      {/* מופע 2: רק שם וצבע עלה מרכזי */}
      <Flower flowerName="סיגל" centerColor="purple" />

      {/* מופע 3: רק שם הפרח */}
      <Flower flowerName="מרגנית" />
    </>
  )
}

export default App;