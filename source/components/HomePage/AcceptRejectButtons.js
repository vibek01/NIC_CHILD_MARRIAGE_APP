import React from "react";
import { View, Button, Text } from "react-native";
import styles from "../../styles/AcceptRejectStyle";

export default function AcceptRejectButtons({
  userResponse,
  acceptedCount,
  onAccept,
  onReject,
}) {
  if (userResponse === "accepted")
    return <Text style={styles.status}>✅ You accepted.</Text>;
  if (userResponse === "rejected")
    return <Text style={styles.status}>❌ You rejected.</Text>;
  if (acceptedCount >= 7)
    return <Text style={styles.status}>🚫 Case locked (7 accepted).</Text>;

  return (
    <View style={styles.row}>
      <Button title="Accept" color="green" onPress={onAccept} />
      <View style={{ width: 20 }} />
      <Button title="Reject" color="gray" onPress={onReject} />
    </View>
  );
}
