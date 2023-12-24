import { getSelfByUsername } from "@/lib/auth.service";
import { redirect } from "next/navigation";
import { ReactNode } from "react";
import { Navbar } from "./_componets/navbar";
import { SideBar } from "./_componets/sidebar";
import { Container } from "./_componets/container";

interface CreatorLayoutProps {
  params: { username: string };
  children: ReactNode;
}

export default async function CreatorLayout({
  children,
  params,
}: CreatorLayoutProps) {
  const self = await getSelfByUsername(params.username);
  if (!self) {
    redirect("/");
  }
  return (
    <>
      <Navbar />
      <div className="flex h-full pt-20">
        <SideBar />
        <Container>{children}</Container>
      </div>
    </>
  );
}
