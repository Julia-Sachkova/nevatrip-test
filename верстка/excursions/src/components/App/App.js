import './App.css';
import Card from '../Card/Card';
import { excursions } from '../../utils/data';

function App() {
  return (
    <div className="app">
      {excursions.map((item) => (
        <Card
          key={item.id}
          src={item.src}
          spanText={item.spanText}
          duration={item.duration}
          description={item.description}
          list={item.list}
          times={item.times}
          price={item.price}
          onPier={item.onPier}
        />
      ))}
    </div>
  );
}

export default App;
