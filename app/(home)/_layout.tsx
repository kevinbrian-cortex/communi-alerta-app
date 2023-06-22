import { Box, NativeBaseProvider, Text, View } from "native-base";
import Home from ".";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Layout() {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
        borderWidth: 1,
      }}
    >
      <Home />
      <Text>Tabs</Text>
    </View>
  );
}
