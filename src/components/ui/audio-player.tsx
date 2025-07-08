import { useEffect, useRef, useState } from "react";
import { Slider } from "./slider";
import { PauseCircleIcon, PlayCircleIcon } from "lucide-react";

export default function AudioPlayer({
  audio,
  className,
}: {
  audio: string;
  className: string;
}) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isLoading, setIsLoading] = useState(true); // default true

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleLoadedMetadata = () => {
      setDuration(audio.duration);
    };

    const handleCanPlayThrough = () => {
      setIsLoading(false); // audio siap
    };

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
    };

    const handleEnded = () => {
      setCurrentTime(0);
      setIsPlaying(false);
    };

    audio.addEventListener("loadedmetadata", handleLoadedMetadata);
    audio.addEventListener("canplaythrough", handleCanPlayThrough);
    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
      audio.removeEventListener("canplaythrough", handleCanPlayThrough);
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("ended", handleEnded);
    };
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      audio.play();
      setIsPlaying(true);
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="w-full flex items-center gap-2">
      {/* Kontrol Play / Pause */}
      <button
        onClick={togglePlay}
        disabled={isLoading}
        className="cursor-pointer disabled:cursor-not-allowed"
      >
        {isPlaying ? (
          <PauseCircleIcon className="w-6 h-6" />
        ) : (
          <PlayCircleIcon className="w-6 h-6" />
        )}
      </button>

      {/* Slider */}
      {isLoading ? (
        <p className="text-muted-foreground text-sm">Memuat audio...</p>
      ) : (
        <Slider
          value={[currentTime]}
          max={duration}
          step={0.1}
          onValueChange={(val) => setCurrentTime(val[0])}
          onValueCommit={(val) => {
            const newTime = val[0];
            const audio = audioRef.current;
            if (audio) audio.currentTime = newTime;
          }}
          className={`flex-1 ${className}`}
        />
      )}

      {/* Durasi */}
      <span className="text-sm text-muted-foreground">
        {formatTime(currentTime)} / {formatTime(duration)}
      </span>

      {/* Audio Element (terpisah) */}
      <audio ref={audioRef} preload="auto">
        <source src={audio} type="audio/mpeg" />
        Browser tidak mendukung audio.
      </audio>
    </div>
  );
}

function formatTime(time: number): string {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
    2,
    "0"
  )}`;
}
