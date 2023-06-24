import {
  createDrawerNavigator,
  DrawerNavigationOptions,
} from "@react-navigation/drawer";
import { withLayoutContext } from "expo-router";
const { Navigator } = createDrawerNavigator();
export const DrawerNavigator = withLayoutContext<
  DrawerNavigationOptions,
  typeof Navigator
>(Navigator);
