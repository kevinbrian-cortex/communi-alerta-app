import { NativeBaseProvider } from "native-base";
import { Slot } from "expo-router";
import { QueryClient, QueryClientProvider } from "react-query";

export default function RootLayout() {
  //create a client
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <NativeBaseProvider>
        <Slot />
      </NativeBaseProvider>
    </QueryClientProvider>
  );
}
