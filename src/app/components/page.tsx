'use client'

import InProfiler from "@/app/components/built-in-components/in-profiler";
import InSuspense from "@/app/components/built-in-components/in-suspense";

export default function Page() {
  return (
    <div className="grid grid-cols-1 gap-4 divide-y-1 divide-gray-300">
      <div className={'grid grid-cols-1 gap-2'}>
        <h1 className={'text-2xl'}>Profiler</h1>
        <InProfiler />
      </div>
      <div className={'grid grid-cols-1 gap-2'}>
        <h1 className={'text-2xl'}>Suspense</h1>
        <InSuspense />
      </div>
    </div>
  )
}
