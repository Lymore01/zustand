/* eslint-disable @typescript-eslint/no-unused-vars */
import useStore from "./store/useStore";


const TestStore = () => {
const { count, increment, decrement } = useStore();
  return (
    <>
      <div>
        <h2>Count: {count}</h2>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
    </>
  );
};

export default TestStore;
