"use client";

import Button from "@/app/UI/Buttons/Button";
import { useRouter } from "next/navigation";

export default function Projects() {
  const router = useRouter();

  return (
    <div className="flex justify-start items-start p-10">
      <Button
        design="relative h-14 w-44 flex"
        text="Back"
        click={() => {
          router.back();
        }}
      />
      <div></div>
    </div>
  );
}
