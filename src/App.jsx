import React from 'react';
import Flower from './components/Flower/Flower';

function App() {
  const flowers = [
    { id: 1, name: 'ורד', color: 'אדום', price: 15 },
    { id: 2, name: 'חמניה', color: 'צהוב', price: 12 },
    { id: 3, name: 'צבעוני', color: 'ורוד', price: 10 },
    { id: 4, name: 'סחלב', color: 'לבן', price: 35 }
  ];

  return (
    <div style={{ padding: '24px', fontFamily: 'sans-serif', direction: 'rtl' }}>
      <h1>רשימת הפרחים בגינה</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
        {flowers.map((flower) => (
          <Flower
            key={flower.id}
            id={flower.id}
            name={flower.name}
            color={flower.color}
            price={flower.price}
          />
        ))}
      </div>
    </div>
  );
}

export default App;