"use client";

import { cn } from "@/lib/utils";
import { useCreatorSidebar } from "@/store/use-creator-sidebar";
import { ReactNode, useEffect } from "react";
import { useMediaQuery } from "usehooks-ts";

interface ConatinerProps {
  children: ReactNode;
}

export const Container = ({ children }: ConatinerProps) => {
  const { collapsed, onCollapse, onExpanded } = useCreatorSidebar();
  const matches = useMediaQuery(`(max-width: 1024px)`);
  useEffect(() => {
    if (matches) {
      onCollapse();
    } else {
      onExpanded();
    }
  }, [matches, onCollapse, onExpanded]);

  return (
    <div
      className={cn("flex-1", collapsed ? "ml-[70px]" : "ml-[70px] lg:ml-60")}
    >
      {children}
    </div>
  );
};
