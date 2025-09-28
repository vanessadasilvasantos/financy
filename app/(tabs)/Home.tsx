import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import Feather from '@expo/vector-icons/Feather';
import Releases from '../components/Releases';


export default function HomeScreen() {
    const today = new Date()
    var todayMonth = today.toLocaleString('pt-BR', {month: 'long'})
    var todayYear = today.toLocaleString('pt-BR', {year: 'numeric'})

    return (
    <View style={styles.homeContainer}>
        <LinearGradient
            colors={["#0F0F0F", "#2D2D2D"]}
            style={styles.infoMonth}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
        >
            <View style={styles.headerInfo}>
                <View style={styles.dateInfo}>
                    <Text style={styles.month}>{todayMonth}</Text>
                    <Text style={styles.year}>/ {todayYear}</Text>
                </View>
                <Feather name="settings" size={16} color="white" />
            </View>
            <View style={styles.beforeHeaderInfo}></View>
            <Text style={styles.subTitle}>Orçamento dinsponível</Text>
            <TouchableOpacity style={styles.btn}>
                <Text style={styles.btnText}>Definir orçamento</Text>
            </TouchableOpacity>
            <View style={styles.valueInfo}>
                <View>
                    <Text style={styles.subTitle}>Usado</Text>
                    <Text style={styles.month}>R$0,00</Text>
                </View>
                <View>
                    <Text style={styles.subTitle}>Limite</Text>
                    <Text style={styles.month}>R$10,00</Text>
                </View>
            </View>
         </LinearGradient>
        <View style={styles.releasesContainer}>
            <View style={styles.releasesHeader}>
                <Text style={styles.releasesTitle}>Lançamentos</Text>
                <Text style={styles.badget}>0</Text>
            </View>
            <View style={styles.releasesBefore}></View>
            <View>
                <Releases/>
                <Releases/>
                <Releases/>
            </View>
        </View>
            <TouchableOpacity style={styles.btnAdd}>
                <Text style={styles.btnAddText}>+</Text>
            </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    homeContainer: {
        flex: 1,
        backgroundColor: '#EFF0EF',
    },
    month: {
        textTransform: 'uppercase',
        color: '#fff',
    },
    infoMonth: {
        margin: 16,
        marginTop: 25,
        padding: 27,
        borderRadius: 12,
    },
    headerInfo: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    dateInfo: {
        display: 'flex',
        flexDirection: 'row',
        gap: 6,
    },
    year: {
        color: '#A1A2A1',
    },
    subTitle: {
        color: '#A1A2A1',
    },
    beforeHeaderInfo: {
        height: 1,
        width: '98%',
        backgroundColor: '#f9fbf93f',
        marginVertical: 12,
    },
    btn: {
        borderColor: '#DC54DE',
        borderWidth: 1,
        paddingVertical: 12,
        borderRadius: 8,
        marginVertical: 12,
    },
    btnText: {
        textAlign: 'center',
        color: '#DC54DE',
        fontWeight: 'bold',
    },
    valueInfo: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 8,
        justifyContent: 'space-between',
    },
    releasesContainer: {
        borderColor: '#c9cac9ff',
        borderWidth: 1,
        borderRadius: 12,
        backgroundColor: '#F9FBF9',
        margin: 16,
    },
    releasesHeader: {
        display: 'flex',
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    releasesTitle: {
        color: '#676767',
        textTransform: 'uppercase',
    },
    badget: {
        color: '#494A49',
        backgroundColor: '#E5E6E5',
        paddingHorizontal: 8,
        borderRadius: '50%',
    },
    releasesBefore: {
        width: '100%',
        height: 1,
        backgroundColor: '#c9cac9ff',
        marginTop: 16,
    },
    btnAdd: {
        position: "absolute",
        bottom: 30,
        alignSelf: "center", 
        width: 60,
        height: 60,
        borderRadius: 30,       // deixa redondo
        backgroundColor: "#000",
        justifyContent: "center",
        alignItems: "center",
        elevation: 5,           // sombra no Android
        shadowColor: "#000",    // sombra no iOS
        shadowOpacity: 0.3,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
    },
    btnAddText: {
        color: '#fff',
        fontSize: 34,
        marginBottom: 6,
    }
})