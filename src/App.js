import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from './redux/actions/ProductActions';

function App() {
  const increaseValue = useSelector(state => state.increase);
  const decreaseValue = useSelector(state => state.decrease);
  const isLoggedIn = useSelector(state => state.authenticate);
  const dispatch = useDispatch();

  return (
    <div className='App'>
      <h1>increaseValue {increaseValue}</h1>
      <h1>decreasevalue {decreaseValue}</h1>
      {isLoggedIn ? (
        <h3>Valuable info I shouldn't see</h3>
      ) : (
        <h3>need to be logged in</h3>
      )}
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
}

export default App;
