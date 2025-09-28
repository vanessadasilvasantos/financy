import { View, Text, StyleSheet } from "react-native";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';


const Releases = () => {
    return(
        <View style={styles.releaseContainer}>
            <View style={styles.releaseIconContainer}>
                <View style={styles.releaseIcon}>
                    <FontAwesome6 name="basket-shopping" size={18} color="#DA4BDD" />
                </View>
                <View>
                    <Text style={styles.releaseTitle}>Mercado</Text>
                    <Text style={styles.releaseDate}>08/25/2006</Text>
                </View>
            </View>
            <View style={styles.releaseValueContainer}>
                <Text style={styles.releaseDate}>R$</Text>
                <Text style={styles.releaseValue}>450,00</Text>
                <MaterialIcons name="keyboard-arrow-down" size={14} color="#D93A4A" style={{marginRight: 6}}/>
                <MaterialCommunityIcons name="trash-can-outline" size={16} color="#DA4BDD" />
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    releaseContainer: {
        display: 'flex',
        flexDirection: 'row',
        borderBottomColor: '#c9cac9ff',
        borderBottomWidth: 1,
        padding: 20,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    releaseIconContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
    },
    releaseIcon: {
        borderRadius: 6,
        backgroundColor: '#EFF0EF',
        borderWidth: 1,
        borderColor: '#E5E6E5',
        padding: 7.67,
    },
    releaseTitle: {
        fontWeight: 'bold',
        marginBottom: 3,
    },
    releaseDate: {
        fontSize: 12,
        color: '#676767',
        fontWeight: 'medium',
    },
    releaseValue: {
        fontWeight: 'bold',
        marginLeft: 4,
    },
    releaseValueContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
})

export default Releases