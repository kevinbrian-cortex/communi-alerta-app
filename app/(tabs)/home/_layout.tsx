import { Slot, Stack } from "expo-router";
import Appbar from "../../../components/appbar";

export default () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
};
