import { useActionState } from "react";
import {Button, Input} from "@heroui/react";

async function increment(previousState: number, formData: FormData) {
  return new Promise<number>((resolve) => {
    setTimeout(() => {
      resolve(previousState + 1);
    }, 1000);
  });
}

export default function ActionState() {
  const [state, formAction, isPending] = useActionState(increment, 0);

  return (
    <form action={formAction}>
      {state}
      {isPending ? 'pending...' : 'complete'}
      <Input type="hidden" name="itemID" value={"ID:100"} />
      <Button type="submit">+1</Button>
    </form>
  );
}
