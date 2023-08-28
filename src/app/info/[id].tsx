import { Link, useLocalSearchParams } from "expo-router";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useMemo, useState } from "react";
import { api } from "../../lib/axios";

interface NoteProps {
    id: string
    Title: string
    createdAt: string
    description: string
}

export default function Info() {
    const { id } = useLocalSearchParams()

    const [note, setNote] = useState<NoteProps[]>([])

    const noteMemory = useMemo(async () => {
        await api.get(`/note/${id}`)
            .then(function (response) {
                setNote(response.data.note)
            })
    }, [])

    async function DeleteNote() {
        await api.delete(`/deleteNote/${id}`)
    }

    return (
        <View className="w-full h-full flex flex-col items-center justify-end bg-zinc-800 space-y-56">
            {note.map(n => {
                return (
                    <>
                        <View key={n.id} className="w-full flex items-center justify-center">
                            <Text className="text-greenote-600 text-6xl font-bold">{n.Title}</Text>
                        </View>
                        <View className="w-full flex items-center justify-center py-8">
                            <Text className="text-white text-2xl text-center">
                                {n.description}
                            </Text>
                        </View>
                    </>
                )
            })}
            <View className="w-full flex flex-col px-4 space-y-4 py-8">
                <Link href={'/notes'} asChild>
                    <TouchableOpacity className="bg-slate-500 w-full h-12 rounded-lg flex items-center justify-center">
                        <Text className="text-white font-semibold text-2xl">
                            Voltar
                        </Text>
                    </TouchableOpacity>
                </Link>
                <TouchableOpacity onPress={DeleteNote} className="bg-red-500 w-full h-12 rounded-lg flex items-center justify-center">
                    <Text className="text-white font-semibold text-2xl">
                        Excuir nota
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}