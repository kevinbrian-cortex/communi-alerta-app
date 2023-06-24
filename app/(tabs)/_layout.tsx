import { Tabs } from "expo-router";
import Appbar from "../../components/appbar";
import { Box, Center, Icon, IconButton, Text, View } from "native-base";
import { Ionicons } from "@expo/vector-icons";

const customTabButton = (props: any) => {
  return (
    <Center bottom={5}>
      <IconButton
        alignContent={"center"}
        alignItems={"center"}
        justifyContent={"center"}
        borderRadius={"full"}
        _icon={{
          color: "white",
          bgColor: "red.500",
          borderRadius: "full",
        }}
        icon={
          <Icon as={Ionicons} name="notifications-circle-outline" size={16} />
        }
      />
    </Center>
  );
};

//tabs array
const tabArr = [
  {
    route: "home",
    options: {
      header: () => <Appbar />,
      tabBarIcon: () => <Icon as={Ionicons} name="home" size={6} />,
      tabBarLabel: () => null,
    },
  },
  {
    route: "alert",
    options: {
      header: () => <Appbar />,
      tabBarIcon: () => null,
      tabBarLabel: () => null,
      tabBarButton: customTabButton,
    },
  },
  {
    route: "nearby",
    options: {
      header: () => null,
      tabBarIcon: () => <Icon as={Ionicons} name="map" size={6} />,
      tabBarLabel: () => null,
    },
  },
];

export default () => {
  return (
    <Tabs>
      {tabArr.map((tab) => (
        <Tabs.Screen
          key={tab.route}
          name={tab.route}
          options={{
            ...tab.options,
          }}
        />
      ))}
    </Tabs>
  );
};
