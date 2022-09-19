import './App.css';
import { List } from './List';
import image from './2580.jpg';

function App() {
  return (
<div className='block2'>

<div className='list'>
<h1>Список    дел</h1>
    </div>

    <div className='list'>
        <img src={image}width='160px' alt='map'/>
        </div>


    <div className='list'>
    <List />
  </div>
  </div>
 
  );
}

export default App;
