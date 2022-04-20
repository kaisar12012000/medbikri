import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, FlatList, Dimensions } from 'react-native';
import styleConstant from '../styleConstants';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Desc (props) {
    const launchpadId = props.launchpad;
    const [ launches, setLaunches] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const POST_URL = "https://api.spacexdata.com/v4/launches/query"

    const getLaunches = async () => {
        await fetch(POST_URL, {
            method: "POST",
            headers : {
                "Accept" : "application/json",
                "Content-Type" : "application/json"
            },
            body : {
                "query": {
                    "launchpad": launchpadId
                }
            }
        }).then(response => response.json())
          .then(responseData => {
            //   console.log(responseData)
            setLaunches(responseData.docs)
            setIsLoading(false)
          })
    }

    const printDate = (param) => {
        var ms = param * 1000;
        var date = new Date(ms);
        return date.toDateString();
    }

    const printReused = (param) => {
        if (param != null) {
            if (param.reused != null)
            {
                return param.reused;
            } else {
                return "False";
            }
        } else {
            return "False";
        }
    }

    useEffect(() => {
        // console.log(props.launchpad)
        getLaunches();
        // console.log(launches)
    },[])

    function ListHeading () {
        return (
            <View style={{ marginHorizontal: windowWidth*0.025, marginVertical: 10 }}>
                <Text style={{ fontSize: 16, color: '#aaa', fontWeight: 'bold' }}>{launches.length} launch pads</Text>
            </View>
        )
    }

    return (
        <View style={{...styleConstant.screenContainer}}>
            {
                isLoading ?
                <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
                    <Text style={{...styleConstant.cardH2}}>Loading....</Text>
                </View>
                :
                <FlatList 
                 ListHeaderComponent={() => <ListHeading />}
                 style={{ marginHorizontal: windowWidth*0.025 }}
                 showsVerticalScrollIndicator={false}
                 data={launches}
                 renderItem={({ item }) => (
                    <View style={{...styleConstant.card}}>
                        <Text style={{...styleConstant.cardH1}}>Name: {item.name}</Text>
                        <Text style={{...styleConstant.cardH3, borderBottomColor: '#ddd', borderBottomWidth: 1, paddingVertical: 10}}>Details: {item.details != null ? item.details : "Detils not available"}</Text>
                        <Text style={{...styleConstant.cardH3, borderBottomColor: '#ddd', borderBottomWidth: 1, paddingVertical: 10}}>Date: {printDate(item.static_fire_date_unix)}</Text>
                        <Text style={{...styleConstant.cardH3, borderBottomColor: '#ddd', borderBottomWidth: 0, paddingVertical: 10}}>Reused: {printReused(item.fairings)}</Text>
                    </View>
                 )}
                />
            }
        </View>
    )
}