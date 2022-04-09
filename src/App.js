import logo from './logo.svg';
import Header from './Header'
import Travel from './Travel'
import data from './data'
import './App.css';

function App() {
  const places = data.map((place) => {
    return <Travel key={place.id} place={place} />
  })
  
  return (
    <div className="card-container">
      <Header />
      <section className="travel-section">
        {places}
      </section>
    </div>
  );
}

export default App;
