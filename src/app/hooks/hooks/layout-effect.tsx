import {useLayoutEffect, useState} from "react";

export default function LayoutEffect() {
  const [state, setStat] = useState(0);

  useLayoutEffect(() => {
    const rect = document.getElementById('useLayoutEffect')?.getBoundingClientRect();
    const dom = document.getElementById('useLayoutEffect');
    if(dom) {
      dom.innerHTML = JSON.stringify(rect);
    }
  }, [state]);
  return (
    <div>
      <div id={'useLayoutEffect'} className={'h-10'}></div>
      <button onClick={() => setStat(state => state + 1)}>reacquire bounding rect</button>
    </div>
  )
}
