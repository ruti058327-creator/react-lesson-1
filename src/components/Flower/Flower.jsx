import './Flower.css';

export default function Flower(props) {
  const petalColor = props.petalColor || '#fbcfe8';
  const centerColor = props.centerColor || '#a16207';
  const flowerName = props.flowerName || 'פרח ללא שם';

  return (
    <div
      className="flower-card"
      style={{ backgroundColor: petalColor, color: centerColor }}
      onClick={() => alert(`אני פרח מסוג ${flowerName}`)}
    >
      <img className="flower-image" src="/1.png" alt="" />
      <span className="flower-name">{flowerName}</span>
      <span className="flower-details">
        צבע עלי הכותרת: {petalColor}, צבע המרכז: {centerColor}
      </span>
      <span className="flower-code">
        קוד פרח: {props.code || 'ללא קוד'}
      </span>
    </div>
  );
}