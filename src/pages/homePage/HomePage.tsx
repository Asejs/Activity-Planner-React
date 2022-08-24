import './HomePage.css';


const HomePage: React.FC = () => {
  return (
    <>
      <div className="homepage" style={{ overflow: 'hidden' }} />

      <div className="home_description">
          Velkommen til<br />
          <img src="assets/logo.png" alt="logo"/><br />
          Logg inn for å melde deg på aktiviteter!
      </div>
    </>
  )
}

export default HomePage;