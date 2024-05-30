import './App.css';
import ImageGenerator from './Components/ImageGenerator';

function App() {
  console.log(process.env.REACT_APP_API_KEY);
  return (
    <div>
      <ImageGenerator />
    </div>
  );
}

export default App;
