import { useAudioContext } from "@/hooks/AudioFile";
import { useEffect, useRef } from "react";

export default function AudioPlayer() {
  const { url, label } = useAudioContext();
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current && url) {
      audioRef.current.load(); // muat ulang audio dengan URL baru
      audioRef.current.play(); // mainkan audio
    }
  }, [url]);

  return (
    <div className="sticky w-full bottom-0">
      <div className="relative w-full text-black bg-white border border-slate-300 p-0 rounded-t-md">
        <div className="text-xs absolute -top-4 right-6 py-1 px-3 border border-slate-300 bg-white rounded-full cursor-pointer hover:bg-white/90">
          Audio {label}
        </div>
        <div className="flex justify-center py-3">
          <audio
            ref={audioRef}
            controls
            className="w-[80%] md:w-[50%] font-inter"
          >
            <source src={url || ""} type="audio/mpeg" />
            Browser tidak mendukung audio.
          </audio>
        </div>
      </div>
    </div>
  );
}
