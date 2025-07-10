// source/styles/LayoutStyle.js
import { StyleSheet } from "react-native";
import { colors } from "../../design-tokens/colors";
import { metrics } from "../../design-tokens/metrics";

export default StyleSheet.create({
  topBar: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: metrics.layout.topBarHeight,
    backgroundColor: colors.primary[700],
    paddingTop: metrics.spacing.xl,
    paddingHorizontal: metrics.spacing.md,
    zIndex: 1000,
    ...metrics.shadow.md,
  },

  topBarContent: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  topBarLeft: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },

  topBarTitle: {
    fontSize: metrics.fontSize.lg,
    fontWeight: metrics.fontWeight.semibold,
    color: colors.text.inverse,
    marginLeft: metrics.spacing.sm,
    lineHeight: metrics.fontSize.lg * metrics.lineHeight.tight,
  },

  connectionStatus: {
    padding: metrics.spacing.xs,
    borderRadius: metrics.borderRadius.full,
    backgroundColor: colors.background.primary,
  },

  bottomBar: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: metrics.layout.bottomBarHeight,
    backgroundColor: colors.neutral[100],
    alignItems: "center",
    justifyContent: "center",
    borderTopWidth: 1,
    borderTopColor: colors.neutral[200],
  },

  bottomBarText: {
    fontSize: metrics.fontSize.xs,
    fontWeight: metrics.fontWeight.medium,
    color: colors.text.secondary,
    letterSpacing: 0.5,
  },
});
