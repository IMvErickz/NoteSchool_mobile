import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { ChevronsLeft } from 'lucide-react-native'
import { Link } from "expo-router";
import { Input } from "../../components/Input/Input";

export default function NewNote() {
    return (
        <View className="w-full h-full flex flex-col items-center justify-end bg-zinc-800 space-y-20">
            <View className="w-full flex items-center justify-center">
                <Text className="text-greenote-600 text-6xl font-bold text-center">Crie sua nova nota</Text>
            </View>
            <View className="w-full flex flex-col items-center justify-center px-4 space-y-12">
                <View className="w-full flex flex-col items-center justify-center space-y-4">
                    <Input placeholder="Título" />
                    <Input placeholder="Descrição" />
                </View>
                <TouchableOpacity className="bg-greenote-600 w-full h-12 rounded-lg flex items-center justify-center">
                    <Text className="text-2xl font-semibold">Enviar</Text>
                </TouchableOpacity>
            </View>
            <View className="w-full flex items-start justify-end px-2 pt-32 pb-4">
                <Link href={'/notes'} asChild>
                    <TouchableOpacity>
                        <ChevronsLeft color="#04D361" size={48} />
                    </TouchableOpacity>
                </Link>
            </View>
        </View >
    )
}