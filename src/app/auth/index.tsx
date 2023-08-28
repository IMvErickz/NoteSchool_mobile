import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { Input } from "../../components/Input/Input";
import { Link, useRouter } from "expo-router";
import { api } from "../../lib/axios";
import { useContext, useState } from "react";
import { AuthContext, AuthProvider } from "../../context/auth";

interface InfoProps {
    id: string
}

export default function Auth() {

    const { userId, handleUserId } = useContext(AuthContext)

    const [email, setEmail] = useState('')
    const [info, setInfo] = useState<InfoProps[]>([])

    const router = useRouter()

    async function handleUser() {
        await api.get(`/user/${email}`)
            .then(function (response) {
                setInfo(response.data.user)
                info.map(e => handleUserId(e.id))
                console.log(userId)
                router.push('/notes')

            })
    }

    return (
        <View className="bg-zinc-800 w-full h-full flex flex-col items-center justify-center space-y-12">
            <View>
                <Text className="text-greenote-600 text-6xl font-bold">Login</Text>
            </View>
            <View className="w-full px-4 flex flex-col items-center justify-center space-y-4">
                <Input placeholder="Email" onChangeText={setEmail} />
                <Input placeholder="Senha" />
            </View>
            <View className="w-full flex items-center justify-center px-4">
                {/* <Link href='/notes' asChild> */}
                <TouchableOpacity onPress={handleUser} className="bg-greenote-600 w-full h-12 rounded-lg flex items-center justify-center">
                    <Text className="text-2xl font-semibold">Entrar</Text>
                </TouchableOpacity>
                {/* </Link> */}
            </View>
            <View className="w-full flex items-center justify-center">
                <Text className="text-white text-lg">Ainda não tem conta?
                    <Link href='/register'>
                        <Text className="underline">Cadastre-se aqui</Text>
                    </Link>
                </Text>
            </View>
        </View>
    )
}