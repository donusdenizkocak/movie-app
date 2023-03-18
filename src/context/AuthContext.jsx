import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import React, { createContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { auth } from '../auth/firebase'
import { toastErrorNotify, toastSuccessNotify } from '../helpers/ToastNotify'

//export const {Provider} = createContext()    //bu şekilde yazarsak aşagıda sadece provider  ile sarmallayabiliriz
export const AuthContext = createContext()
//*with custom hook
// export const useAuthContext = () =>{
//   return useContext(AuthContext)
// }

 const AuthContextProvider = ({children}) => {
  const [currentUser, setCurrentUser] = useState("")
  const navigate = useNavigate()

  useEffect(() => {
    userObserver()
  }, [])
  

 const createUser = async(email,password,displayName) => {
   try {
    let userCredential= await createUserWithEmailAndPassword(auth, email, password)
    //*kullanıcı profilini güncellemek için kullanılan firebase metodu
   await  updateProfile(auth.currentUser, {
      displayName:displayName
    })
   toastSuccessNotify("Registered successfully!")
    navigate("/")
   } catch (error) {
    toastErrorNotify(error.message)
   }
 }

 //* https://console.firebase.google.com/
  //* => Authentication => sign-in-method => enable Email/password
  //! Email/password ile girişi enable yap

 const signIn = async(email,password) =>{          //? mevcut kullanıcının giriş yapması için kullanılan firebase metodu
try {
  await signInWithEmailAndPassword(auth, email, password);
  navigate("/");
  toastSuccessNotify("Logged in successfully!")
} catch (error) {
  toastErrorNotify(error.message)
}
 };

 const logOut =()=>{
  signOut(auth);
 };

const userObserver =()=>{
onAuthStateChanged(auth, (user) => {
  if (user) {
    const {email,displayName,photoURL} =user
    setCurrentUser({email,displayName,photoURL})
  } else {
   setCurrentUser(false)
  }
});
}
//* https://console.firebase.google.com/
  //* => Authentication => sign-in-method => enable Google
  //! Google ile girişi enable yap
  //* => Authentication => settings => Authorized domains => add domain
  //! Projeyi deploy ettikten sonra google sign-in çalışması için domain listesine deploy linkini ekle
const signUpProvider =()=>{
const provider = new GoogleAuthProvider();      //google giriş için kullanılan firebase metodu
signInWithPopup(auth, provider)      // açılır pencere ile giriş yapmak için methot
  .then((result) => {
    console.log(result)
    toastSuccessNotify("Logged in successfuly!")
  }).catch((error) => {
    console.log(error)
  });
}

 const values={createUser,signIn,logOut,currentUser,signUpProvider}


  return (
    <AuthContext.Provider value={values}>
      {children}
    </AuthContext.Provider>
  )
}
export default AuthContextProvider
