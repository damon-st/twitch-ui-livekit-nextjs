import { ReactNode, Suspense } from "react";
import { Navbar } from "./_components/navbar";
import { SideBar, SideBarSkeleton } from "./_components/sidebar";
import { Container } from "./_components/container";

export default function BrowseLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      <div className="flex h-full pt-20">
        <Suspense fallback={<SideBarSkeleton />}>
          <SideBar />
        </Suspense>
        <Container>{children}</Container>
      </div>
    </>
  );
}
