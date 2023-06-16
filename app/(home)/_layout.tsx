import { Box, NativeBaseProvider, Text } from "native-base";
import Home from ".";

export default function Layout() {
  return (
    <NativeBaseProvider>
      <Text>Layout</Text>
      <Home />
      <Text>Tabs</Text>
    </NativeBaseProvider>
  );
}
