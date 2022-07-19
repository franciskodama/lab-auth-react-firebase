import React, { createContext, useContext, useEffect, useState } from 'react'
import { onAuthStateChanged, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, signOut, sendPasswordResetEmail } from 'firebase/auth'
import { auth } from '../firebase'


const AuthContext = createContext({})

export const useUserContext = () => useContext(AuthContext)

const AuthProvider = ({children}) => {

    const [currentUser, setCurrentUser ] = useState(null)
    const [loading, setLoading] = useState()
    const [error, setError] = useState('')
 
    useEffect(() => {
      setLoading(true)
      const unsubscribe = onAuthStateChanged(auth, user => {
        user ? setCurrentUser(user) : setCurrentUser(null)
        setError('')
        setLoading(false)
      })
      return unsubscribe
    }, [])

    const signUpUser = (email, password) => {
        setLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
          return updateProfile(auth.currentUser, {
            displayName: name,
          })
        }).then((res) => console.log(res))
          .catch((err) => setError(err.message))
          .finally(() => setLoading(false))
    }

    const signInUser = (email, password) => {
      setLoading(true)
      signInWithEmailAndPassword(auth, email, password)
        .then((res) => console.log(res))
        .catch((err) => setError(err))
        .finally(() => setLoading(false))
    }

    const logOutUser = () => {
      signOut(auth)
    }

    const forgotPassword = (email) => {
      return sendPasswordResetEmail(auth, email)
    }   

    const contextValue = {
        currentUser,
        loading,
        error,
        signUpUser,
        signInUser,
        logOutUser,
        forgotPassword,
    }

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider 

