import { cn } from "@/lib/utils";
import { type VariantProps, cva } from "class-variance-authority";
import { Loader } from "lucide-react";

const spinerVariants = cva("text-muted-foreground animate-spin", {
  variants: {
    size: {
      default: "h-4 w-4",
      sm: "h-2 w-2",
      lg: "h-6 w-6",
      icon: "h-10 w-10",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

interface SpinerProps extends VariantProps<typeof spinerVariants> {}

export const Spinner = ({ size }: SpinerProps) => {
  return <Loader className={cn(spinerVariants({ size }))} />;
};
