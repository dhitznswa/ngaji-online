import { Card, CardContent } from "./ui/card";
import { CopyIcon, PlayCircleIcon, Share2Icon } from "lucide-react";
import type { AyatType } from "@/global";
import { useAudioContext } from "@/hooks/AudioFile";
import { Badge } from "./ui/badge";

export default function AyatList({ ayats }: { ayats: AyatType[] }) {
  const { setUrl, setLabel, url } = useAudioContext();
  return (
    <>
      {ayats.map((ayat, i) => (
        <Card key={i} className="mb-4">
          <CardContent>
            <div className="w-full flex justify-between items-center">
              <div className="">
                <span className="w-10 h-10 flex items-center justify-center rounded-full border border-yellow-600 text-yellow-600 font-bold">
                  {ayat.nomorAyat}
                </span>
              </div>
              <div className="flex justify-end gap-3 items-center">
                <Badge
                  variant="outline"
                  onClick={() => {
                    if (url === ayat.audio["05"]) return;
                    setUrl(ayat.audio["05"]);
                    setLabel(`Ayat ke ${ayat.nomorAyat}`);
                  }}
                >
                  <PlayCircleIcon /> Play
                </Badge>
                <CopyIcon className="w-5 h-5" />
                <Share2Icon className="w-5 h-5" />
              </div>
            </div>
            <div className="w-full my-10">
              <h1 className="text-2xl md:text-4xl text-end">{ayat.teksArab}</h1>
            </div>
            <div className="w-full space-y-3">
              <p className="md:text-base text-muted-foreground">
                {ayat.teksLatin}
              </p>
              <p className="md:text-base">{ayat.teksIndonesia}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </>
  );
}
