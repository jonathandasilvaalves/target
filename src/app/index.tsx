import { Text, View, Button } from 'react-native';
import { router } from 'expo-router';
import { fontFamily } from '@/theme/fontFamily';

export default function Index() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 18, fontFamily: fontFamily.bold}}>Open up src/app/index.tsx to start working on your app!</Text>
            <Button
                title="Nova Meta"
                onPress={() => router.navigate('/target')}
            />
            <Button
                title="Transação Details"
                onPress={() => router.navigate('/transaction/123')}
            />

            <Button
                title="Progresso"
                onPress={() => router.navigate('/in-progress/12')}
            />

        </View>
    );
}