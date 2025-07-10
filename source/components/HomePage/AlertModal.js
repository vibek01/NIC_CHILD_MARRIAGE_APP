import React, { useEffect, useRef } from "react";
import {
  Modal,
  View,
  Text,
  Vibration,
  BackHandler,
  Pressable,
} from "react-native";
import { Audio } from "expo-av";
import { TriangleAlert as AlertTriangle, Check, X } from "lucide-react-native";

import { colors } from "../../../design-tokens/colors";
import modalStyles from "../../styles/ModalStyle";

export default function AlertModal({
  visible,
  acceptedCount,
  userResponse,
  onAccept,
  onReject,
}) {
  const soundRef = useRef(null);

  useEffect(() => {
    let backHandler;
    if (visible) {
      // Play sound
      (async () => {
        const { sound } = await Audio.Sound.createAsync(
          require("../../../assets/alarm.mp3")
        );
        soundRef.current = sound;
        await sound.playAsync();
      })();

      // Vibrate
      Vibration.vibrate(2000);

      // Disable back button
      backHandler = BackHandler.addEventListener(
        "hardwareBackPress",
        () => true
      );
    }

    return () => {
      backHandler?.remove();
      if (soundRef.current) {
        soundRef.current.stopAsync();
        soundRef.current.unloadAsync();
      }
      Vibration.cancel();
    };
  }, [visible]);

  useEffect(() => {
    if (
      (userResponse === "accepted" || userResponse === "rejected") &&
      soundRef.current
    ) {
      soundRef.current.stopAsync();
      soundRef.current.unloadAsync();
      Vibration.cancel();
    }
  }, [userResponse]);

  const handleAccept = () => {
    onAccept();
  };

  const handleReject = () => {
    onReject();
  };

  const renderContent = () => {
    if (userResponse === "accepted") {
      return (
        <View style={modalStyles.statusContainer}>
          <Check size={32} color={colors.success[600]} strokeWidth={3} />
          <Text style={modalStyles.statusTextSuccess}>Case Accepted</Text>
          <Text style={modalStyles.statusSubtext}>
            Thank you for your response
          </Text>
        </View>
      );
    }
    if (userResponse === "rejected") {
      return (
        <View style={modalStyles.statusContainer}>
          <X size={32} color={colors.urgent[600]} strokeWidth={3} />
          <Text style={modalStyles.statusTextError}>Case Rejected</Text>
          <Text style={modalStyles.statusSubtext}>Response recorded</Text>
        </View>
      );
    }
    if (acceptedCount >= 7) {
      return (
        <View style={modalStyles.statusContainer}>
          <AlertTriangle
            size={32}
            color={colors.warning[600]}
            strokeWidth={3}
          />
          <Text style={modalStyles.statusTextWarning}>Case Locked</Text>
          <Text style={modalStyles.statusSubtext}>Maximum reached (7/7)</Text>
        </View>
      );
    }

    return (
      <View style={modalStyles.actionContainer}>
        <Pressable style={modalStyles.acceptButton} onPress={handleAccept}>
          <Check size={20} color={colors.text.inverse} strokeWidth={2} />
          <Text style={modalStyles.acceptButtonText}>Accept Case</Text>
        </Pressable>
        <Pressable style={modalStyles.rejectButton} onPress={handleReject}>
          <X size={20} color={colors.text.inverse} strokeWidth={2} />
          <Text style={modalStyles.rejectButtonText}>Reject Case</Text>
        </Pressable>
      </View>
    );
  };

  return (
    <Modal
      transparent
      visible={visible}
      animationType="fade"
      presentationStyle="overFullScreen"
      onRequestClose={() => {}}
    >
      <View style={modalStyles.backdrop}>
        <View style={modalStyles.modal}>
          <View style={modalStyles.header}>
            <View style={modalStyles.alertIcon}>
              <AlertTriangle
                size={32}
                color={colors.urgent[600]}
                strokeWidth={3}
              />
            </View>
            <Text style={modalStyles.title}>Emergency Alert</Text>
            <Text style={modalStyles.subtitle}>
              New Child Marriage Case Filed
            </Text>
          </View>
          <View style={modalStyles.content}>
            <View style={modalStyles.infoRow}>
              <Text style={modalStyles.infoLabel}>Location:</Text>
              <Text style={modalStyles.infoValue}>Village ABC</Text>
            </View>
            <View style={modalStyles.infoRow}>
              <Text style={modalStyles.infoLabel}>Responses:</Text>
              <Text style={modalStyles.infoValue}>
                {acceptedCount} / 7 Accepted
              </Text>
            </View>
          </View>
          {renderContent()}
        </View>
      </View>
    </Modal>
  );
}
