import { Link } from "expo-router";
import { View, Text, TouchableOpacity } from "react-native";

interface NotesProps {
    id: string
}

export function CardNotes(props: NotesProps) {
    return (
        <Link href={`/info/${props.id}`} asChild>
            <TouchableOpacity>
                <View className="bg-slate-600 w-80 h-20 rounded-lg flex flex-col items-center justify-center">
                    <View>
                        <Text className="text-white text-2xl font-semibold">Titúlo</Text>
                    </View>
                    <View>
                        <Text className="text-white text-xl">Data de Criação: 26/08/2023</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </Link>
    )
}