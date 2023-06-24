import { Tabs } from "expo-router";
import Appbar from "../../components/appbar";

export default () => {
  return (
    <Tabs>
      <Tabs.Screen name="home" options={{ header: () => <Appbar /> }} />
      <Tabs.Screen name="nearby" />
    </Tabs>
  );
};
