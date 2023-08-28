import { View, Text, TouchableOpacity } from "react-native";
import { Input } from "../../components/Input/Input";
import { api } from "../../lib/axios";

export default function Register() {
    return (
        <View className="w-full h-full flex flex-col items-center justify-center bg-zinc-800 space-y-12">
            <View className="w-full flex items-center justify-center">
                <Text className="text-greenote-600 font-bold text-6xl">
                    Cadastro
                </Text>
            </View>
            <View className="w-full flex flex-col items-center justify-center px-4 space-y-4">
                <Input placeholder="Nome" />
                <Input placeholder="Email" />
                <Input placeholder="Senha" />
            </View>
            <View className="w-full flex items-center justify-center px-4">
                <TouchableOpacity className="bg-greenote-600 w-full h-12 flex items-center justify-center rounded-lg">
                    <Text className="text-2xl font-semibold text-white">
                        Cadastrar
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}