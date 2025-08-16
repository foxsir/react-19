'use client'

import Lazy from "@/app/apis/lazy";

export default function Page() {
  return (
    <div className="grid grid-cols-1 gap-4 divide-y-1 divide-gray-300">
      <div className={'grid grid-cols-1 gap-2'}>
        <h1 className={'text-2xl'}>Lazy Component</h1>
        <Lazy />
      </div>
    </div>
  )
}
