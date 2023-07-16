
import './Header.css';



const Header = () => {
  const options: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  const today = new Date().toLocaleDateString(undefined, options);

  return (
    <header>
   
      <div className="day-date">{today}</div> {/* Display the day and date */}
    </header>
  );
};

export default Header;










