import { db } from '../firebase/config'
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    signOut
} from 'firebase/auth'
import { useState, useEffect } from 'react'

export const useAuthentication = () => {
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)
    const [cancelled, setCancelled] = useState(false)

    const auth = getAuth()

    function checkIfIsCancelled() {
        if (cancelled) {
            return true
        }
        return false
    }

    async function createUser(data) {
        if (checkIfIsCancelled());

        setLoading(true)
        setError(null)

        try {
            const { user } = await createUserWithEmailAndPassword(
                auth,
                data.email,
                data.password
            )
            await updateProfile(user, {
                displayName: data.nome
            })
            setLoading(false)
            return user
        }catch(error){
            console.error("Erro ao criar usuário",error.message)
            

            let systemErrorMessage

            if(error.message.includes('Password')){
                systemErrorMessage = "A senha precisa conter ao menos 6 caracteres."
            }else if(error.message.includes('email-already')){
                systemErrorMessage = "E-mail já cadastrado em nosso sistema."
            }else if(error.message.includes('invalid-email')){
                systemErrorMessage = "E-mail inválido, digite corretamente."    
            }else if(error.message.includes('weak-password')){
                systemErrorMessage = "Senha fraca, tente uma senha mais forte."      
            }else{
                systemErrorMessage = "Ocorreu um erro, tente novamente mais tarde."
            }

            setLoading(false)
            setError(systemErrorMessage)
        }
    }

    const login = async (data) =>{
        checkIfIsCancelled()

        setLoading(true)
        setError(null)

        try{
            await signInWithEmailAndPassword(
                auth,
                data.email,
                data.password
            )
            setLoading(false)
        }catch(error){
            console.error(error.message)
            console.table(typeof error.message)

            let systemErrorMessage

            if(error.message.includes('invalid-login-credentials')){
                systemErrorMessage = "Este usuário não tem registro em nossos sistemas"
            }else if(error.message.includes('wrong-password')){
                systemErrorMessage = "Existe algum erro em suas credenciais de login"
            }else{
                systemErrorMessage = "Ocorreu um erro, tente novamente mais tarde."
            }

            setLoading(false)
            setError(systemErrorMessage)
        }
    }

    const logout = ()=>{
        checkIfIsCancelled()
        signOut(auth)
    }

    useEffect(() =>{
        return () => setCancelled(true)
    }, [])

    return{
        auth,
        createUser,
        error,
        loading,
        logout,
        login
    }
}