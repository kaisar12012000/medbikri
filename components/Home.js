import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, View, Dimensions, TouchableOpacity, FlatList } from 'react-native';
// import { Dimensions } from 'react-native-web';
import styleConstant from '../styleConstants';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Home({ screenName }) {
    const API_URL = "https://api.spacexdata.com/v4/launchpads";
    const navigation = useNavigation();
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const renderData = async () => {
        await fetch(API_URL)
                .then(response => response.json())
                .then(responseData => {
                    // console.log(responseData)
                    setData(responseData)
                    setIsLoading(false)
                    // console.log(data)
                })
    }

    useEffect(() => {
      renderData()
    }, []);
    
    function ListHeading () {
        return (
            <View style={{ marginHorizontal: windowWidth*0.025, marginVertical: 10 }}>
                <Text style={{ fontSize: 16, color: '#aaa', fontWeight: 'bold' }}>{data.length} launch pads</Text>
            </View>
        )
    }

    return(
        <View style={styleConstant.screenContainer}>
            {
                isLoading ?
                <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
                    <Text style={{...styleConstant.cardH2}}>Loading....</Text>
                </View>
                :
                <FlatList
                    ListHeaderComponent={() => <ListHeading />}
                    style={{ marginHorizontal: windowWidth*0.025 }}
                    data={data}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => {
                            navigation.setOptions({title: item.name});
                            navigation.navigate("Description", { launchpad : item.id, name: item.name });
                        }} style={{...styleConstant.card}}>
                            <Text style={{...styleConstant.cardH1}}>Name: {item.name}</Text>
                            <Text style={{...styleConstant.cardH3, borderBottomColor: '#ddd', borderBottomWidth: 1, paddingVertical: 10}}>Details: {item.details != null ? item.details : "Detils not available"}</Text>
                            <Text style={{...styleConstant.cardH3, borderBottomColor: '#ddd', borderBottomWidth: 1, paddingVertical: 10}}>Status: {item.status}</Text>
                            <Text style={{...styleConstant.cardH3, borderBottomColor: '#ddd', borderBottomWidth: 1, paddingVertical: 10}}>Attempted launches: {item.launch_attempts}</Text>
                            <Text style={{...styleConstant.cardH3, borderBottomColor: '#ddd', borderBottomWidth: 1, paddingVertical: 10}}>Successful launches: {item.launch_successes > 0 ? item.launch_successes : "No launches available"}</Text>
                            <Text style={{...styleConstant.cardH3, borderBottomColor: '#ddd', borderBottomWidth: 1, paddingVertical: 10, borderBottomWidth: 0 }}>Top three launches: {item.launch_successes >= 3 ? `${item.launches[0]}, ${item.launches[1]} and ${item.launches[2]}` : "No launches available"}</Text>
                        </TouchableOpacity>
                    )}
                />
            }
            {/* <Button title='Go to descriptions' onPress={() => navigation.navigate('Description')} /> */}
        </View>
    )
}