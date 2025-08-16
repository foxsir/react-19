'use client'

import {lazy, Suspense, useEffect} from "react";

function Up() {
  useEffect(() => {
    console.log('up')
  }, []);
  return <div>Up</div>
}
function Down() {
  useEffect(() => {
    console.log('down')
  }, []);
  return <div>Down</div>
}

export default function Lazy() {
  const SomeComponent = lazy(() => import('./some-component'))

  return (
    <>
      <Up />
      <Suspense fallback={'loading'}>
        <SomeComponent />
      </Suspense>
      <Down />
    </>
  )
}
