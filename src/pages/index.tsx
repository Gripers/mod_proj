import Catalog from "@/components/Catalog/Catalog";
import Header from "@/components/Header/Header";
import Jackets from "@/components/Jackets/Jackets";
import More from "@/components/More/More";
import Sct from "@/components/Sct/Sct";
import SctSec from "@/components/SctSec/SctSec";
import Sneakers from "@/components/Sneakers/Sneakers";
import Woman from "@/components/Woman/Woman";

export default function Home() {
  return (
    <>
      <Header />
      <Catalog />
      <Jackets />
      <Sneakers />
      <Woman />
      <More />
      <Sct />
      <SctSec />
    </>
  );
}
