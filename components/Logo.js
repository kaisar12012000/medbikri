import { StyleSheet, Text, View, Button } from 'react-native';
import styleConstant from '../styleConstants';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { Dimensions } from 'react-native-web';

const windowWidth = Dimensions.get('window').width;

export default function Logo () {
    return (
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 22, fontWeight: 'bold', color:'#fff' }}>Medbikri</Text>
        </View>
    )
}