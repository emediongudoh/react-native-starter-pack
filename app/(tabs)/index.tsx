import { View, Text } from 'react-native';

// Third-party imports
import { Link } from 'expo-router';

export default function HomeScreen() {
    return (
        <View
            // style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
            className='flex-1 items-center justify-center'
        >
            <Text>Hello world</Text>
            <Link href='/explore'>Go to explore</Link>
        </View>
    );
}
