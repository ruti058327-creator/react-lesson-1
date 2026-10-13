import myImage from './1.png';
import './Header.css';

export default function Header() {
  return (
    <header className="garden-header">
      <img className="garden-header-image" src={myImage} alt="" />
      <h1 className="header-title">הגינה שלי</h1>
      <p>ברוכים הבאים לגינה הצבעונית שלי</p>
    </header>
  );
}
