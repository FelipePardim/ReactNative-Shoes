import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';

import Dot from '../../components/Dot';
import SizeButton from '../../components/SizeButton';
import Button from '../../components/Button';
import Footer from '../../components/Footer';

export default function Detail({ navigation }) {
    return (
        <ScrollView>
            <Image
                source={require('../../assets/detail.png')}
                style={styles.image}
                resizeMode="cover"
            />

            <View>
                <View>
                    <Text style={[styles.title, { fontSize: 24 }]}>R$ 280,90</Text>
                </View>
                <View opacity={0.4}>
                    <Text style={[styles.title, { fontSize: 30 }]}>Nike Downshifter 10</Text>
                </View>

                <View style={styles.dotContainer}>
                    <Dot color='#2379f4' selected={ true }/>
                    <Dot color='#fb6e53' selected={ false }/>
                    <Dot color='#DDD' selected={ false }/>
                    <Dot color='#000' selected={ false }/>
                </View>

                <View style={{ flexDirection: 'row', width: '100%' }}>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <SizeButton selected={ true }>40</SizeButton>
                        <SizeButton selected={ false }>37</SizeButton>
                        <SizeButton selected={ false }>39</SizeButton>
                        <SizeButton selected={ false }>42</SizeButton>
                    </ScrollView>
                </View>

                <View>
                    <Text style={styles.textTitle}>
                        Nike Downshifter 10
                    </Text>
                    <Text style={styles.textContent}>
                        Lorem ipslumo oasokd asidinnw daso doa dojie idmwje b99ane asdwd iasj dieaid e i a
                    </Text>
                    <Text style={styles.textList}>
                        - Categoria: Amortecimento
                    </Text>
                    <Text style={styles.textList}>
                        - Material: Mesh
                    </Text>
                </View>

                <Button />

                <View style={styles.line} />

                <Footer />

            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#FFF'
    },
    image: {
        width: '100%'
    },
    title: {
        fontFamily: 'Anton_400Regular',
        paddingHorizontal: '2%'
    },
    dotContainer: {
        flexDirection: 'row',
        marginVertical: '7%',
        justifyContent: 'center',
    },
    textContent: {
        fontSize: 16,
        lineHeight: 26,
        marginVertical: '2%',
        paddingHorizontal: '2%'
    },
    textTitle: {
        fontSize: 26,
        marginVertical: '2%',
        marginHorizontal: '2%'
    },
    textList: {
        fontSize: 16,
        lineHeight: 25,
        marginHorizontal: '2%'
    },
    line: {
        borderWidth: 1,
        borderBottomColor: "#DDD",
        marginVertical: '2%'
    }
})