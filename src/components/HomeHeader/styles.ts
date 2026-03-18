import { colors, fontFamily } from "@/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 324,
    paddingHorizontal: 24,
    paddingBottom: 18,
    justifyContent: "flex-end",
    gap: 24,
  },
  label: {
    color: colors.white,
    fontSize: 12,
    fontFamily: fontFamily.regular,
  },
  total: {
    fontSize: 32,
    fontFamily: fontFamily.medium,
    color: colors.white
  }
});
