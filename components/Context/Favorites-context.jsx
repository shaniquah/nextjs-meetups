/* eslint-disable no-unused-vars */
import React, {
  useState, createContext, useEffect, useMemo,
} from "react";

const FavoritesContext = createContext({
  userFavorites: [],
  totalFavorites: 0,
  addFavorite: (meetupId) => { },
  removeFavorite: (meetupId) => { },
  meetupIsFavorite: (meetupId) => { },
  updateFavorites: (meetup) => { },
  addChangeListener: (listener) => { },
  removeChangeListener: (listener) => { },
});

export function FavoritesContextProvider({ children }) {
  const [userFavorites, setUserFavorites] = useState([]);
  const [changeListeners, setChangeListeners] = useState([]);
  /**
   * A function to manually refresh the favorites data.
   * It triggers a revalidation of the 'favorites' data using the mutate function.
   */
  const fetchFavorites = async () => {
    try {
      const response = await fetch("/api/meetups/Favourites");
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      return data.favorites || [];
    } catch (error) {
      return [];
    }
  };
  useEffect(() => {
    const fetchFavoritesData = async () => {
      try {
        const favorites = await fetchFavorites();
        if (favorites) {
          setUserFavorites(favorites);
        }
      } catch (error) {
        return error;
      }
    };

    fetchFavoritesData();
  }, []);
  const notifyChangeListeners = () => {
    changeListeners.forEach((listener) => {
      listener();
    });
  };
  const addFavoritesHandler = (meetup) => {
    setUserFavorites((prevUserFavorites) => [...prevUserFavorites, meetup]);
    notifyChangeListeners();
  };

  const updateFavoritesHandler = (meetups) => {
    setUserFavorites(meetups);
    notifyChangeListeners();
  };
  const removeFavoritesHandler = (meetupId) => {
    setUserFavorites((prevUserFavorites) => prevUserFavorites
      .filter((favorite) => favorite._id !== meetupId));
    notifyChangeListeners();
  };

  function ismeetupInFavorites(meetupId, userfavorites) {
    return userfavorites
    && Array.from(userfavorites)
      .some((meetup) => meetup && meetup._id === meetupId);
  }

  const addChangeListener = (listener) => {
    setChangeListeners((prevListeners) => [...prevListeners, listener]);
  };

  const removeChangeListener = (listener) => {
    setChangeListeners((prevListeners) => prevListeners.filter((l) => l !== listener));
  };

  const context = useMemo(
    () => ({
      favorites: userFavorites,
      totalFavorites: userFavorites.length,
      addFavorite: addFavoritesHandler,
      updateFavorites: updateFavoritesHandler,
      removeFavorite: removeFavoritesHandler,
      meetupIsFavorite: ismeetupInFavorites,
      addChangeListener,
      removeChangeListener,
    }),
    [
      userFavorites,
      addFavoritesHandler,
      updateFavoritesHandler,
      removeFavoritesHandler,
      ismeetupInFavorites,
      addChangeListener,
      removeChangeListener,
    ],
  );
  return (
    <FavoritesContext.Provider value={context}>
      {children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContext;
