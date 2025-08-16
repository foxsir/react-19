import {memo, Suspense, use, useState} from "react";
import {Input} from "@heroui/react";
import FetchData from "@/app/hooks/fetch-data";

const App = memo(function App({q}: {q: string}) {
  const ob = use(FetchData(q))

  return (
    <div className={'grid grid-cols-1 gap-2'}>
      {JSON.stringify(ob)}
    </div>
  )
})

export default function InSuspense() {
  const [w, setW] = useState('');
  return (
    <>
      <Input onInput={e => setW(e.target.value)} placeholder={'typing search keyword'} />
      <Suspense fallback={'loading...'}>
        {w && <App q={w} />}
      </Suspense>
    </>
  )
}
