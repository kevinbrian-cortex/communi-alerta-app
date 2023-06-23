import { useRouter } from "expo-router";
import { Box, HStack, Heading, ScrollView } from "native-base";
import { useQuery } from "react-query";
import useFetch from "../../api/useFetch";
import Appbar from "../../components/appbar";
import MenuCards from "../../components/menu-cards";
import SwiperComponent from "../../components/swiper-component";

export default function () {
  //fetch data using useFetch
  const data = useQuery({
    queryKey: "posts",
    queryFn: () => useFetch("https://picsum.photos/v2/list"),
  });

  return (
    <Box width={"full"} height={"full"}>
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

      {/* swiper components view with a scroll view */}
      <ScrollView>
        <SwiperComponent data={data} title="Educação" />
        <SwiperComponent data={data} title="Podcasts motivacionais" />
      </ScrollView>
    </Box>
  );
}
