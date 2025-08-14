import { useTransition } from 'react';
import {Button} from "@heroui/react";

export default function TabButton({ action, children, isActive }) {
  const [isPending, startTransition] = useTransition();
  if (isActive) {
    return <Button>{children}</Button>
  }
  if (isPending) {
    return <Button variant={'ghost'} color={'warning'} disabled>{children}</Button>
  }
  return (
    <Button disabled={isPending} onPress={() => {
      startTransition(async () => {
        await action();
      });
    }}>
      {children}
    </Button>
  );
}
