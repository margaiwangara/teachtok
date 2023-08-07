import { useState, useEffect } from 'react';
import { AppState } from 'react-native';

export const useAppUsageTracker = () => {
  const [appUsage, setAppUsage] = useState(0);
  const [appState, setAppState] = useState(AppState.currentState);
  const [startTime, setStartTime] = useState(0);

  const updateAppUsage = () => {
    const currentTime = new Date().getTime();
    const elapsedTime = (currentTime - startTime) / 1000; // Convert to seconds
    setAppUsage(elapsedTime);
  };

  useEffect(() => {
    // When the app is active (foreground)
    const handleAppStateChange = (nextAppState) => {
      if (appState.match(/inactive|background/) && nextAppState === 'active') {
        setStartTime(new Date().getTime());
      } else if (
        appState === 'active' &&
        nextAppState.match(/inactive|background/)
      ) {
        updateAppUsage();
      }
      setAppState(nextAppState);
    };

    const interval = setInterval(() => {
      if (appState === 'active') {
        updateAppUsage();
      }
    }, 1000); // Update usage every 1 second

    AppState.addEventListener('change', handleAppStateChange);

    return () => {
      clearInterval(interval);
    };
  }, [appState]);

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor((timeInSeconds % 3600) / 60);

    return minutes.toString().padStart(2, '0');
  };

  return {
    appUsage,
    formatTime,
  };
};

export default useAppUsageTracker;
