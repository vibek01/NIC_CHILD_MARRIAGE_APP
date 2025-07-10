import React, { useEffect } from "react";
import { View, Text } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withRepeat,
  withSequence,
} from "react-native-reanimated";
import { Shield, Wifi, WifiOff } from "lucide-react-native";
import layoutStyles from "../../styles/LayoutStyle";
import { colors } from "../../../design-tokens/colors";

export default function TopBar({ title, isConnected }) {
  const fadeIn = useSharedValue(0);
  const pulseScale = useSharedValue(1);

  useEffect(() => {
    // fade in on mount
    fadeIn.value = withTiming(1, { duration: 600 });
  }, []);

  useEffect(() => {
    // pulse the connection icon when online
    if (isConnected) {
      pulseScale.value = withRepeat(
        withSequence(
          withTiming(1.1, { duration: 800 }),
          withTiming(1, { duration: 800 })
        ),
        -1,
        true
      );
    }
  }, [isConnected]);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: fadeIn.value,
    transform: [{ translateY: fadeIn.value === 1 ? 0 : -20 }],
  }));

  const connectionIconStyle = useAnimatedStyle(() => ({
    transform: [{ scale: pulseScale.value }],
  }));

  return (
    <Animated.View style={[layoutStyles.topBar, animatedStyle]}>
      <View style={layoutStyles.topBarContent}>
        <View style={layoutStyles.topBarLeft}>
          <Shield size={24} color={colors.text.inverse} strokeWidth={2} />
          <Text style={layoutStyles.topBarTitle}>{title}</Text>
        </View>
        <Animated.View
          style={[layoutStyles.connectionStatus, connectionIconStyle]}
        >
          {isConnected ? (
            <Wifi size={20} color={colors.success[500]} strokeWidth={2} />
          ) : (
            <WifiOff size={20} color={colors.urgent[500]} strokeWidth={2} />
          )}
        </Animated.View>
      </View>
    </Animated.View>
  );
}
