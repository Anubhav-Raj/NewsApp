import React, { useEffect, useState } from "react";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useRouter } from "next/router";
import { useAuth } from "@/firebase/auth";
import { FaHeart } from "react-icons/fa";
import { useFavorites } from "@/firebase/FavoritesContext";
import FavoritesDropdown from "./dropDownList";

const Header = () => {
  const [favoritesDropdown, setFavoritesDropdown] = useState(false);
  const { authUser, inLoading, SignOut } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!inLoading && !authUser) {
      router.push("/login");
    }
  }, [authUser, inLoading]);

  const favoritesDropdownHandler = () => {
    setFavoritesDropdown((curState) => !curState);
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

        <div className="flex flex-row items-center mt-4 lg:mt-0">
          {!authUser ? (
            <Link
              href="/login"
              className="mb-4 lg:mb-0 border-2 border-blue-500 px-6 py-2 rounded-full text-blue-500 font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300"
            >
              Sign in
            </Link>
          ) : (
            <>
              {/* Conditionally render username in larger screens */}
              <p className="hidden lg:block mb-4 lg:mb-0 hover:bg-dark-hard hover:text-black px-4 py-2 text-black lg:text-dark-soft">
                <strong>{authUser.username}</strong>
              </p>
              <button
                onClick={SignOut}
                className="mb-4 lg:mb-0 border-2 border-blue-500 px-6 py-2 rounded-full text-blue-500 font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300"
              >
                Logout
              </button>
            </>
          )}
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
        </div>
        <div className="absolute top-24 sm:top-20 lg:top-16 right-80 sm:right-96 lg:right-1/4">
          {favoritesDropdown && <FavoritesDropdown />}
        </div>
      </header>
    </section>
  );
};

export default Header;
