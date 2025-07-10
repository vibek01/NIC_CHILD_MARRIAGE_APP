import React, { useEffect } from "react";
import { Text } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withDelay,
} from "react-native-reanimated";
import layoutStyles from "../../styles/LayoutStyle";

export default function BottomBar({ text }) {
  const fadeIn = useSharedValue(0);

  useEffect(() => {
    // fade in with slight delay
    fadeIn.value = withDelay(300, withTiming(1, { duration: 500 }));
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: fadeIn.value,
    transform: [{ translateY: fadeIn.value === 1 ? 0 : 20 }],
  }));

  return (
    <Animated.View style={[layoutStyles.bottomBar, animatedStyle]}>
      <Text style={layoutStyles.bottomBarText}>{text}</Text>
    </Animated.View>
  );
}
