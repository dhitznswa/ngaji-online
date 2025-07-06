import type { SuratType } from "@/global";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { BookOpenTextIcon, MapPinIcon } from "lucide-react";
import { Link } from "react-router";

export default function SuratList({ surats }: { surats: SuratType[] }) {
  return (
    <div className="w-full grid grid-cols-3 gap-3">
      {surats.map((surat) => (
        <Link to={`surat/${surat.nomor}`} key={surat.nomor}>
          <SuratCard surat={surat} />
        </Link>
      ))}
    </div>
  );
}

function SuratCard({ surat }: { surat: SuratType }) {
  return (
    <>
      <Card>
        <CardContent className="grid grid-cols-4 gap-3 px-1">
          <div className="col-span-1 flex justify-center items-center">
            <span className="text-lg font-bold text-yellow-600">
              {surat.nomor}
            </span>
          </div>
          <div className="col-span-2">
            <div className="-space-y-1">
              <h3 className="text-lg font-bold">{surat.namaLatin}</h3>
              <span className="text-muted-foreground">({surat.arti})</span>
            </div>
            <div className="mt-2 flex items-center gap-2">
              <Badge variant="secondary">
                <MapPinIcon /> {surat.tempatTurun}
              </Badge>
              <Badge variant="secondary">
                <BookOpenTextIcon /> {surat.jumlahAyat} ayat
              </Badge>
            </div>
          </div>
          <div className="col-span-1 flex items-center justify-center">
            <span className="text-xl font-bold text-cgreen">{surat.nama}</span>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
