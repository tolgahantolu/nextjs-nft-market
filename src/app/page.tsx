import { Hero, Navbar, AmazeNFT } from "../components";

export default function Home() {
  return (
    <main className="w-full min-h-screen py-[30px] bg-slate-50">
      <Navbar />
      <Hero />
      <AmazeNFT />
    </main>
  );
}
