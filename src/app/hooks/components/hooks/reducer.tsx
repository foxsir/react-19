import { useReducer } from 'react';

function reducer(state: {age: number}, action: {type: string}) {
  if (action.type === 'incremented_age') {
    return {
      age: state.age + 1
    };
  }
  throw Error('Unknown action.');
}

export default function Reducer() {
  const [state, dispatch] = useReducer(reducer, { age: 42 }, (e) => {
    return {...e, age: e.age + 10};
  });

  return (
    <>
      <button onClick={() => {
        dispatch({ type: 'incremented_age' })
      }}>
        Increment age
      </button>
      <p>Hello! You are {state.age}.</p>
    </>
  );
}
