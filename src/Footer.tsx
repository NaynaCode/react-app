
const Footer = () => {
  const handleNavigateLeft = () => {
    // Logic for navigating left
    // Add your implementation here
  };

  const handleNavigateRight = () => {
    // Logic for navigating right
    // Add your implementation here
  };

  return (
    <footer>
      <div>
        <button onClick={handleNavigateLeft}>Prethodni</button>
        <button onClick={handleNavigateRight}>Sledeći</button>
      </div>
    </footer>
  );
};

export default Footer;

