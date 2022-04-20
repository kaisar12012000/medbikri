import { StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styleConstant = StyleSheet.create({
    screenContainer : {
        flex: 1,
        backgroundColor: "#fff"
    },
    row : {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 15,
        marginVertical: 10
    },
    screenHeader : {
        marginHorizontal: windowWidth*0.05,
        marginVertical: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    h1 : {
        fontSize: 26,
        fontWeight: 'bold',
        marginHorizontal: windowWidth*0.025
    },
    card : {
        // marginHorizontal: windowWidth*0.05,
        marginVertical: 10,
        paddingHorizontal: windowWidth*0.025,
        paddingVertical: 5,
        borderWidth: 1,
        borderColor: '#aaa',
        borderRadius: 8,
        // width: windowWidth/2.5,
        // height: windowHeight/8,
        justifyContent:'center',
        paddingHorizontal: windowWidth*0.05
    },
    cardH1 : {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        borderBottomColor: '#ddd',
        borderBottomWidth: 1,
        paddingBottom: 3
    },
    cardH2 : {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
        borderBottomColor: '#ddd',
        borderBottomWidth: 1,
        paddingBottom: 3
    },
    cardH3 : {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#333'
    },
    image : {
        width: windowWidth/2.5,
        height: windowHeight/3
    },
    tableData : {
        marginVertical: 10,
        paddingVertical: 5,
        borderBottomColor: '#ddd',
        borderBottomWidth: 1,
        marginHorizontal: windowWidth*0.025
    }
});

export default styleConstant;