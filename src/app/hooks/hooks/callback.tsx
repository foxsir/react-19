'use client';

import {useCallback, useState} from "react";

export default function Callback() {
  const [count, setCount] = useState(0);

  // const listed = useCallback(() => {
  //   return count;
  // }, []);

  const listed = useCallback(() => {
    return count;
  }, [count]);

  console.dir(listed());

  return (
    <div>
      <button onClick={() => setCount(e => e+1)}>{count}+1</button>
    </div>
  )
}
