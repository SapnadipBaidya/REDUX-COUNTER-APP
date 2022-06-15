
import './App.css';
import { useDispatch,useSelector } from 'react-redux/es/exports';
import Another from './components/another';
import { upgrade,downgrade } from './Actions';

function App() {
  const state = useSelector((e)=>e) //any parameter
  const dispatch  = useDispatch();
  return (
    <div className="App">
     <button onClick={()=>{dispatch(upgrade())}}>+ UPGRADE</button>
     <h1>{state}</h1>
     <button onClick={()=>{dispatch(downgrade())}}>- DOWNGRADE</button>

    <Another/>
    </div>
  );
}

export default App;
