// source/styles/ModalStyle.js
import { StyleSheet } from "react-native";
import { colors } from "../../design-tokens/colors";
import { metrics } from "../../design-tokens/metrics";

export default StyleSheet.create({
  backdrop: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    paddingHorizontal: metrics.spacing.md,
  },

  modal: {
    backgroundColor: colors.background.primary,
    borderRadius: metrics.borderRadius.xxl,
    width: "100%",
    maxWidth: metrics.layout.modalMaxWidth,
    ...metrics.shadow.lg,
  },

  header: {
    alignItems: "center",
    paddingTop: metrics.spacing.xl,
    paddingHorizontal: metrics.spacing.xl,
    paddingBottom: metrics.spacing.lg,
    borderBottomWidth: 1,
    borderBottomColor: colors.neutral[200],
  },

  alertIcon: {
    width: 64,
    height: 64,
    borderRadius: metrics.borderRadius.full,
    backgroundColor: colors.urgent[50],
    alignItems: "center",
    justifyContent: "center",
    marginBottom: metrics.spacing.md,
    borderWidth: 2,
    borderColor: colors.urgent[200],
  },

  title: {
    fontSize: metrics.fontSize["2xl"],
    fontWeight: metrics.fontWeight.bold,
    color: colors.urgent[700],
    marginBottom: metrics.spacing.xs,
    textAlign: "center",
  },

  subtitle: {
    fontSize: metrics.fontSize.base,
    color: colors.text.secondary,
    textAlign: "center",
  },

  content: {
    paddingHorizontal: metrics.spacing.xl,
    paddingVertical: metrics.spacing.lg,
  },

  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: metrics.spacing.sm,
    borderBottomWidth: 1,
    borderBottomColor: colors.neutral[100],
  },

  infoLabel: {
    fontSize: metrics.fontSize.base,
    fontWeight: metrics.fontWeight.medium,
    color: colors.text.secondary,
  },

  infoValue: {
    fontSize: metrics.fontSize.base,
    fontWeight: metrics.fontWeight.semibold,
    color: colors.text.primary,
  },

  actionContainer: {
    padding: metrics.spacing.xl,
    flexDirection: "row",
    justifyContent: "space-around",
  },

  acceptButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.success[600],
    height: metrics.layout.buttonHeight,
    borderRadius: metrics.borderRadius.lg,
    ...metrics.shadow.sm,
  },

  acceptButtonText: {
    fontSize: metrics.fontSize.base,
    fontWeight: metrics.fontWeight.semibold,
    color: colors.text.inverse,
    marginLeft: metrics.spacing.sm,
  },

  rejectButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.urgent[600],
    height: metrics.layout.buttonHeight,
    borderRadius: metrics.borderRadius.lg,
    ...metrics.shadow.sm,
  },

  rejectButtonText: {
    fontSize: metrics.fontSize.base,
    fontWeight: metrics.fontWeight.semibold,
    color: colors.text.inverse,
    marginLeft: metrics.spacing.sm,
  },

  statusContainer: {
    alignItems: "center",
    padding: metrics.spacing.xl,
  },

  statusTextSuccess: {
    fontSize: metrics.fontSize.xl,
    fontWeight: metrics.fontWeight.semibold,
    color: colors.success[700],
    marginTop: metrics.spacing.md,
    marginBottom: metrics.spacing.xs,
  },

  statusTextError: {
    fontSize: metrics.fontSize.xl,
    fontWeight: metrics.fontWeight.semibold,
    color: colors.urgent[700],
    marginTop: metrics.spacing.md,
    marginBottom: metrics.spacing.xs,
  },

  statusTextWarning: {
    fontSize: metrics.fontSize.xl,
    fontWeight: metrics.fontWeight.semibold,
    color: colors.warning[600],
    marginTop: metrics.spacing.md,
    marginBottom: metrics.spacing.xs,
  },

  statusSubtext: {
    fontSize: metrics.fontSize.base,
    color: colors.text.secondary,
    textAlign: "center",
  },
});
