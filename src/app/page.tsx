'use client'

import {Button} from "@heroui/react";
import Link from "next/link";

export default function Home() {
  return (
    <div
      className="font-sans grid grid-cols-1 gap-4">
      <Link href={'/hooks'} className={'!block !w-[100%]'}>
        <Button className={'w-full'}>useHooks</Button>
      </Link>
      <Link href={'/components'} className={'!block !w-[100%]'}>
        <Button className={'w-full'}>React Components</Button>
      </Link>
      <Link href={'/apis'} className={'!block !w-[100%]'}>
        <Button className={'w-full'}>React APIs</Button>
      </Link>
    </div>
  );
}
