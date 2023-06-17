import { Box, Button, Center, Heading, Text } from "native-base";
import { useRouter } from "expo-router";

export default function () {
  const router = useRouter();
  return (
    <Center width={"full"} height={"full"}>
      <Box>
        <Heading>Communi Alerta App</Heading>
        <Text>Hello welcome to Communi Alerta App</Text>
        <Button
          onPress={() => {
            router.push("/login");
          }}
        >
          Click Me Dude
        </Button>
      </Box>
    </Center>
  );
}
