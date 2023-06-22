import { Ionicons } from "@expo/vector-icons";
import { Box, HStack, Icon, IconButton, Image } from "native-base";

const Appbar = () => {
  return (
    <HStack
      bg="blue.500"
      justifyContent="space-between"
      alignItems="center"
      w="full"
    >
      <HStack p={3}>
        <Box p={1} bg={"white"} borderRadius={50}>
          <Image
            source={require("../assets/images/logo.png")}
            w={10}
            h={10}
            alt="Logo"
          />
        </Box>
      </HStack>

      <HStack alignItems="center">
        <IconButton
          icon={<Icon size="10" as={Ionicons} name="menu" color="white" />}
        />
      </HStack>
    </HStack>
  );
};

export default Appbar;
