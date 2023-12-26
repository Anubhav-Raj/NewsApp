/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
// FavoritesDropdown.jsx
import React from "react";
import { useFavorites } from "@/firebase/FavoritesContext";
import Link from "next/link";

const FavoritesDropdown = () => {
  const { favorites } = useFavorites();

  return (
    <div className="relative font-[sans-serif] w-max mx-auto">
      <div className="absolute shadow-lg bg-white py-2 z-[1000] min-w-full rounded-lg w-[90vw] max-w-[410px] max-h-[500px] overflow-auto">
        {favorites.length > 0 ? (
          <ul className="divide-y">
            {favorites.map((article, index) => (
              <Link
                href={`/[uid]`}
                as={`/${article.uid}`}
                key={index}
                className="py-4 px-4 flex items-center hover:bg-gray-50 text-black text-sm cursor-pointer"
              >
                <img
                  src={
                    article.urlToImage ||
                    "https://api.slingacademy.com/public/sample-photos/1.jpeg"
                  }
                  className="w-12 h-12 rounded-full shrink-0"
                />
                <div className="ml-4 md:ml-6">
                  <h3 className="text-sm text-[#333] font-semibold">
                    {article.title}
                  </h3>

                  <p className="text-xs text-blue-500 leading-3 mt-2">
                    {new Date(article.publishedAt).getDate()}{" "}
                    {new Date(article.publishedAt).toLocaleString("default", {
                      month: "long",
                    })}
                  </p>
                </div>
              </Link>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No favorite articles yet.</p>
        )}
      </div>
    </div>
  );
};

export default FavoritesDropdown;
