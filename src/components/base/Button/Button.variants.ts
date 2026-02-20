import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  "w-max inline-flex items-center justify-center gap-2 cursor-pointer disabled:cursor-not-allowed transition-all duration-300 ease-out whitespace-nowrap rounded",
  {
    variants: {
      variant: {
        primary:
          "border border-indigo-500 bg-indigo-500 hover:bg-indigo-600 text-white disabled:bg-gray-200 disabled:border-gray-200",
        secondary:
          "border border-gray-300 bg-white hover:bg-gray-50 disabled:bg-gray-200 disabled:border-gray-200",
      },
      size: {
        small: "text-xs px-2.5 py-1",
        regular: "text-sm px-5 py-1.5",
        large: "text-base px-6 py-2",
      },
      widthFull: {
        true: "w-full",
        false: "",
      },
      shape: {
        "semi-round": "rounded-sm",
        pill: "rounded-full min-w-20",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "regular",
      widthFull: false,
    },
  }
);
