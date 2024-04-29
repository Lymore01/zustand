/* eslint-disable @typescript-eslint/no-unused-vars */
import { useStore } from "./store/useStore";
import { useEffect } from "react";

const setCount = () => {
  useStore.setState({count: 2});
  };

const TestStore = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const count = useStore((state: any)=>state.count)
  const {increment, decrement } = useStore();

  useEffect(() => {
    setCount();
  }, []);

  return (
    <>
      <div>
        {count}
        <div>
          <button onClick={increment}>+</button>
          <button onClick={decrement}>-</button>
        </div>
      </div>
    </>
  );
};

export default TestStore;
