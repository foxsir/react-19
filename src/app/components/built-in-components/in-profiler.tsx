import {Profiler} from "react";

function App () {
  return <div>Please check it out in the development tools</div>
}


export default function InProfiler() {
  const onRender = (
    id: string,
    phase: 'mount' | 'update' | "nested-update",
    actualDuration: number,
    baseDuration: number,
    startTime: number,
    commitTime: number,
  ) => {
    console.dir({
      id, phase, actualDuration, baseDuration, startTime, commitTime
    })
  }


  return (
    <>
      <Profiler id="App-InProfiler" onRender={onRender}>
        <App />
      </Profiler>
    </>
  )
}
