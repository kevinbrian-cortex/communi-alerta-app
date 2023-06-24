import { Ionicons } from "@expo/vector-icons";
import {
  Box,
  Center,
  HStack,
  Icon,
  IconButton,
  ScrollView,
  Text,
  VStack,
} from "native-base";
import React from "react";

const cardData = [
  {
    id: 1,
    title: "Enviar um alerta",
    icon_name: "notifications",
    color: "red.500",
  },
  {
    id: 2,
    title: "Ajudar o proximo",
    icon_name: "ios-hand-left",
    color: "blue.400",
  },
  {
    id: 3,
    title: "Linha para verde",
    icon_name: "call",
    color: "green.400",
  },
];

const MenuCards = () => {
  return (
    <Center w={"full"} bottom={10} bgColor={"transparent"}>
      <ScrollView>
        <HStack justifyContent={"center"} space={2}>
          {cardData.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
        </HStack>
      </ScrollView>
    </Center>
  );
};

export default MenuCards;

const CartItem = (props: {
  icon_name: string;
  title: string;
  color: string;
}) => {
  return (
    <Box
      borderWidth={1}
      borderColor={"gray.200"}
      borderRadius={10}
      bgColor={"white"}
      py={2}
    >
      <VStack justifyContent={"space-between"} space={2} alignItems={"center"}>
        <IconButton
          icon={
            <Icon
              as={Ionicons}
              name={props.icon_name}
              size="2xl"
              color={props.color}
            />
          }
        />
        <Text
          isTruncated
          maxW="200"
          w="80%"
          textAlign={"center"}
          fontSize={"md"}
          noOfLines={2}
          // bold={true}
        >
          {props.title}
        </Text>
      </VStack>
    </Box>
  );
};
