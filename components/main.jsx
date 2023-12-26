/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import Loader from "./loader";
import { BsCheckLg } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { FaHeart, FaList, FaRegHeart, FaTh } from "react-icons/fa";
import ArticleModal from "./ArticleModal";
import { useFavorites } from "@/firebase/FavoritesContext";

const Main = () => {
  // State for managing favorites
  const { favorites, toggleFavorite } = useFavorites();

  // State for managing article data and loading state
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  // State for managing the number of articles to show
  const [articlesToShow, setArticlesToShow] = useState(10);

  // State for managing the selected article and mobile view
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [isMobileView, setIsMobileView] = useState(false);

  // State for managing the view mode (list or grid)
  const [isGridView, setIsGridView] = useState(false);

  // Function to open the article modal
  const openArticleModal = (article) => {
    if (!isMobileView) {
      setSelectedArticle(article);
    }
  };

  // Function to close the article modal
  const closeArticleModal = () => {
    setSelectedArticle(null);
  };

  // Fetching data on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://newsapi.org/v2/everything?q=Apple&from=2023-12-01&sortBy=popularity&apiKey=9f1906d5ce6d4d6ca9d1d51c25c0d3c8"
        );
        const result = await response.json();
        setData(result.articles);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();

    // Check if the screen width is less than a certain threshold (e.g., 768 pixels)
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 768);
    };

    // Initial check
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Function to load more articles
  const handleLoadMore = () => {
    setArticlesToShow((prev) => prev + 10);
  };

  // Function to toggle between grid and list view
  const toggleGridView = () => {
    setIsGridView((prev) => !prev);
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          {/* Toggle Button for Grid View */}
          <div className="flex justify-end p-3">
            <button
              onClick={toggleGridView}
              className="text-blue-500 hover:text-blue-700 flex items-center gap-2"
            >
              {isGridView ? (
                <>
                  <span>Switch to List View</span>
                  <FaList className="w-6 h-6" />
                </>
              ) : (
                <>
                  <span>Switch to Grid View</span>
                  <FaTh className="w-6 h-6" />
                </>
              )}
            </button>
          </div>

          {Array.isArray(data) && data.length > 0 ? (
            <div
              className={`container mx-auto ${
                isGridView
                  ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4"
                  : ""
              }`}
            >
              {data.slice(0, articlesToShow).map((post, index) => (
                <div key={index} className={`${isGridView ? "p-2" : ""}`}>
                  <div className="rounded-xl overflow-hidden shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px]">
                    <div
                      onClick={() => openArticleModal(post)}
                      className={`w-full ${isGridView ? "" : "flex"}`}
                    >
                      <img
                        src={
                          post.urlToImage ||
                          "https://api.slingacademy.com/public/sample-photos/1.jpeg"
                        }
                        alt="title"
                        className="w-full object-cover object-center h-auto md:h-52 lg:h-48 xl:h-60"
                      />
                      <div className="p-5">
                        <h2 className="font-roboto font-bold text-xl text-dark-soft md:text-2xl lg:text-[28px]">
                          {post.title}
                        </h2>
                        <p className="text-dark-light text-lg mb-3">
                          {post.description}
                        </p>
                        <div className="flex justify-between flex-wrap items-center mt-6">
                          <div className="flex items-center gap-x-2 md:gap-x-2.5">
                            <img
                              src="https://picsum.photos/50"
                              alt="post profile"
                              className="w-9 h-9 md:w-10 md:h-10 rounded-full"
                            />

                            <div className="flex flex-col">
                              <h4 className="font-bold italic text-dark-soft text-sm md:text-base">
                                {post.author}
                              </h4>
                              <div className="flex items-center gap-x-2">
                                <span
                                  className={`${
                                    post.author ? "bg-[#36B37E]" : "bg-red-500"
                                  } w-fit bg-opacity-20 p-1.5 rounded-full`}
                                >
                                  {post.verified ? (
                                    <BsCheckLg className="w-1.5 h-1.5 text-[#36B37E]" />
                                  ) : (
                                    <AiOutlineClose className="w-1.5 h-1.5 text-red-500" />
                                  )}
                                </span>
                                <span className="italic text-dark-light text-xs md:text-sm">
                                  {post.verified ? "Verified" : "Unverified"}{" "}
                                  writer
                                </span>
                              </div>
                            </div>
                          </div>
                          <p className="font-bold text-dark-light italic text-sm mt-3">
                            {new Date(post.publishedAt).getDate()}{" "}
                            {new Date(post.publishedAt).toLocaleString(
                              "default",
                              {
                                month: "long",
                              }
                            )}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-end p-3">
                      <button
                        onClick={() => toggleFavorite(post)}
                        className="text-red-500 hover:text-red-700"
                      >
                        {favorites.some((fav) => fav.title === post.title) ? (
                          <FaHeart className="w-6 h-6" />
                        ) : (
                          <FaRegHeart className="w-6 h-6" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex justify-center items-center h-screen">
              <p className="text-xl font-bold text-gray-500">
                No posts available.
              </p>
            </div>
          )}
        </>
      )}

      {/* Article Modal */}
      <ArticleModal
        isOpen={selectedArticle !== null}
        onClose={closeArticleModal}
        article={selectedArticle}
      />

      {/* Load More Button */}
      {Array.isArray(data) && articlesToShow < data.length && (
        <div className="flex mt-5 justify-center align-center">
          <button
            onClick={handleLoadMore}
            className="mt-5  m-3 lg:mt-0 border-2 border-blue-500 px-6 py-2 rounded-full text-blue-500 font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300"
          >
            Load More
          </button>
        </div>
      )}
    </>
  );
};

export default Main;
