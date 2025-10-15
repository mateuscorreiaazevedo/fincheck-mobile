import { StatusBar } from 'expo-status-bar';
import { Text, TouchableOpacity, View } from 'react-native';
import '@src/assets/styles/global.css';

export function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text>Olá mundo!</Text>
      <TouchableOpacity
        activeOpacity={0.7}
        className="mt-2 rounded-xl bg-blue-5 px-4 py-3"
      >
        <Text className="text-white">Click Me!</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}
