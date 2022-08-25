import './HomePage.css';


const HomePage: React.FC = () => {
  return (
    <>
      <div className="homepage" style={{ overflow: 'hidden' }} />

      <div className="home_description">
          <p>Velkommen til</p>
          <img src="assets/logo.png" alt="logo"/>
          <p>Logg inn for å melde deg på aktiviteter!</p>
      </div>
    </>
  )
}

export default HomePage;