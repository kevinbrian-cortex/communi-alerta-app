import { View, Text } from "react-native";
import React from "react";
import Swiper from "react-native-swiper";
import { Box } from "native-base";

export default function SwiperComponent() {
  return (
    <Box borderWidth={1} borderColor={"red.100"} bg={"red.100"} h={200}>
      <Swiper showsButtons={true}>
        {[1, 2, 3, 4, 5].map((item) => (
          <SwiperItem key={item} />
        ))}
      </Swiper>
    </Box>
  );
}

const SwiperItem = () => {
  return (
    <Box h={200} bg="blue.500" p={4} w={"full"}>
      1
    </Box>
  );
};
