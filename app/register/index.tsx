import {
  Box,
  Text,
  Input,
  Center,
  Container,
  FormControl,
  Button,
  VStack,
  Radio,
  HStack,
  Icon,
} from "native-base";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useState } from "react";
import DateTimePicker, {
  DateTimePickerAndroid,
} from "@react-native-community/datetimepicker";

import { Ionicons } from "@expo/vector-icons";
import { Pressable } from "react-native";

const Register = () => {
  const [date, setDate] = useState(new Date(1598051730000));
  const onChange = (event: any, selectedDate: any) => {
    const currentDate = selectedDate;
    setDate(currentDate);
  };

  const showMode = (currentMode: any) => {
    DateTimePickerAndroid.open({
      value: date,
      onChange,
      mode: currentMode,
      is24Hour: true,
    });
  };

  const showDatepicker = () => {
    showMode("date");
  };

  const formatDate = (date: string) => {
    const newDate = date.split(",");
    return newDate[0];
  };

  const insets = useSafeAreaInsets();
  return (
    <Center
      flex="1"
      style={{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
      }}
    >
      <Container my="10">
        <Text style={{ fontSize: 20 }}>Criar uma conta</Text>
        <VStack w="full" alignItems="center" mt="5">
          <FormControl w="full">
            <FormControl.Label>Username</FormControl.Label>
            <Input p={2} placeholder="Username" w="full" />
          </FormControl>

          <FormControl w="full" mt="2">
            <FormControl.Label>Numero de telefone</FormControl.Label>
            <Input p={2} placeholder="Numero de telefone" w="full" />
          </FormControl>

          <FormControl w="full" ml="-20">
            <FormControl.Label>Sexo</FormControl.Label>
            <Radio.Group
              name="myRadioGroup"
              accessibilityLabel="favorite number"
            >
              <HStack>
                <Radio value="one" my={1}>
                  Masculino
                </Radio>
                <Radio value="two" ml="3">
                  Feminino
                </Radio>
              </HStack>
            </Radio.Group>
          </FormControl>

          <FormControl w="full" mt="2">
            <FormControl.Label>Ano de Nascimento</FormControl.Label>

            <Pressable onPress={showDatepicker} style={{ width: "100%" }}>
              <Input
                p={2}
                placeholder={`${new Date().toLocaleString()}`}
                w="full"
                isReadOnly
                value={formatDate(date.toLocaleString())}
                InputRightElement={
                  <Icon as={Ionicons} name="caret-down-outline" mr="2" />
                }
              />
            </Pressable>
          </FormControl>

          <Button mt="4">Proximo</Button>
        </VStack>
      </Container>
    </Center>
  );
};

export default Register;
