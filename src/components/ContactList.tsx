import { View, Text, Image, Linking } from 'react-native'
import React from 'react'
import { Facebook, Instagram, Twitter } from 'lucide-react-native'

const ContactList = () => {
    const socialsLink = (address: string) => {
        Linking.openURL(address);
    }
    return (
        <View className='py-5'>
            <Text className='px-4 text-2xl font-semibold'>Contact List Component</Text>
            <View className='px-2 w-full'>
                {/* Start */}
                <View className='flex-1 items-center justify-start flex-row w-fit px-2 py-5 gap-4 border-b border-gray-300'>
                    <View>
                        <Image source={require('../assets/user.png')} className='w-20 h-20 border p-2 rounded-full border-gray-300' />
                    </View>
                    <View>
                        <Text className='w-full truncate text-xl leading-relaxed font-sans font-bold'>Jhon Doe</Text>
                        <Text className='text-gray-500 text-base'>Exp : 15 Years (2000-2025)</Text>
                        <View className='flex-1 items-center justify-start flex-row gap-2'>
                            <Text className='text-gray-500'>Socials :</Text>
                            <View className='flex-1 items-center justify-start flex-row gap-2'>
                                <Instagram onPress={() => socialsLink('https://instagram.com')} size={18} color={'#C13584'} />
                                <Facebook onPress={() => socialsLink('https://facebook.com')} size={18} color={'#1877F2'} />
                                <Twitter onPress={() => socialsLink('https://twitter.com')} size={18} color={'#1DA1F2'} />
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default ContactList