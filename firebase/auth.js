// import { createContext, useContext, useEffect, useState } from "react";
// import { onAuthStateChanged, signOut as authSignOut } from "firebase/auth";
// import { auth } from "./firebase";
// const AuthUserContext = createContext({
//   authUser: null,
//   isLoading: true,
// });

// export default function useFirebaseAuth() {
//   const [authUser, setAuthUser] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);

//   const authStateChaged = async (user) => {
//     setIsLoading(true);
//     if (!user) {
//       setAuthUser(null);
//       setIsLoading(false);
//       return;
//     }
//     setAuthUser({
//       uid: user.uid,
//       username: user.displayName,
//       email: user.email,
//     });
//     setIsLoading(false);
//   };
//   const SignOut = () => {
//     authSignOut(auth).then(() => {
//       setAuthUser(null);
//       setIsLoading(false);
//     });
//   };

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, authStateChaged);
//     return () => unsubscribe();
//   }, []);

//   return {
//     authUser,
//     isLoading,
//     setAuthUser,
//     SignOut,
//   };
// }

// export const AuthUserProvider = ({ children }) => {
//   const auth = useFirebaseAuth();
//   return (
//     <AuthUserContext.Provider value={auth}>{children}</AuthUserContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthUserContext);
