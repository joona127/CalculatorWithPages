import React, { useState } from "react";
import { View, StyleSheet, Text, FlatList, Button } from "react-native";

export default function HistoryScreen(props) {

    const { params } = props.navigation.state;

    return (
        <View style={styles.container}>
            <Text>History</Text>
            <FlatList
                data={params.data}
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