import './App.css'
import categories from "./Api";
import Row from "./components/Row";
import Banner from './components/Banner';


function App() {
  return (
    <div className="App">
      {/*Nav Bar */}
      {/*Destaque Banner */}
      <Banner/>
      {categories.map((category) => {  /*Cards */
        return <Row key={category.name} title={category.title} path={category.path} isLarge={category.isLarge}/>
      })}
    </div>
  );
}

export default App;
