import { View, Text, Button, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const FlatCard = () => {
    const colorCards = [
        {
            id: 1,
            text: "Red",
            color: "bg-red-400"
        },
        {
            id: 2,
            text: "Blue",
            color: "bg-blue-400"
        },
        {
            id: 3,
            text: "Green",
            color: "bg-green-400"
        },
        {
            id: 4,
            text: "Yellow",
            color: "bg-amber-400"
        },
    ]
    return (
        <View>
            <Text className='text-xl font-bold font-mono'>
                Scrollable Card
            </Text>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                {
                    colorCards.map(({ id, text, color }) => {
                        return (
                            <View key={id} className={`h-[100] w-[100] border rounded-full ${color} flex-1 items-center justify-center m-2`}>
                                <Text className='text-white'>{text}</Text>
                            </View>
                        )
                    })
                }
            </ScrollView >
        </View>
    )
}

export default FlatCard