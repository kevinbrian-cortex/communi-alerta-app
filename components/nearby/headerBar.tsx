import { Box, Button, HStack, Icon, IconButton, Text } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default () => {
  const router = useRouter();
  return (
    <Box>
      <HStack>
        <HStack alignItems={"center"} pt={12} p={3}>
          <Button
            leftIcon={<Icon as={Ionicons} name="chevron-back-outline" />}
            rounded={"full"}
            onPress={() => router.back()}
          >
            <Text color={"white"}>Voltar</Text>
          </Button>
        </HStack>
      </HStack>
    </Box>
  );
};
