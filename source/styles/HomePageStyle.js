// source/styles/HomePageStyle.js
import { StyleSheet } from "react-native";
import { colors } from "../../design-tokens/colors";
import { metrics } from "../../design-tokens/metrics";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background.secondary,
  },

  content: {
    flex: 1,
    paddingTop: metrics.layout.topBarHeight + metrics.spacing.md,
    paddingBottom: metrics.layout.bottomBarHeight + metrics.spacing.md,
    paddingHorizontal: metrics.spacing.md,
    justifyContent: "center",
  },

  statusCard: {
    backgroundColor: colors.background.primary,
    borderRadius: metrics.borderRadius.lg,
    padding: metrics.spacing.lg,
    marginBottom: metrics.spacing.xl,
    borderWidth: 1,
    borderColor: colors.neutral[200],
    ...metrics.shadow.sm,
  },

  statusHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: metrics.spacing.sm,
  },

  statusTitle: {
    fontSize: metrics.fontSize.lg,
    fontWeight: metrics.fontWeight.semibold,
    color: colors.text.primary,
    marginLeft: metrics.spacing.sm,
  },

  statusDescription: {
    fontSize: metrics.fontSize.base,
    color: colors.text.secondary,
    lineHeight: metrics.fontSize.base * metrics.lineHeight.relaxed,
  },

  alertState: {
    alignItems: "center",
    backgroundColor: colors.urgent[50],
    borderRadius: metrics.borderRadius.xl,
    padding: metrics.spacing.xxl,
    borderWidth: 2,
    borderColor: colors.urgent[200],
  },

  alertTitle: {
    fontSize: metrics.fontSize["3xl"],
    fontWeight: metrics.fontWeight.bold,
    color: colors.urgent[700],
    marginTop: metrics.spacing.md,
    marginBottom: metrics.spacing.sm,
  },

  alertDescription: {
    fontSize: metrics.fontSize.lg,
    color: colors.urgent[600],
    textAlign: "center",
    lineHeight: metrics.fontSize.lg * metrics.lineHeight.relaxed,
  },

  readyState: {
    alignItems: "center",
    backgroundColor: colors.background.primary,
    borderRadius: metrics.borderRadius.xl,
    padding: metrics.spacing.xxl,
    borderWidth: 1,
    borderColor: colors.neutral[200],
    ...metrics.shadow.sm,
  },

  readyTitle: {
    fontSize: metrics.fontSize["2xl"],
    fontWeight: metrics.fontWeight.bold,
    color: colors.text.primary,
    marginBottom: metrics.spacing.sm,
  },

  readyDescription: {
    fontSize: metrics.fontSize.base,
    color: colors.text.secondary,
    textAlign: "center",
    lineHeight: metrics.fontSize.base * metrics.lineHeight.relaxed,
    marginBottom: metrics.spacing.xl,
  },

  simulateButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.primary[600],
    paddingHorizontal: metrics.spacing.xl,
    paddingVertical: metrics.spacing.md,
    borderRadius: metrics.borderRadius.lg,
    ...metrics.shadow.sm,
  },

  simulateButtonText: {
    fontSize: metrics.fontSize.base,
    fontWeight: metrics.fontWeight.semibold,
    color: colors.text.inverse,
    marginLeft: metrics.spacing.sm,
  },
});
