import { useTransition } from 'react';
import {Button} from "@heroui/react";

export default function TabButton({ action, children, isActive }) {
  const [isPending, startTransition] = useTransition();
  if (isActive) {
    return <b>{children}</b>
  }
  if (isPending) {
    return <b className="pending">{children}</b>;
  }
  return (
    <Button onClick={() => {
      startTransition(async () => {
        await action();
      });
    }}>
      {children}
    </Button>
  );
}
