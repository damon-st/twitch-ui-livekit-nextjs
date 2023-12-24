"use client";

import { useTracks } from "@livekit/components-react";
import { Participant, Track } from "livekit-client";
import { useRef, useState, useEffect } from "react";
import { FullScreenControl } from "./fullscream-crontroll";
import { useEventListener } from "usehooks-ts";
import { VolumentControl } from "./volument-control";

interface LiveVideoProps {
  participant: Participant;
}

export const LiveVideo = ({ participant }: LiveVideoProps) => {
  const videRef = useRef<HTMLVideoElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const [isFullScrenn, setIsFullScrenn] = useState(false);
  const [volumen, setVolumen] = useState(0);

  const onVolumenChange = (value: number) => {
    setVolumen(+value);
    if (videRef?.current) {
      videRef.current.muted = value === 0;
      videRef.current.volume = +value * 0.01;
    }
  };

  const toggleMute = () => {
    const isMuted = volumen === 0;
    setVolumen(isMuted ? 50 : 0);
    if (videRef?.current) {
      videRef.current.muted = !isMuted;
      videRef.current.volume = isMuted ? 0.5 : 0;
    }
  };

  useEffect(() => {
    onVolumenChange(0);
  }, []);

  const toggleFullScreen = () => {
    if (isFullScrenn) {
      document.exitFullscreen();
      setIsFullScrenn(false);
    } else if (wrapperRef?.current) {
      wrapperRef?.current.requestFullscreen();
      setIsFullScrenn(true);
    }
  };

  const handleFullScrenChange = () => {
    const isCurrentlyFullScrenn = document.fullscreenElement != null;
    setIsFullScrenn(isCurrentlyFullScrenn);
  };

  useEventListener("fullscreenchange", handleFullScrenChange, wrapperRef);

  useTracks([Track.Source.Camera, Track.Source.Microphone])
    .filter((track) => track.participant.identity === participant.identity)
    .forEach((track) => {
      if (videRef.current) {
        track.publication.track?.attach(videRef.current);
      }
    });

  return (
    <div ref={wrapperRef} className="relative h-full flex ">
      <video ref={videRef} width="100%" />
      <div className="absolute top-0 h-full w-full opacity-0 hover:opacity-100 hover:transition-all">
        <div className="absolute bottom-0 flex h-14 w-full items-center justify-between bg-gradient-to-r from-neutral-900 px-4">
          <VolumentControl
            onChange={onVolumenChange}
            value={volumen}
            onToggle={toggleMute}
          />
          <FullScreenControl
            isFullScrenn={isFullScrenn}
            onToogle={toggleFullScreen}
          />
        </div>
      </div>
    </div>
  );
};
