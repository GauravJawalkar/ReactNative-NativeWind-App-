import React from 'react'
import { Alert, Pressable, SafeAreaView, Text, ToastAndroid, useColorScheme, View } from 'react-native'
import FlatCard from '../components/FlatCard'

const NewScreen = () => {
    return (
        <>
            <View className='flex-1 flex-row items-center justify-center dark:bg-neutral-800'>
                <Pressable onPress={() => {
                    Alert.alert(
                        "Pressed Me",
                        "How Hard",
                        [
                            {
                                text: "Cancel",
                                onPress: () => console.log("Cancel Pressed"),
                                style: "cancel"
                            },
                            {
                                text: "Delete",
                                onPress: () => console.log("Delete Pressed"),
                                style: "destructive"
                            }
                        ]
                    )
                }} className='border py-2 px-4 rounded-lg bg-gray-100 border-gray-300 dark:bg-neutral-900/70 dark:border-neutral-700'>
                    <Text className='capitalize text-gray-700 dark:text-neutral-300'>
                        click me native
                    </Text>
                </Pressable>
                <FlatCard />
            </View >
        </>
    )
}

export default NewScreen