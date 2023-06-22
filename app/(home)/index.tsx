import { useRouter } from "expo-router";
import {
  Box,
  Button,
  Container,
  HStack,
  Heading,
  Icon,
  IconButton,
  Image,
  Text,
} from "native-base";
import { Ionicons } from "@expo/vector-icons";

export default function () {
  const router = useRouter();
  return (
    <Box
      width={"full"}
      height={"full"}
      borderColor={"red.100"}
      borderStyle={"dotted"}
      borderWidth={1}
    >
      {/* Top bar */}
      <HStack
        bg="blue.500"
        justifyContent="space-between"
        alignItems="center"
        w="full"
      >
        <HStack>
          <Box p={3}>
            <Image
              source={require("../../assets/images/logo.png")}
              w={10}
              h={10}
              alt="Logo"
            />
          </Box>
        </HStack>

        <HStack alignItems="center">
          <IconButton
            icon={<Icon size="xl" as={Ionicons} name="menu" color="white" />}
          />
        </HStack>
      </HStack>

      {/* Header */}
      <HStack
        bg="blue.500"
        justifyContent="space-between"
        alignItems="center"
        w="full"
        p={5}
      >
        <Heading textAlign={"center"} color={"white"}>
          Juntos por uma comunidade segura
        </Heading>
      </HStack>


    </Box>
  );
}
