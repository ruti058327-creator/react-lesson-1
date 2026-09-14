export default function Flower(props) {
  // תנאי מקוצר: אם props.petalColor קיים - קח אותו, אם לא - קח "pink"
  const petalColor = props.petalColor || "pink";
  const centerColor = props.centerColor || "yellow";
  const flowerName = props.flowerName || "פרח ללא שם";

  return (
    <div 
      style={{ backgroundColor: petalColor, padding: '20px', margin: '20px', borderRadius: '10px' }}
      onClick={() => alert(`אני פרח מסוג ${flowerName}`)}
    >
      <h2 style={{ color: centerColor }}>{flowerName}</h2>
      <p style={{ color: centerColor }}>
        צבע העלים: {petalColor}, צבע המרכז: {centerColor}
      </p>
    </div>
  );
}