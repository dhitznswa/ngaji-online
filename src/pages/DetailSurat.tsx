import AyatList from "@/components/ayat-list";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import AudioPlayer from "@/components/ui/audio-player";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { useAudioContext } from "@/hooks/AudioFile";
import {
  ArrowBigLeft,
  BookOpenTextIcon,
  MapPinIcon,
  PlayCircleIcon,
} from "lucide-react";
import { useEffect } from "react";
import { Link, useLoaderData } from "react-router";

export default function DetailSurat() {
  const data = useLoaderData();
  const { setUrl, setLabel } = useAudioContext();

  useEffect(() => {
    setUrl(data.audioFull["05"]);
    setLabel("Full");
  }, []);

  return (
    <div className="pt-20 relative">
      <div className="w-full">
        <Link
          to="/surat"
          className="flex items-center gap-2 text-base font-semibold hover:text-cgreen transition-colors duration-200"
        >
          <ArrowBigLeft /> Kembali ke beranda
        </Link>
      </div>
      <div className="mt-4">
        <Card className="w-full border-l-8 border-t-0 border-r-0 border-b-0 border-cgreen">
          <CardContent>
            <div className="w-full flex items-center justify-between gap-2">
              <div className="nama__surat">
                <h1 className="text-2xl md:text-4xl font-bold">
                  {data.namaLatin}
                </h1>
                <span className="text-base mt-2 text-muted-foreground">
                  ({data.arti})
                </span>
              </div>
              <div className="flex items-center gap-2 justify-end">
                <h1 className="text-4xl text-cgreen">{data.nama}</h1>
              </div>
            </div>

            <div className="mt-8 flex items-center gap-2">
              <Badge variant="secondary">
                <MapPinIcon /> {data.tempatTurun}
              </Badge>
              <Badge variant="outline">
                <BookOpenTextIcon /> {data.jumlahAyat} ayat
              </Badge>
              <Badge
                variant="outline"
                className="cursor-pointer hover:bg-cgreen/10"
                onClick={() => {
                  setUrl(data.audioFull["05"]);
                  setLabel("Full");
                }}
              >
                <PlayCircleIcon /> Play
              </Badge>
            </div>
            <div className="mt-3">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="1">
                  <AccordionTrigger className="text-sm">
                    Lihat selengkapnya
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    <p
                      className="text-justify text-muted-foreground"
                      dangerouslySetInnerHTML={{ __html: data.deskripsi }}
                    />
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </CardContent>
        </Card>

        <div className="mt-16 mb-10">
          <h2 className="text-xl font-bold">Ayat-ayat</h2>
          <div className="w-full h-[550px] mt-5 overflow-y-scroll p-4 scrollbar-custom">
            <AyatList ayats={data.ayat} />
          </div>
        </div>
      </div>

      <AudioPlayer />
    </div>
  );
}
