import { Box, HStack, Heading, Image, Link } from "native-base";
import React from "react";
import { Text } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Swiper from "react-native-swiper";
import { useQuery } from "react-query";
import useFetch from "../api/useFetch";

export default function SwiperComponent() {
  //fetch data using useFetch
  const { data, isLoading, isError, isFetching } = useQuery({
    queryKey: "posts",
    queryFn: () => useFetch(),
  });

  //insets for safe area
  const insets = useSafeAreaInsets();

  return (
    <Box h={300} w={"full"}>
      <HStack alignItems={"center"} justifyContent={"space-between"} px={2}>
        <Heading>Educação</Heading>

        <Link color={"red.500"} tintColor={"red.600"}>
          veja mais
        </Link>
      </HStack>
      <Swiper
        showsButtons={true}
        height={250}
        showsPagination={false}
        scrollEnabled={true}
      >
        {isLoading || isFetching ? (
          <Heading>Loading</Heading>
        ) : (
          data
            .filter((item: any, index: number) => index < 10)
            .map((item: any) => <SwiperItem key={item.id} item={item} />)
        )}
      </Swiper>
    </Box>
  );
}

const SwiperItem = (props: { item: any }) => {
  return (
    <Box p={2}>
      <Image
        borderRadius={20}
        source={{ uri: props.item.download_url }}
        alt={props.item.author}
        size="xl"
        resizeMode="cover"
        width={"full"}
        height={"full"}
      />
    </Box>
  );
};
