import { Link, useLocalSearchParams } from "expo-router";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Info() {
    const { id } = useLocalSearchParams()

    return (
        <View className="w-full h-full flex flex-col items-center justify-end bg-zinc-800 space-y-56">
            <View className="w-full flex items-center justify-center">
                <Text className="text-greenote-600 text-6xl font-bold">Título da nota</Text>
            </View>
            <View className="w-full flex items-center justify-center py-8">
                <Text className="text-white text-2xl text-center">
                    {id}
                </Text>
            </View>
            <View className="w-full flex flex-col px-4 space-y-4 py-8">
                <Link href={'/notes'} asChild>
                    <TouchableOpacity className="bg-slate-500 w-full h-12 rounded-lg flex items-center justify-center">
                        <Text className="text-white font-semibold text-2xl">
                            Voltar
                        </Text>
                    </TouchableOpacity>
                </Link>
                <TouchableOpacity className="bg-red-500 w-full h-12 rounded-lg flex items-center justify-center">
                    <Text className="text-white font-semibold text-2xl">
                        Excuir nota
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}