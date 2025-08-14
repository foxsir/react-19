import {startTransition, useOptimistic, useState} from "react";

export default function Optimistic2() {
  const [count, setCount] = useState<{count: number; pending: boolean}>({count: 0, pending: false});
  const [optimisticCount, addOptimistic] = useOptimistic(
    count,
    (state, step: {count: number; pending: boolean}) => ({count: state.count + 1, pending: step.pending})
  );

  const handleClick = async () => {
    await new Promise<boolean>((resolve) => {
      setTimeout(() => {
        resolve(true)
      }, 1000)
    });

    startTransition(() => {
      setCount(state => ({count: state.count + 1, pending: false}))
    })
  };

  return (
    <div>
      <div>乐观计数：{optimisticCount.count} {String(optimisticCount.pending)}</div>
      <form action={() => {
        addOptimistic({count: 1, pending: true}); // 立即乐观更新

        startTransition(async () => {
          await handleClick().then();
        })
      }}>
        <button type={'submit'}>+1</button>
      </form>
    </div>
  );
}
