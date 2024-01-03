/* eslint-disable @next/next/no-img-element */
// pages/[uid].js
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Loader from "@/components/loader";
import Header from "@/components/navbar";
import Hero from "@/components/herosection";
import Footer from "@/components/footer";

const NewsDetailPage = () => {
  const router = useRouter();
  const { uid } = router.query;
  const [article, setArticle] = useState(null);

  useEffect(() => {
    // Fetch data based on UID from local storage or any other source
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const selectedArticle = storedFavorites.find((fav) => fav.uid === uid);
    setArticle(selectedArticle);
  }, [uid]);

  if (!article) {
    return <Loader />;
  }

  return (
    <>
      <Header />
      <div className=" bg-white bg-opacity-75 flex items-center justify-center min-h-screen">
        <div className="bg-white p-8 rounded-lg max-w-2xl overflow-y-auto relative">
          <h2 className="text-2xl font-bold mb-4">{article.title}</h2>
          <img
            src={
              article.urlToImage ||
              "https://api.slingacademy.com/public/sample-photos/1.jpeg"
            }
            alt={article.title}
            className="w-full h-64 object-cover mb-4"
          />
          <p className="text-gray-700">
            {article.description}
            {article.content}
          </p>
          <a
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline mt-4 block"
          >
            Read Full Article
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NewsDetailPage;
