declare module "*.css";

export interface SuratType {
  nomor: number;
  nama: string;
  namaLatin: string;
  jumlahAyat: number;
  tempatTurun: string;
  arti: string;
  deskripsi: string;
  audio: {
    "01": string;
    "02": string;
    "03": string;
    "04": string;
    "05": string;
    "06": string;
  };
}
