import {StatusBar} from 'expo-status-bar';
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    TouchableOpacity
} from 'react-native';
import {useState} from 'react';

import CalculatorButtons from './components/CalculatorButtons';
import Results from './components/Results';


export default function App() {
    const [result, setResult] = useState("0");


    return (
        <SafeAreaView style={
            styles.container
        }>
            <Results result={result}/>
            <CalculatorButtons result={result}
                setResult={setResult}/>
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
