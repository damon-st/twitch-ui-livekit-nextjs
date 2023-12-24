import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="h-full flex flex-col space-y-4 items-center justify-center text-muted-foreground ">
      <h1 className="text-4xl">404</h1>
      <p>We counldt find page</p>
      <Button variant="secondary" asChild>
        <Link href="/">Go to home</Link>
      </Button>
    </div>
  );
}
