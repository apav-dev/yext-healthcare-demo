import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const formatDate = (date: string) => {
  const newDate = new Date(date);
  const month = newDate.getMonth() + 1;
  const day = newDate.getDate();
  const year = newDate.getFullYear();
  return `${month}/${day}/${year}`;
};

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
