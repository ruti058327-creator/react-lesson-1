import myImage from './1.png';
export default function Header() {
  return (
    <div>
      {/* שימי לב ל- className במקום class */}
      <h1 className="header-title">הגינה שלי</h1> 
      
      {/* משתמשים בתמונה שהבאנו בתוך התגית img */}
      <img src={myImage} alt="תמונת גינה" style={{ display: 'block', margin: '0 auto', width: '300px' }} />
    </div>
  );
}



