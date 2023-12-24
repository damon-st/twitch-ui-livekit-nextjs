import { WifiOff } from "lucide-react";
interface OffileVideoProps {
  username: string;
}

export const OfflineVideo = ({ username }: OffileVideoProps) => {
  return (
    <div className="h-full flex flex-col space-y-4 justify-center items-center">
      <WifiOff className="h-10 w-10 text-muted-foreground" />
      <p className="text-muted-foreground capitalize">{username} is offline</p>
    </div>
  );
};
