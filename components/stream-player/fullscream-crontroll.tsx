"use client";
import { Maximize, Minimize } from "lucide-react";
import { Hint } from "../hint";

interface FullScreenControlProps {
  isFullScrenn: boolean;
  onToogle: () => void;
}

export const FullScreenControl = ({
  isFullScrenn,
  onToogle,
}: FullScreenControlProps) => {
  const Icon = isFullScrenn ? Minimize : Maximize;

  const label = isFullScrenn ? "Exit fullscreen" : "Enter fullscreen";

  return (
    <div className="flex items-center justify-center gap-4">
      <Hint asChild label={label}>
        <button
          onClick={onToogle}
          className="text-white p-1.5 hover:bg-white/10 rounded-lg"
        >
          <Icon className="w-5 h-5" />
        </button>
      </Hint>
    </div>
  );
};
