"use client";

import { cn } from "@/lib/utils";
import { useCreatorSidebar } from "@/store/use-creator-sidebar";
import { ReactNode } from "react";

interface WrapperProps {
  children: ReactNode;
}

export const Wrapper = ({ children }: WrapperProps) => {
  const { collapsed } = useCreatorSidebar();
  return (
    <aside
      className={cn(
        "fixed left-0 flex flex-col w-[70px] lg:w-60 transition-all duration-200 h-full bg-background border-r border-[#2D2E35] z-50",
        collapsed && "lg:w-[70px]"
      )}
    >
      {children}
    </aside>
  );
};