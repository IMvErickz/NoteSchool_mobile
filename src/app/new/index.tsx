import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { ChevronsLeft } from 'lucide-react-native'
import { Link, useRouter } from "expo-router";
import { Input } from "../../components/Input/Input";
import { api } from "../../lib/axios";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/auth";

export default function NewNote() {

    const { userId } = useContext(AuthContext)

    const [Title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const router = useRouter()


    async function handleCreateNote() {
        await api.post(`/note/${userId}`, {
            Title,
            description
        })
        router.push(`/notes/${userId}`)
    }

    return (
        <View className="w-full h-full flex flex-col items-center justify-end bg-zinc-800 space-y-20">
            <View className="w-full flex items-center justify-center">
                <Text className="text-greenote-600 text-6xl font-bold text-center">Crie sua nova nota</Text>
            </View>
            <View className="w-full flex flex-col items-center justify-center px-4 space-y-12">
                <View className="w-full flex flex-col items-center justify-center space-y-4">
                    <Input placeholder="Título" onChangeText={setTitle} />
                    <Input placeholder="Descrição" onChangeText={setDescription} />
                </View>
                <TouchableOpacity onPressIn={handleCreateNote} className="bg-greenote-600 w-full h-12 rounded-lg flex items-center justify-center">
                    <Text className="text-2xl font-semibold">Enviar</Text>
                </TouchableOpacity>
            </View>
            <View className="w-full flex items-start justify-end px-2 pt-32 pb-4">
                <Link href={`/notes/${userId}`} asChild>
                    <TouchableOpacity>
                        <ChevronsLeft color="#04D361" size={48} />
                    </TouchableOpacity>
                </Link>
            </View>
        </View >
    )
}