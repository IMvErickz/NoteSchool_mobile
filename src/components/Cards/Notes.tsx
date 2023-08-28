import { Link } from "expo-router";
import { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

interface NotesProps {
    id: string
    title: string
    createdAt: string
}

export function CardNotes(props: NotesProps) {
    return (
        <Link href={`/info/${props.id}`} asChild>
            <TouchableOpacity className="py-2">
                <View className="bg-slate-600 w-80 h-20 rounded-lg flex flex-col items-center justify-center">
                    <View>
                        <Text className="text-white text-2xl font-semibold">{props.title}</Text>
                    </View>
                    <View>
                        <Text className="text-white text-xl">Data de Criação: {props.createdAt}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </Link>
    )
}