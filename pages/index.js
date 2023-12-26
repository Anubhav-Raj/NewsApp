import { useRouter } from "next/router";
import { useAuth } from "@/firebase/auth";
import Loader from "@/components/loader";
import { useEffect } from "react";
import Header from "@/components/navbar";
import Footer from "@/components/footer";
// import ArticleCard from "@/components/articalCard";
import Hero from "@/components/herosection";
import Main from "@/components/main";
export default function Home() {
  const { authUser, inLoading, SignOut } = useAuth();

  const router = useRouter();

  useEffect(() => {
    if (!inLoading && !authUser) {
      router.push("/login");
    }
  }, [authUser, inLoading]);
  return !authUser ? (
    <Loader />
  ) : (
    <>
      <Header />
      <Hero />
      <Main />
      <Footer />
    </>
  );
}
