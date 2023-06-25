import { Stack } from "expo-router";
import { NativeBaseProvider } from "native-base";
import { QueryClient, QueryClientProvider } from "react-query";

export default function RootLayout() {
  //create a client
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <NativeBaseProvider>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false,  }} />
        </Stack>
      </NativeBaseProvider>
    </QueryClientProvider>
  );
}
