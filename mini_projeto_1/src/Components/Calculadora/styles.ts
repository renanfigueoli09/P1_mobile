import { StyleSheet } from 'react-native'
export const styles = StyleSheet.create({
    buttons: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: '#5B5B5B',
        borderRadius: 20,
        paddingBottom: 7
    },
    button: {
        fontFamily: 'Roboto',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        minWidth: 90,
        minHeight: 90,
    },
    textButton: {
        color: "#F9F9F9",
        fontSize: 25,
    },
    results: {
        justifyContent: 'flex-end',
        alignItems: 'center',
        width: '100%',
        height: 350,
        backgroundColor: '#111010',
        borderRadius: 10
    },
    resultText: {
        fontFamily: "Roboto-Thin",
        fontWeight: '100',
        color: "#F9F9F9",
        fontSize: 80,
        alignSelf: 'flex-end',
    },
    historyText: {
        fontFamily: "Roboto-Thin",
        color: "#F9F9F9",
        fontSize: 20,
        marginBottom: 0,
        marginRight: 10,
        alignSelf: 'flex-end',
    }
});