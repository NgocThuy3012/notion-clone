import Image from "next/image";

export const Heroes = () => {
  return (
    <div className=" flex flex-col items-center justify-center max-w-5xl">
      <div className=" flex items-center">
        <div className=" relative w-[300px] h-[300px]">
          <Image
            src="/documents.png"
            fill
            alt="Documents"
            className=" object-contain dark:hidden"
          />
          <Image
            src="/documents-dark.png"
            fill
            alt="Documents"
            className=" object-contain dark:block hidden"
          />
        </div>
        <div className=" h-[400px] w-[400px] relative hidden md:block">
          <Image
            src="/reading.png"
            alt="reading"
            fill
            className=" object-contain dark:hidden"
          />
          <Image
            src="/reading-dark.png"
            alt="reading"
            fill
            className=" object-contain hidden dark:block"
          />
        </div>
      </div>
    </div>
  );
};
