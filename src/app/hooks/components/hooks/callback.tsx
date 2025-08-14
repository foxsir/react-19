import {memo, useCallback, useEffect, useMemo, useState} from "react";

const ShippingForm = ({onSubmit}: {onSubmit: () => number}) => {
  const v = useMemo(() => onSubmit(), [onSubmit]);
  return (
    <div className={'flex justify-start'}>
      {v}
    </div>
  )
}

// 如果id不变则不会渲染
const MemoFn = memo(function MemoFn({state}: {state: string}) {
  fetch('https://mcs.snssdk.com/list').then(res => res.json()).then(() => {
    console.dir(state);
  })
  return state;
});

export default function Callback() {
  const [state, setState] = useState(0);
  const [id, setId] = useState<number>(0);
  let a = 1;

  // 当id更新时handleSubmit并不更新
  // 当state更新时handleSubmit也会重置
  const handleSubmit = useCallback(() => {
    return a += 1;
  }, [state])

  return (
    <div className={`grid grid-cols-1 gap-2 ${state}`}>
      <div>{state}</div>
      <div>{id}</div>
      <div><button onClick={() => setState(state + 1)}>++</button></div>
      <div><button onClick={() => setId(id+1)}>updateID</button></div>
      <ShippingForm onSubmit={handleSubmit}></ShippingForm>
      <MemoFn state={'10'} />
    </div>
  )
}
