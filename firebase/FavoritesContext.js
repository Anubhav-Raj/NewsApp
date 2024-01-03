import React, { createContext, useContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid"; // Import the uuid library

const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(() => {
    if (typeof localStorage !== "undefined") {
      const storedFavorites = localStorage.getItem("favorites");
      return storedFavorites ? JSON.parse(storedFavorites) : [];
    }
    return [];
  });

  // Update localStorage whenever favorites change
  useEffect(() => {
    if (typeof localStorage !== "undefined") {
      localStorage.setItem("favorites", JSON.stringify(favorites));
    }
  }, [favorites]);

  const toggleFavorite = (article) => {
    const isFavorite = favorites.some((fav) => fav.title === article.title);

    if (isFavorite) {
      // Remove from favorites
      const updatedFavorites = favorites.filter(
        (fav) => fav.title !== article.title
      );
      setFavorites(updatedFavorites);
    } else {
      // Add to favorites with a unique ID
      const updatedFavorites = [
        ...favorites,
        {
          ...article,
          uid: uuidv4(), // Generate a unique ID
        },
      ];
      setFavorites(updatedFavorites);
    }
  };

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error(
      "useFavorites must be used within a FavoritesContextProvider"
    );
  }
  return context;
};
