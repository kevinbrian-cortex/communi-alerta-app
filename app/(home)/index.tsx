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
import Appbar from "../../components/appbar";
import MenuCards from "../../components/menu-cards";

export default function () {
  const router = useRouter();
  return (
    <Box
      width={"full"}
      height={"full"}
    >
      {/* Top bar */}
      <Appbar />

      {/* Header */}
      <HStack
        bg="blue.500"
        justifyContent="space-between"
        alignItems="center"
        w="full"
        p={5}
        pb={20}
        borderBottomRadius={20}
      >
        <Heading textAlign={"center"} color={"white"}>
          Juntos por uma comunidade segurade violencia
        </Heading>
      </HStack>

      {/* menu card */}
      <MenuCards />
    </Box>
  );
}
