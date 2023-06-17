import { NativeBaseProvider } from "native-base";
import { Slot } from "expo-router";

export default function RootLayout() {
  return (
    <NativeBaseProvider>
      <Slot />
    </NativeBaseProvider>
  );
}
