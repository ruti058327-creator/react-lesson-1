import './Flower.css';

export default function Flower(props) {
  const petalColor = props.petalColor || '#fbcfe8';
  const centerColor = props.centerColor || '#a16207';
  const flowerName = props.flowerName || 'פרח ללא שם';

  return (
    <button
      className="flower-card"
      type="button"
      style={{ backgroundColor: petalColor, color: centerColor }}
      onClick={() => alert(`אני פרח מסוג ${flowerName}`)}
    >
      <span className="flower-illustration" aria-hidden="true">
        ✿
      </span>
      <span className="flower-name">{flowerName}</span>
      <span className="flower-details">
        צבע עלי הכותרת: {petalColor}, צבע המרכז: {centerColor}
      </span>
      <span className="flower-code">
        קוד פרח: {props.code || 'ללא קוד'}
      </span>
      <span className="flower-hint">לחיצה לפרטים</span>
    </button>
  );
}