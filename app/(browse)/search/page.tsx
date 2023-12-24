import { redirect } from "next/navigation";
import { ResultSkeleton, Results } from "./_components/results";
import { Suspense } from "react";

interface SearchPageProps {
  searchParams: {
    term?: string;
  };
}

export default function SearchPage({ searchParams }: SearchPageProps) {
  if (!searchParams.term) {
    return redirect("/");
  }
  return (
    <div className="h-full p-8 max-w-screen-2xl max-auto">
      <Suspense fallback={<ResultSkeleton />}>
        <Results term={searchParams.term} />
      </Suspense>
    </div>
  );
}
