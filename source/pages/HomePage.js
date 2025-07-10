import React, { useEffect, useState, useRef } from "react";
import { View, Text, Pressable } from "react-native";
import { io } from "socket.io-client";
import { Play } from "lucide-react-native";
import homePageStyles from "../styles/HomePageStyle";
import { colors } from "../../design-tokens/colors";
import AlertModal from "../components/HomePage/AlertModal";

export default function HomePage() {
  const [showModal, setShowModal] = useState(false);
  const [acceptedCount, setAcceptedCount] = useState(0);
  const [userResponse, setUserResponse] = useState(null);
  const hideTimer = useRef(null);

  useEffect(() => {
    const socket = io("http://192.168.43.8:3000");

    socket.on("trigger-alert", () => {
      triggerModal();
    });

    return () => {
      socket.disconnect();
      clearTimeout(hideTimer.current);
    };
  }, []);

  const triggerModal = () => {
    clearTimeout(hideTimer.current);
    setUserResponse(null);
    setShowModal(true);

    hideTimer.current = setTimeout(() => {
      setShowModal(false);
    }, 5000);
  };

  const handlePress = () => {
    triggerModal();
  };

  const handleAccept = () => {
    if (!userResponse && acceptedCount < 7) {
      setAcceptedCount((c) => c + 1);
      setUserResponse("accepted");
    }
  };

  const handleReject = () => {
    if (!userResponse) {
      setUserResponse("rejected");
    }
  };

  return (
    <>
      <View style={homePageStyles.content}>
        <View style={homePageStyles.readyState}>
          <Text style={homePageStyles.readyTitle}>System Ready</Text>
          <Text style={homePageStyles.readyDescription}>
            Monitoring for child marriage case alerts. Tap below to simulate.
          </Text>
          <Pressable
            style={homePageStyles.simulateButton}
            onPress={handlePress}
          >
            <Play size={20} color={colors.text.inverse} strokeWidth={2} />
            <Text style={homePageStyles.simulateButtonText}>
              Simulate Alert (Testing)
            </Text>
          </Pressable>
        </View>
      </View>

      <AlertModal
        visible={showModal}
        acceptedCount={acceptedCount}
        userResponse={userResponse}
        onAccept={handleAccept}
        onReject={handleReject}
      />
    </>
  );
}
