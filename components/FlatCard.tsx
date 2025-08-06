import { View, Text, Button, ScrollView } from 'react-native'
import React, { useState } from 'react'

const FlatCard = () => {
    const colorCards = [
        {
            id: 1,
            text: "Red",
            color: "red"
        },
        {
            id: 2,
            text: "Blue",
            color: "blue"
        },
        {
            id: 3,
            text: "Green",
            color: "green"
        },
        {
            id: 4,
            text: "Yellow",
            color: "amber"
        },
    ]
    return (
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {
                colorCards.map(({ id, text, color }) => {
                    return (
                        <View key={id} className={`h-[100] w-[100] border rounded-full ${`bg-${color}-400`} flex-1 items-center justify-center m-2`}>
                            <Text className='text-white'>{text}</Text>
                        </View>
                    )
                })
            }

        </ScrollView >
    )
}

export default FlatCard