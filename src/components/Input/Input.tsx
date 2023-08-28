import { TextInput, TextInputProps } from "react-native";

interface Props extends Readonly<TextInputProps> {
    placeholder: string
}

export function Input({ placeholder, ...rest }: Props) {
    return (
        <TextInput placeholder={placeholder} {...rest} className="bg-zinc-600 rounded-lg w-full h-12 p-2 text-white placeholder:text-xl placeholder:font-bold" />
    )
}