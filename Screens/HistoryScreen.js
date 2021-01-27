import React, { useState } from "react";
import { View, StyleSheet, Text, FlatList, Button } from "react-native";

export default function HistoryScreen({ route }) {

    const { data } = route.params;

    return (
        <View style={styles.container}>
            <Text>History</Text>
            <FlatList
                data={data}
                renderItem={({ item }) =>
                    <Text>{item.key}</Text>}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        marginBottom: 100
    }
});