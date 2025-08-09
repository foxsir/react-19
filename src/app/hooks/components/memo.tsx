import {useEffect, useMemo, useState} from "react";

export default function Memo() {
  const [date, setDate] = useState(0);
  const [state, setState] = useState(0);
  const handleSubmit = useMemo(() => {
    return new Date().getTime();
  }, [state]);


  useEffect(() => {
    setDate(handleSubmit);
  }, []);


  return (
    <div className={'grid grid-cols-1 gap-2'}>
      <div>
        <button onClick={() => setDate(handleSubmit)}>get time: {date}</button>
      </div>
      <div>
        {state}
      </div>
      <div>
        <button onClick={() => setState(state + 1)}>update date</button>
      </div>
    </div>
  )
}
