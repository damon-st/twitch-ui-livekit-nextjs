import { StreamPlayer } from "@/components/stream-player";
import { getUserByUsername } from "@/lib/user.service";
import { currentUser } from "@clerk/nextjs";

interface CreatorPageProps {
  params: {
    username: string;
  };
}

export default async function CreatorPagew({ params }: CreatorPageProps) {
  const extenalUser = await currentUser();
  const user = await getUserByUsername(params.username);
  if (!user || user.externalUserId !== extenalUser?.id || !user.stream) {
    throw new Error("Unauthorized");
  }
  return (
    <div className="h-full">
      <StreamPlayer user={user} stream={user.stream} isFollowing />
    </div>
  );
}
