import Header from './components/Header/Header';
import Flower from './components/Flower/Flower';
import './App.css';

function App() {
  const flowers = [
    {
      code: 'F-001',
      flowerName: 'ורד',
      petalColor: '#f9a8d4',
      centerColor: '#9d174d',
    },
    {
      code: 'F-002',
      flowerName: 'חמנייה',
      petalColor: '#fde047',
      centerColor: '#713f12',
    },
    {
      code: 'F-003',
      flowerName: 'צבעוני',
      petalColor: '#c4b5fd',
      centerColor: '#5b21b6',
    },
    {
      code: 'F-004',
      flowerName: 'סחלב',
      petalColor: '#fbcfe8',
      centerColor: '#831843',
    },
  ];

  return (
    <main className="garden-app" dir="rtl">
      <Header />
      <section className="garden-section" aria-labelledby="flowers-heading">
        <h2 id="flowers-heading" className="section-title">
          הפרחים בגינה שלי
        </h2>
        <div className="flower-list">
          {flowers.map((flower) => (
            <Flower key={flower.code} {...flower} />
          ))}
        </div>
      </section>

      <section className="garden-section defaults-section" aria-labelledby="defaults-heading">
        <h2 id="defaults-heading" className="section-title">
          פרחים עם צבעי ברירת מחדל
        </h2>
        <div className="flower-list">
          <Flower flowerName="כלנית" petalColor="#fecaca" />
          <Flower flowerName="יסמין" centerColor="#166534" />
          <Flower flowerName="פרח בר" />
        </div>
      </section>
    </main>
  );
}

export default App;
