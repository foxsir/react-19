import {useEffect} from "react";

export default function SomeComponent() {
  useEffect(() => {
    console.log('some')
  }, []);
  return <div>SomeComponent</div>
}
