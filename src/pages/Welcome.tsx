import { Link } from "react-router";

export default function Welcome() {
  return (
    <>
      <div className="w-full h-dvh flex justify-center items-center">
        <div className="max-w-3xl w-full text-center">
          <h1 className="text-3xl md:text-5xl font-bold title-highlight">
            Al Quran Digital Bahasa Indonesia
          </h1>
          <p className="text-base md:text-lg max-w-md md:max-w-2xl mx-auto mt-8">
            Baca, dengarkan, dan pelajari Al-Quran dengan terjemahan bahasa
            Indonesia, audio berkualitas tinggi, dan tafsir yang lengkap
          </p>
          <div className="flex justify-center mt-8">
            <Link
              to={"/surat"}
              className="mt-8 inline-flex items-center justify-center px-5 py-2 text-base font-medium text-white bg-cgreen rounded-md hover:bg-cgreen/90 transition-colors"
            >
              Mari mulai
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
