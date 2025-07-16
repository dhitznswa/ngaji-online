import { buttonVariants } from "@/components/ui/button";
import { Link } from "react-router";

export default function ErrorPage() {
  return (
    <div className="w-full h-dvh flex items-center justify-center">
      <div className="text-center space-y-8">
        <h1 className="text-xl md:text-3xl">
          Something went wrong, please try again later
        </h1>
        <Link to="/" className={buttonVariants({ variant: "outline" })}>
          Kembali beranda
        </Link>
      </div>
    </div>
  );
}
