import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { CardNotes } from "../../components/Cards/Notes";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Link } from "expo-router";


export default function Notes() {

    const { bottom, top } = useSafeAreaInsets()

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
                <View className="w-full h-max flex items-center justify-center space-y-8">
                    <CardNotes id="Test" />
                </View>
            </ScrollView>
        </View>
    )
}