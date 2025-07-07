import type { SuratType } from "@/global";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { BookOpenTextIcon, MapPinIcon } from "lucide-react";
import { Link } from "react-router";
import { Skeleton } from "./ui/skeleton";

export default function SuratList({
  surats,
  loading,
}: {
  surats: SuratType[];
  loading: boolean;
}) {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
      {loading ? (
        Array.from({ length: 6 }).map((_, index) => (
          <Link to="#" key={index}>
            <SuratCardSkeleton />
          </Link>
        ))
      ) : surats.length === 0 ? (
        <p className="">Surat tidak ada</p>
      ) : (
        surats.map((surat) => (
          <Link to={`detail/${surat.nomor}`} key={surat.nomor}>
            <SuratCard surat={surat} />
          </Link>
        ))
      )}
    </div>
  );
}

function SuratCardSkeleton() {
  return (
    <>
      <Card>
        <CardContent className="grid grid-cols-4 gap-3 px-1">
          <div className="col-span-1 flex justify-center items-center">
            <span className="text-lg font-bold text-yellow-600">
              <Skeleton className="w-6 h-6" />
            </span>
          </div>
          <div className="col-span-2">
            <div className="-space-y-1">
              <h3 className="text-lg font-bold">
                <Skeleton className="w-full h-4" />
              </h3>
              <span className="text-muted-foreground line-clamp-1">
                <Skeleton className="w-full h-4" />
              </span>
            </div>
            <div className="mt-2 flex items-center gap-2">
              <Badge variant="secondary">
                <MapPinIcon /> <Skeleton className="w-8 h-4" />
              </Badge>
              <Badge variant="outline">
                <BookOpenTextIcon /> <Skeleton className="w-8 h-4" />
              </Badge>
            </div>
          </div>
          <div className="col-span-1 flex items-center justify-center">
            <span className="text-xl font-bold text-cgreen">
              <Skeleton className="w-8 h-8" />
            </span>
          </div>
        </CardContent>
      </Card>
    </>
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
              <span
                className="text-muted-foreground line-clamp-1"
                title={surat.arti}
              >
                ({surat.arti})
              </span>
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
