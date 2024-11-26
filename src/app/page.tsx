import Header from "@/components/header";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      <Header />
      <MaxWidthWrapper className="p-5">
        <div className="fixed -z-30 bg-gradient-to-b from-primary/30 to-background h-screen w-screen left-0 top-0"></div>
        <div className="flex justify-center items-center flex-col text-center my-5 p-20">
          <h1 className="font-bold text-6xl mb-5">
            Welcome to <span className="text-primary">Spectra store</span> Where
            Quality Meets Style!
          </h1>
          <p className="text-muted-foreground">
            Clear Vision, Exceptional Style - Explore Our Bestsellers
          </p>
          <div className="flex gap-4 mt-10">
            <Link href="/products">
              <Button>Eplore Products</Button>
            </Link>
            <Button variant={"outline"}>Explore for women</Button>
          </div>
        </div>
        <SectionHeading
          heading={"What we provide"}
          subHeading="Thats what we provide for your eyes not for u"
        />
        <div className=""></div>
      </MaxWidthWrapper>
    </main>
  );
}
