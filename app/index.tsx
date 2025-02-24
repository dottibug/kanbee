import { Link } from 'expo-router';
import { SafeAreaView, Text } from 'react-native';

export default function Home() {
  return (
    <SafeAreaView>
      <Text>Main Screen</Text>
      <Link href="/board">Go to Board</Link>
    </SafeAreaView>
  );
}
