import React, { useState } from "react";
import Link from "next/link";
import { FaHeart } from "react-icons/fa";
import { useFavorites } from "@/firebase/FavoritesContext";
import FavoritesDropdown from "./dropDownList";

const Header = () => {
  const [favoritesDropdown, setFavoritesDropdown] = useState(false);

  const favoritesDropdownHandler = () => {
    setFavoritesDropdown(!favoritesDropdown);
  };

  const { favorites } = useFavorites();
  const favoriteCount = favorites.length;

  return (
    <section className="sticky top-0 left-0 right-0 z-50 bg-white">
      <header className="container mx-auto px-5 py-4 flex justify-between items-center flex-wrap">
        <Link href="/">
          <img
            className="w-full mb-4 lg:mb-0 lg:w-auto"
            src="./Logo.svg"
            alt="users are reading articles"
          />
        </Link>

        <button
          onClick={favoritesDropdownHandler}
          className="px-4 py-2 flex gap-x-1 items-center"
        >
          <span className="relative">
            <FaHeart style={{ fontSize: "2em" }} />
            {favoriteCount > 0 && (
              <div className="absolute top-[-8px] right-[-12px] bg-red-500 text-white rounded-full px-2">
                {favoriteCount}
              </div>
            )}
          </span>
        </button>

        <div className="absolute top-24 sm:top-20 lg:top-16 right-80 sm:right-96 lg:right-1/4">
          {favoritesDropdown && <FavoritesDropdown />}
        </div>
      </header>
    </section>
  );
};

export default Header;
