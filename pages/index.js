import { useRouter } from "next/router";
// import { useAuth } from "@/firebase/auth";
import Loader from "@/components/loader";
import Header from "@/components/navbar";
import Footer from "@/components/footer";
// import ArticleCard from "@/components/articalCard";
import Hero from "@/components/herosection";
import Main from "@/components/main";
export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Main />
      <Footer />
    </>
  );
}
