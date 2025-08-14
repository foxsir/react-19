'use client'

import ActionState from "@/app/hooks/components/hooks/action-state";
import Callback from "@/app/hooks/components/hooks/callback";
import Memo from "@/app/hooks/components/hooks/memo";
import Context from "@/app/hooks/components/hooks/context";
import DeferredValue from "@/app/hooks/components/hooks/deferred-value";
import ImperativeHandle from "@/app/hooks/components/hooks/imperative-handle";
import LayoutEffect from "@/app/hooks/components/hooks/layout-effect";
import Optimistic from "@/app/hooks/components/hooks/optimistic";
import Optimistic2 from "@/app/hooks/components/hooks/optimistic2";
import Reducer from "@/app/hooks/components/hooks/reducer";
import SyncExternalStore from "@/app/hooks/components/hooks/sync-external-store";
import TabContainer from "@/app/hooks/components/hooks/transition";

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
      <div className={'grid grid-cols-1 gap-2'}>
        <h1 className={'text-2xl'}>useLayoutEffect</h1>
        <LayoutEffect />
      </div>
      <div className={'grid grid-cols-1 gap-2'}>
        <h1 className={'text-2xl'}>useOptimistic</h1>
        <Optimistic />
        <hr className={'text-gray-400'}/>
        <Optimistic2 />
      </div>
      <div className={'grid grid-cols-1 gap-2'}>
        <h1 className={'text-2xl'}>useReducer</h1>
        <Reducer />
      </div>
      <div className={'grid grid-cols-1 gap-2'}>
        <h1 className={'text-2xl'}>useSyncExternalStore</h1>
        <SyncExternalStore />
      </div>
      <div className={'grid grid-cols-1 gap-2'}>
        <h1 className={'text-2xl'}>useTransition</h1>
        <TabContainer />
      </div>
    </div>
  );
}
