import { Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import styles from './OnboardingScreen.styles'

const OnboardingScreen = () => {
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>

                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ width: 50, height: 50, borderRadius: 50 / 2, backgroundColor: 'grey', marginRight: 8 }}></View>
                    <Text style={{ fontFamily: 'Manrope', color: 'grey' }}>Hallo,
                        <Text style={{ fontFamily: 'Manrope', color: 'grey', fontWeight: '600' }}>Beta</Text></Text>
                </View>

                <TouchableOpacity style={{ width: 40, alignItems: 'center', padding: 4 }}>
                    <Text style={{ fontFamily: 'IcoMoon-Free', fontSize: 24, color: '#131313' }}></Text>
                </TouchableOpacity>


            </View>

            <View style={{ borderBottomColor: 'black', borderBottomWidth: 2, margin: 10 }} />

            <View style={{ padding: 6 }}>
                <Text style={{ fontFamily: 'Manrope', fontSize: 40, marginHorizontal: 40 }}>Simpli</Text>

                <View style={{
                    flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', paddingHorizontal: 30
                }}>
                    <Text style={{ fontFamily: 'Manrope', textAlign: 'right', fontSize: 40, marginRight: 30 }}>Notes </Text>
                    <Text>/10</Text>
                </View>



            </View >
        </View >
    )
}

export default OnboardingScreen

