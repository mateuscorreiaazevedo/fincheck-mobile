import { useEffect, useState } from 'react';
import { Keyboard } from 'react-native';

export function useWatchKeyboard() {
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    const showSub = Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardVisible(true);
    });
    const hideSub = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardVisible(false);
    });

    // Clean up ao desmontar
    return () => {
      showSub.remove();
      hideSub.remove();
    };
  }, []);

  return {
    isKeyboardVisible,
  };
}
