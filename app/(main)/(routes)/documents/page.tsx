"use client";

import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/clerk-react";
import { PlusCircle } from "lucide-react";
import Image from "next/image";

const DocumentsPage = () => {
  const { user } = useUser();

  return (
    <div className=" h-full flex flex-col items-center justify-center space-y-4">
      <Image
        alt=""
        src={"/empty.png"}
        height="300"
        width="300"
        className=" dark:hidden"
      />
      <Image
        alt=""
        src={"/empty-dark.png"}
        height="300"
        width="300"
        className=" dark:block hidden"
      />
      <h2 className=" text-lg font-medium">
        Welcome to {user?.username} &apos;s Jotion
      </h2>
      <Button>
        <PlusCircle className=" h-4 w-4 mr-2" />
        Creat a note
      </Button>
    </div>
  );
};

export default DocumentsPage;
