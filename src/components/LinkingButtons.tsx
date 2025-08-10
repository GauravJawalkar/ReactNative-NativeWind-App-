import { View, Text, TouchableOpacity, Linking } from 'react-native'
import React from 'react'

const LinkingButtons = () => {
    const openWebsite = (websiteUrl: string) => {
        Linking.openURL(websiteUrl);
    }
    return (
        <View className='py-5 mx-5'>
            <TouchableOpacity onPress={() => openWebsite("https://instagram.com")} className='px-3 py-2 border h-fit text-center bg-blue-300 border-blue-600 rounded-xl'>
                <Text className='text-center text-white uppercase'>Open Instagram</Text>
            </TouchableOpacity>
        </View>
    )
}

export default LinkingButtons