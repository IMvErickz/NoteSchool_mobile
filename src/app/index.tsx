import { View, Text, TouchableOpacity } from "react-native";
import { Link } from "expo-router";

export default function Home() {
    return (
        <View className="w-full h-full flex items-center justify-center bg-zinc-800 space-y-20">
            <View className='w-full flex items-center justify-center'>
                <Text className="text-6xl font-bold text-greenote-600">NoteSchool</Text>
            </View>
            <View className="w-full flex flex-col items-center justify-center space-y-12">
                <Text className="text-4xl font-bold text-greenote-600">
                    Saudações estudante
                </Text>
                <Text className="text-xl text-white text-center">
                    Aqui na <Text className=" text-xl font-semibold text-greenote-600">NoteSchool</Text>, você tem acesso a diversas ferramentas
                    para auxiliar nosso seus estudos, entre com a sua conta,
                    ou crie uma se for novo e venha conferir!
                </Text>
            </View>
            <View className="w-full flex items-center justify-center px-4">
                <Link href='/auth' asChild>
                    <TouchableOpacity className="bg-greenote-600 w-96 h-12 rounded-lg flex items-center justify-center">
                        <Text className="text-white text-2xl font-bold">
                            Login
                        </Text>
                    </TouchableOpacity>
                </Link>
            </View>
        </View>

    )
}