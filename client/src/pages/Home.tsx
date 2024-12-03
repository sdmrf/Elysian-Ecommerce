import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { increment, decrement } from "../redux/features/counterSlice";

const Home: React.FC = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Counter</h1>
      <div className="flex items-center space-x-4">
        <button
          className="px-4 py-2 bg-red-500 text-white font-semibold rounded hover:bg-red-600"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        <span className="text-2xl font-semibold">{count}</span>
        <button
          className="px-4 py-2 bg-green-500 text-white font-semibold rounded hover:bg-green-600"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Home;
