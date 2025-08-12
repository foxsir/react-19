'use client'

import {Button} from "@heroui/react";
import Link from "next/link";

export default function Home() {
  return (
    <div
      className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <Link href={'/hooks'} className={'!block !w-[100%]'}>
        <Button className={'w-full'}>useHooks</Button>
      </Link>
    </div>
  );
}
