import {StatusBar} from 'expo-status-bar';
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    TouchableOpacity
} from 'react-native';

import CalculatorButtons from './components/CalculatorButtons';
import Results from './components/Results';

export default function App() {
    return (
        <SafeAreaView style={
            styles.container
        }>
            <Results/>
            <CalculatorButtons/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#454545',
        alignItems: 'center',
        justifyContent: 'center'
    }

});
