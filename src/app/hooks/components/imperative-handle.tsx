import {RefObject, useImperativeHandle, useRef} from "react";

interface PP {
  value: () => void;
  focus: () => void;
  scrollIntoView: () => void
}

function MyInput({ ref, ...props }: {ref: RefObject<PP | null>}) {
  const inputRef = useRef<HTMLInputElement>(null);

  useImperativeHandle(ref, () => {
    return {
      value: () => inputRef.current?.value,
      focus() {
        inputRef.current?.focus();
      },
      scrollIntoView() {
        inputRef.current?.scrollIntoView();
      },
    };
  }, []);

  return <input {...props} ref={inputRef} />;
}

export default function ImperativeHandle() {
  const ref = useRef<PP | null>(null);

  return (
    <div className={'grid grid-cols-1 gap-4'}>
      <div>useImperativeHandle 是 React 中的一个 Hook，它能让你自定义由 ref 暴露出来的句柄。</div>
      <MyInput ref={ref}></MyInput>

      <button onClick={() => alert(ref.current?.value())}>get value</button>
    </div>
  )
}
