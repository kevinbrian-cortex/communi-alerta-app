import { Ionicons } from "@expo/vector-icons";
import {
  Box,
  Button,
  CheckIcon,
  Flex,
  FormControl,
  HStack,
  Heading,
  Icon,
  Modal,
  Radio,
  Select,
  Stack,
  Text,
  TextArea,
  VStack,
  View,
} from "native-base";
import { useState } from "react";

export default () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <View p={4}>
      <VStack space={5} direction="column">
        <Box alignContent={"center"} alignItems={"center"}>
          <Heading>Denuncie</Heading>
        </Box>

        <View>
          <FormControl>
            <FormControl.Label fontSize={"lg"} mb={2}>
              Eu sou
            </FormControl.Label>

            <Stack>
              <Radio.Group
                name="myRadioGroup"
                defaultValue="1"
                space={2}
                direction={"row"}
                justifyContent={"space-between"}
              >
                <Radio value="1">Vitima</Radio>
                <Radio value="2">Testemunho</Radio>
              </Radio.Group>
            </Stack>
          </FormControl>
        </View>

        <View>
          <FormControl.Label fontSize={"lg"} mb={2}>
            Eu quero denunciar
          </FormControl.Label>

          <Stack>
            <Radio.Group
              name="myRadioGroup"
              defaultValue="1"
              space={2}
              direction={"row"}
              justifyContent={"space-between"}
            >
              <Radio value="1">Em anonimato</Radio>
              <Radio value="2">Sem anonimato</Radio>
            </Radio.Group>
          </Stack>
        </View>

        <View>
          <FormControl>
            <FormControl.Label>Tipo de denuncia</FormControl.Label>
            <Select
              placeholder="Escolhe o tipo de denuncia"
              accessibilityLabel="Escolhe o tipo de denuncia"
              _selectedItem={{
                bg: "blue.400",
                endIcon: <CheckIcon size={5} color="white" />,
              }}
            >
              <Select.Item
                label="Violencia domestica"
                value="violencia_domestica"
              />
              <Select.Item
                label="Casamento prematuro"
                value="casamento_prematuro"
              />
            </Select>
          </FormControl>
        </View>

        <View>
          <FormControl>
            <FormControl.Label>Descrição</FormControl.Label>
            <TextArea
              placeholder="Descreva o que está acontecendo"
              autoCompleteType={true}
            />
          </FormControl>
        </View>

        <VStack space={4}>
          <Flex direction={"row"} justifyContent={"center"}>
            <Text fontSize={"xl"}>ou</Text>
          </Flex>

          <FormControl>
            <HStack
              alignContent={"center"}
              alignItems={"center"}
              justifyContent={"center"}
              space={3}
            >
              <Button
                leftIcon={<Icon as={Ionicons} name="mic-outline" size={10} />}
                borderRadius={"full"}
                bgColor={"blue.500"}
                _pressed={{ bgColor: "red.500" }}
              />
              <Text fontSize={"lg"}>Denuncie por audio</Text>
            </HStack>
          </FormControl>
        </VStack>

        <HStack justifyContent={"center"} mt={5}>
          <Button w={"full"} onPress={() => setShowModal(true)}>
            Denunciar
          </Button>
        </HStack>
      </VStack>
      {showModal && (
        <ConfirmModal setShowModal={setShowModal} showModal={showModal} />
      )}
    </View>
  );
};

//Send Alert
const ConfirmModal = (props: { setShowModal: any; showModal: any }) => {
  return (
    <Modal isOpen={props.showModal} onClose={() => props.setShowModal(false)}>
      <Modal.Content>
        <Modal.Body>
          <VStack space={5} alignItems={"center"}>
            <Icon
              name="checkmark-circle"
              as={Ionicons}
              size={20}
              color="green.500"
            />
            <Heading textBreakStrategy="highQuality" textAlign={"center"}>
              Denuncia enviada com sucesso!
            </Heading>
            <Button>Proximo passo</Button>
          </VStack>
        </Modal.Body>
      </Modal.Content>
    </Modal>
  );
};
