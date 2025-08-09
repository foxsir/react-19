'use client'

import ActionState from "@/app/hooks/components/action-state";
import Callback from "@/app/hooks/components/callback";
import Memo from "@/app/hooks/components/memo";
import Context from "@/app/hooks/components/context";
import DeferredValue from "@/app/hooks/components/deferred-value";
import ImperativeHandle from "@/app/hooks/components/imperative-handle";

export default function Page() {
  return (
    <div className="grid grid-cols-1 gap-4 divide-y-1 divide-gray-300">
      <div className={'grid grid-cols-1 gap-2'}>
        <h1 className={'text-2xl'}>useActionState</h1>
        <ActionState />
      </div>
      <div className={'grid grid-cols-1 gap-2'}>
        <h1 className={'text-2xl'}>useCallback</h1>
        <Callback />
      </div>
      <div className={'grid grid-cols-1 gap-2'}>
        <h1 className={'text-2xl'}>useMemo</h1>
        <Memo />
      </div>
      <div className={'grid grid-cols-1 gap-2'}>
        <h1 className={'text-2xl'}>useContext</h1>
        <Context />
      </div>
      <div className={'grid grid-cols-1 gap-2'}>
        <h1 className={'text-2xl'}>useDeferredValue</h1>
        <DeferredValue />
      </div>
      <div className={'grid grid-cols-1 gap-2'}>
        <h1 className={'text-2xl'}>useImperativeHandle</h1>
        <ImperativeHandle />
      </div>
    </div>
  );
}
