"use client";
import { cn } from "@/lib/utils";
import { useSidebar } from "@/store/use-sidebar";
import { ReactNode } from "react";
import { ToggleSkeleton } from "./toggle";
import { RecommendedSkelenton } from "./recommended";
import { useIsClient } from "usehooks-ts";
import { FollowingSkeleton } from "./following";
interface WrapperProps {
  children: ReactNode;
}

export const Wrapper = ({ children }: WrapperProps) => {
  const { collapsed } = useSidebar();
  const isClient = useIsClient();

  if (!isClient) {
    return (
      <aside className="fixed left-0 flex flex-col w-60 h-full bg-background border-r border-[#2D2E35] Z-50 transition-all duration-200">
        <ToggleSkeleton />
        <FollowingSkeleton />
        <RecommendedSkelenton />
      </aside>
    );
  }

  return (
    <aside
      className={cn(
        "fixed left-0 flex flex-col w-60 h-full bg-background border-r border-[#2D2E35] Z-50 transition-all duration-200",
        collapsed && "w-[70px] "
      )}
    >
      {children}
    </aside>
  );
};
