import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function Layout() {
    return (
        <>
            <StatusBar style="auto" />

            <Stack screenOptions={{
                headerShown: false,
                contentStyle: {
                    backgroundColor: 'transparent'
                },
                animation: 'flip',
            }} >
                <Stack.Screen name="index" />
                <Stack.Screen name="notes/index" />
                <Stack.Screen name="new/index" />
                <Stack.Screen name="auth/index" />

            </Stack></>
    )
}