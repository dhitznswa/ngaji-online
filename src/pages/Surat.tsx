import SuratList from "@/components/surat-list";
import { Input } from "@/components/ui/input";
import ScrollToTop from "@/components/ui/scroll-top";
import type { SuratType } from "@/global";
import { useEffect, useState } from "react";

export default function Surat() {
  const [surat, setSurat] = useState<SuratType[]>([]);
  const [searchValue, setSearchValue] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const title = document.querySelector("title") as HTMLTitleElement;
    title.innerText = `Surat-surat | Ngaji Online - @dhitznswa`;
  }, []);

  useEffect(() => {
    const localSurat = localStorage.getItem("surat");
    if (!localSurat) return;

    const originalSurat = JSON.parse(localSurat);

    if (searchValue.length === 0) {
      setSurat(originalSurat);
      setIsLoading(false);
      return;
    }

    const query = searchValue.toLowerCase();
    const filteredSurat = originalSurat.filter(
      (s: SuratType) =>
        s.namaLatin.toLowerCase().includes(query) ||
        s.nomor.toString().includes(query) ||
        s.arti.toLowerCase().includes(query)
    );
    setSurat(filteredSurat);
    setIsLoading(false);
  }, [searchValue]);

  useEffect(() => {
    async function getSurat() {
      const response = await fetch("https://equran.id/api/v2/surat");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();

      return data.data;
    }

    async function localSuratCheck() {
      setIsLoading(true);
      const localSurat = localStorage.getItem("surat");

      if (localSurat) {
        setTimeout(() => {
          setSurat(JSON.parse(localSurat));
          setIsLoading(false);
        }, 3000);
      } else {
        const resSurat = await getSurat();
        localStorage.setItem("surat", JSON.stringify(resSurat));
        setSurat(resSurat);
        setIsLoading(false);
      }
    }

    localSuratCheck();
  }, []);

  return (
    <>
      <ScrollToTop />
      <div className="py-20">
        <h1 className="text-3xl md:text-5xl font-bold title-highlight text-center">
          Cari Surat Quran
        </h1>
        <p className="text-base md:text-lg text-center mt-3">
          Cari berdasarkan surat, nomor, atau arti
        </p>

        <div className="w-full mt-20">
          <div className="search_surat max-w-lg">
            <Input
              placeholder="Cari surat, nomor, atau arti"
              onChange={(e) => {
                setIsLoading(true);
                setSearchValue(e.target.value);

                if (e.target.value.length === 0) {
                  // If the input is empty, reset to the original surat list
                  const localSurat = localStorage.getItem("surat");
                  if (localSurat) {
                    setSurat(JSON.parse(localSurat));
                  }
                  return;
                }
              }}
            />
          </div>
          <div className="list_surat mt-4">
            <SuratList surats={surat} loading={isLoading} />
          </div>
        </div>
      </div>
    </>
  );
}
