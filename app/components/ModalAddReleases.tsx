import React from "react";
import { useState } from "react";
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const ModalAddReleases = ({handleClose }: {handleClose: () => void}) => {
    const [releaseType, setReleaseType] = useState('')

    return(
        <View style={{flex: 1,}}>
            <TouchableOpacity style={{flex: 1, zIndex: 9, width: '100%', backgroundColor: '#00000094', marginBottom: -50,}} onPress={handleClose}></TouchableOpacity>
            <View style={styles.container}>
                <View style={{display: 'flex', justifyContent: 'space-between', flexDirection: 'row', paddingTop: 8, paddingBottom: 28,}}>
                    <Text style={styles.title}>Novo lançamento</Text>
                    <TouchableOpacity onPress={handleClose}><AntDesign name="close" size={14} color="black" /></TouchableOpacity>
                </View>
                <View style={styles.inputsContainer}>
                    <TextInput style={styles.input} placeholder="Título da transição"/>
                    <TextInput style={styles.input} placeholder="Categoria"/>
                    <View style={{display: 'flex', flexDirection: 'row', gap: 12,}}>
                        <TextInput style={[styles.input, styles.inputFlex]} placeholder="0,00"/>
                        <TextInput style={[styles.input, styles.inputFlex]} placeholder="00/00/0000"/>
                    </View>

                    <View style={styles.btnReleasesType}>
                        <TouchableOpacity style={ releaseType === 'entrada' ? styles.btnReleasesTypeProhibitedSelected : styles.btnReleasesTypeProhibited } onPress={() => setReleaseType('entrada')}>
                            <Text style={ releaseType === 'entrada' ? styles.btnReleasesTypeProhibitedTextSelected : styles.btnReleasesTypeProhibitedText }>Entrada</Text>
                            <MaterialIcons name="keyboard-arrow-up" size={18} style={ releaseType === 'entrada' ? styles.btnReleasesTypeProhibitedTextSelected : styles.btnReleasesTypeProhibitedText } />
                        </TouchableOpacity>
                        <TouchableOpacity  onPress={() => setReleaseType('saida')} style={releaseType === 'saida' ? styles.btnReleasesTypeExitSelected : styles.btnReleasesTypeExit}>
                            <Text style={releaseType === 'saida' ? styles.btnReleasesTypeExitTextSelected : styles.btnReleasesTypeExitText}>Saída</Text>
                            <MaterialIcons name="keyboard-arrow-down" size={18} style={releaseType === 'saida' ? styles.btnReleasesTypeExitTextSelected : styles.btnReleasesTypeExitText}/>
                        </TouchableOpacity>
                    </View>
                </View>
                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.btnText}>Salvar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        padding: 32,
        borderRadius: 18,
        zIndex: 99,
    },
    input: {
        borderColor: '#E5E6E5',
        paddingLeft: 20,
        paddingVertical: 12,
        color: '#A1A2A1',
        borderRadius: 8,
        borderWidth: 1,
        backgroundColor: '#EFF0EF',
    },
    title: {
        textTransform: 'uppercase',
        fontWeight: 600,
        fontSize: 12,
    },
    inputFlex: {
        width: '50%',
    },
    inputsContainer: {
        display: 'flex',
        gap: 12,
    },
    btn: {
        backgroundColor: '#DA4BDD',
        padding: 12,
        borderRadius: 8,
    },
    btnText: {
        textAlign: 'center',
        fontWeight: 600,
        color: '#fff',
    },
    btnReleasesType: {
        display: 'flex',
        flexDirection: 'row',
        marginRight: 12,
        gap: 12,
        marginBottom: 28,
    },
    btnReleasesTypeProhibited: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#1FA342',
        backgroundColor: '#1FA3420d',
        width: '50%',
        borderRadius: 8,
        gap: 5,
        padding: 12,
    },
    btnReleasesTypeProhibitedText: {
        textAlign: 'center',
        color: '#1FA342',
        fontWeight: '400',
    },
    btnReleasesTypeProhibitedSelected: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#1FA342',
        backgroundColor: '#1FA342',
        width: '50%',
        borderRadius: 8,
        gap: 5,
        padding: 12,
    },
    btnReleasesTypeProhibitedTextSelected: {
        textAlign: 'center',
        color: '#fff',
        fontWeight: '400',
    },
     btnReleasesTypeExit: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#D93A4A',
        backgroundColor: '#d93a4a0d',
        width: '50%',
        borderRadius: 8,
        gap: 5,
        padding: 12,
    },
    btnReleasesTypeExitText: {
        textAlign: 'center',
        color: '#D93A4A',
        fontWeight: '400',
    },
    btnReleasesTypeExitSelected: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#D93A4A',
        backgroundColor: '#D93A4A',
        width: '50%',
        borderRadius: 8,
        gap: 5,
        padding: 12,
    },
    btnReleasesTypeExitTextSelected: {
        textAlign: 'center',
        color: '#fff',
        fontWeight: '400',
    },
})

export default ModalAddReleases