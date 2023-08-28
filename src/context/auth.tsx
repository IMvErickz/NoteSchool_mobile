import { ReactNode, createContext, useState } from "react";

import * as SecureStore from 'expo-secure-store'

interface AuthContextProps {
    id: string
    handleUserId: (userId: string) => void
    userId: string
}

interface ProviderProps {
    children: ReactNode
}

export const AuthContext = createContext({} as AuthContextProps)

export function AuthProvider({ children }: ProviderProps) {

    const [id, setId] = useState('')
    const [userId, setUserId] = useState('')

    function handleUserId(userId: string) {
        setId(userId)
    }

    async function setUserStorage() {
        await SecureStore.setItemAsync('id', id)
    }

    setUserStorage()

    async function getUserId() {
        const response = await SecureStore.getItemAsync('id')
        setUserId(response as string)
    }

    getUserId()

    return (
        <AuthContext.Provider value={{ id, userId, handleUserId }}>
            {children}
        </AuthContext.Provider>
    )
}