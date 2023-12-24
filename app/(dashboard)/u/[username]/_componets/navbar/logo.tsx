import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const font = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const Logo = () => {
  return (
    <Link href="/">
      <div className="flex items-center gap-x-4 hover:opacity-75 transition lg:mr-0 lg:shrink">
        <div className="bg-white rounded-full p-1 mr-10 shrink-0">
          <Image src="/spooky.svg" alt="game" height="32" width="32" />
        </div>
        <div className={cn("hidden lg:block", font.className)}>
          <p className="text-lg font-semibold">GameReady</p>
          <p className="text-lg text-muted-foreground">Creator Dashboard</p>
        </div>
      </div>
    </Link>
  );
};
