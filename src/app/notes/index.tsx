import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { CardNotes } from "../../components/Cards/Notes";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Link } from "expo-router";
import { useContext, useMemo, useState } from "react";
import { AuthContext } from "../../context/auth";
import { api } from "../../lib/axios";
import dayjs from 'dayjs'

interface NoteProps {
    id: string
    Title: string
    CreatedAt: string
}


export default function Notes() {

    const { bottom, top } = useSafeAreaInsets()

    const { userId } = useContext(AuthContext)

    console.log(userId)

    const [notes, setNotes] = useState<NoteProps[]>([])

    const notesCache = useMemo(async () => {
        await api.get(`/userNotes/${userId}`)
            .then(function (response) {
                setNotes(response.data.notes)
            })
    }, [])

    return (
        <View className="w-full h-full flex flex-col items-center justify-center bg-zinc-800">
            <ScrollView className="flex-1 py-20 gap-y-20 overflow-hidden" contentContainerStyle={{ paddingBottom: bottom, paddingTop: top }}>
                <View className="w-full flex items-center justify-center">
                    <Text className="text-greenote-600 text-6xl font-bold">
                        Notas
                    </Text>
                </View>
                <View className="w-full flex items-center justify-center px-4">
                    <Link href={'/new'} asChild>
                        <TouchableOpacity className="w-full bg-greenote-600 h-12 flex items-center justify-center rounded-lg">
                            <Text className="text-2xl font-semibold">Nova nota</Text>
                        </TouchableOpacity>
                    </Link>
                </View>
                <View className="w-full h-max flex items-center justify-center">
                    {notes.map(note => {
                        return (
                            <CardNotes
                                key={note.id}
                                title={note.Title}
                                id={note.id}
                                createdAt={dayjs(note.CreatedAt).format("D[/]MM[/]YYYY")}
                            />
                        )
                    })}
                </View>
            </ScrollView>
        </View>
    )
}