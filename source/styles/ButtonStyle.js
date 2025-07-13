// buttons.js
import { StyleSheet, Platform } from "react-native";

export default StyleSheet.create({
  primaryButton: {
    backgroundColor: "#3498db",
    paddingVertical: 14,
    paddingHorizontal: 28,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    ...(Platform.OS === "ios"
      ? {
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.2,
          shadowRadius: 3,
        }
      : {
          elevation: 3,
        }),
  },
  primaryButtonText: {
    color: "#ffffff",
    fontSize: 17,
    fontWeight: "600",
  },

  secondaryButton: {
    backgroundColor: "#ecf0f1",
    paddingVertical: 12,
    paddingHorizontal: 26,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    ...(Platform.OS === "ios"
      ? {
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 1 },
          shadowOpacity: 0.1,
          shadowRadius: 2,
        }
      : {
          elevation: 2,
        }),
  },
  secondaryButtonText: {
    color: "#2c3e50",
    fontSize: 16,
  },

  disabledButton: {
    backgroundColor: "#bdc3c7",
    paddingVertical: 14,
    paddingHorizontal: 28,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  disabledButtonText: {
    color: "#7f8c8d",
    fontSize: 17,
  },
});
