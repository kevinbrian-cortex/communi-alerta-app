import { Ionicons } from "@expo/vector-icons";
import { Tabs, useRouter } from "expo-router";
import { Center, Icon, IconButton } from "native-base";
import Appbar from "../../components/appbar";
import HeaderBar from "../../components/nearby/headerBar";

const customTabButton = (props: any) => {
  //router
  const router = useRouter();

  return (
    <Center bottom={5}>
      <IconButton
        onPress={() => {
          router.push("/alert");
        }}
        alignContent={"center"}
        alignItems={"center"}
        justifyContent={"center"}
        borderRadius={"full"}
        _icon={{
          color: "red.500",
          bgColor: "white",
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
      header: () => <HeaderBar />,
      tabBarIcon: () => null,
      tabBarLabel: () => null,
      tabBarButton: customTabButton,
      presentation: "containedModal",
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
