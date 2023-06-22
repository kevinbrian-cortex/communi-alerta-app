import { Ionicons } from "@expo/vector-icons";
import { Box, HStack, Icon, IconButton, Text, VStack } from "native-base";
import React from "react";

const cardData = [
  {
    id: 1,
    title: "Enviar uma alerta",
    icon_name: "notifications",
    color: "red.500",
  },
  {
    id: 2,
    title: "Ver alertas na minha região",
    icon_name: "ios-hand-left",
    color: "blue.400",
  },
];

const MenuCards = () => {
  return (
    <Box w={"full"} bottom={10}>
      <HStack justifyContent={"center"} space={4}>
        {cardData.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
      </HStack>
    </Box>
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
      p={2}
      bgColor={"white"}
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
          bold={true}
        >
          {props.title}
        </Text>
      </VStack>
    </Box>
  );
};
