import {
  Hero,
  Navbar,
  AmazeNFT,
  TopCollections,
  CollectionNFT,
} from "../components";

export default function Home() {
  return (
    <main className="w-full h-full min-h-screen py-[30px] bg-slate-50">
      <Navbar />
      <Hero />
      <AmazeNFT />
      <TopCollections />
      <CollectionNFT />
    </main>
  );
}
