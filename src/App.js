import TopBar from './components/TopBar'
import IntroBanner from './components/IntroBanner'
import StoreLinks from './components/StoreLinks'
import './App.css';

const stores = [
  {
    imgUrl: './assets/sprouts.webp',
    storeName: 'Sprouts Farmers Market'
  },
  {
    imgUrl: './assets/smiths.webp',
    storeName: "Smith's",
  },
  {
    imgUrl: './assets/albertsons.webp',
    storeName: 'Albertsons'
  }
]

function App() {
  return <div className="App">
      <TopBar />
      <div className="background"></div>
      <IntroBanner />
      <StoreLinks stores={stores}/>
  </div>
}

export default App;
