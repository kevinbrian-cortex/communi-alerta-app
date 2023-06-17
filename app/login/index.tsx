import {
  Box,
  Text,
  Input,
  Center,
  Container,
  FormControl,
  Button,
  VStack,
} from "native-base";
import { Image, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const Login = () => {
  const insets = useSafeAreaInsets();

  return (
    <Center
      w="full"
      style={{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
      }}
    >
      <Container w="full" mt="24">
        <Center w="full" mt="8">
          <Box alignItems="center" height="200">
            <Image
              source={require("../../assets/images/logo.png")}
              alt="Alternate Text"
              style={styles.image}
            />
            <Text style={styles.text}>Entrar na minha conta</Text>
          </Box>
        </Center>

        <VStack w="full" alignItems="center" mt="5">
          <FormControl w="full">
            <FormControl.Label>Username</FormControl.Label>
            <Input p={2} placeholder="Username" w="full" />
          </FormControl>

          <FormControl>
            <FormControl.Label>Password</FormControl.Label>
            <Input p={2} placeholder="Password" w="full" />
          </FormControl>

          <Text color="blue.300" mt="2">
            Esqueceu-se da palavra passe?
          </Text>
          <Button width={"full"} mt="10">
            Entrar
          </Button>
          <Center mt="2">
            <Text>Nao tem uma conta? Cadastre-se</Text>
          </Center>
        </VStack>
      </Container>
    </Center>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    marginTop: 10,
    color: "gray",
  },
  image: {
    width: 100,
    height: 100,
  },
});

export default Login;
