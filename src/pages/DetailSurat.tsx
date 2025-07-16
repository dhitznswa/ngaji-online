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
import ScrollToTop from "@/components/ui/scroll-top";
import { useAudioContext } from "@/hooks/AudioFile";
import { cn } from "@/lib/utils";
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
    const title = document.querySelector("title") as HTMLTitleElement;
    title.innerText = `${data.namaLatin} | Ngaji Online - @dhitznswa`;
  }, [data.namaLatin]);

  useEffect(() => {
    setUrl(data.audioFull["05"]);
    setLabel("Full");
  }, []);

  return (
    <>
      <ScrollToTop />
      <div className="pt-20 pb-0">
        <div>
          <Card
            className={cn(
              "sticky top-1 z-[99] w-full border-t-8 border-cgreen shadow shadow-slate-500 transition-all duration-300 overflow-hidden ease-in-out"
            )}
          >
            <CardContent>
              <div className="w-full mb-4">
                <Link
                  to="/surat"
                  className="flex items-center gap-2 font-semibold hover:text-cgreen transition-colors duration-200"
                >
                  <ArrowBigLeft /> Kembali ke beranda
                </Link>
              </div>
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
              <div className="mt-4 flex items-center gap-2">
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
            </CardContent>
          </Card>
          <Card className="mt-6 p-1">
            <CardContent>
              <div>
                <div>
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
              </div>
            </CardContent>
          </Card>
          <div className="mt-14 mb-10">
            <div className="w-full">
              <AyatList ayats={data.ayat} />
            </div>
          </div>
        </div>

        <AudioPlayer />
      </div>
    </>
  );
}
