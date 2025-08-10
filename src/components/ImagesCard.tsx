import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'

const ImagesCard = () => {
    return (
        <View>
            <Text className='text-xl font-bold font-mono'>
                Images Card
            </Text>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <View className='w-fit mr-4 border-gray-300 border rounded-lg'>
                    <View className='h-32 px-2 pt-2'>
                        <Image source={{ uri: "https://fastly.picsum.photos/id/26/4209/2769.jpg?hmac=vcInmowFvPCyKGtV7Vfh7zWcA_Z0kStrPDW3ppP0iGI" }} className='h-full w-full object-contain rounded-lg' />
                    </View>
                    <View className='p-2'>
                        <Text numberOfLines={2} className='text-sm text-gray-500'>Lorem ipsum dolor sit</Text>
                        <Text className='text-sm text-gray-500'>Card Description</Text>
                        <Text className='text-sm text-gray-500'>Location : Maharashtra , Pune-412201</Text>
                    </View>
                </View>
                <View className='w-fit mr-4 border-gray-300 border rounded-lg'>
                    <View className='h-32 px-2 pt-2'>
                        <Image source={{ uri: "https://fastly.picsum.photos/id/26/4209/2769.jpg?hmac=vcInmowFvPCyKGtV7Vfh7zWcA_Z0kStrPDW3ppP0iGI" }} className='h-full w-full object-contain rounded-lg' />
                    </View>
                    <View className='p-2'>
                        <Text className='text-sm text-gray-500'>Lorem ipsum dolor sit </Text>
                        <Text className='text-sm text-gray-500'>Card Description</Text>
                        <Text className='text-sm text-gray-500'>Location : Maharashtra , Pune-412201</Text>
                    </View>
                </View>
                <View className='w-fit mr-4 border-gray-300 border rounded-lg'>
                    <View className='h-32 px-2 pt-2'>
                        <Image source={{ uri: "https://fastly.picsum.photos/id/26/4209/2769.jpg?hmac=vcInmowFvPCyKGtV7Vfh7zWcA_Z0kStrPDW3ppP0iGI" }} className='h-full w-full object-contain rounded-lg' />
                    </View>
                    <View className='p-2'>
                        <Text className='text-sm text-gray-500'>Lorem ipsum dolor sit </Text>
                        <Text className='text-sm text-gray-500'>Card Description</Text>
                        <Text className='text-sm text-gray-500'>Location : Maharashtra , Pune-412201</Text>
                    </View>
                </View>
                <View className='w-fit mr-4 border-gray-300 border rounded-lg'>
                    <View className='h-32 px-2 pt-2'>
                        <Image source={{ uri: "https://fastly.picsum.photos/id/26/4209/2769.jpg?hmac=vcInmowFvPCyKGtV7Vfh7zWcA_Z0kStrPDW3ppP0iGI" }} className='h-full w-full object-contain rounded-lg' />
                    </View>
                    <View className='p-2'>
                        <Text className='text-sm text-gray-500'>Lorem ipsum dolor sit </Text>
                        <Text className='text-sm text-gray-500'>Card Description</Text>
                        <Text className='text-sm text-gray-500'>Location : Maharashtra , Pune-412201</Text>
                    </View>
                </View>
                <View className='w-fit mr-4 border-gray-300 border rounded-lg'>
                    <View className='h-32 px-2 pt-2'>
                        <Image source={{ uri: "https://fastly.picsum.photos/id/26/4209/2769.jpg?hmac=vcInmowFvPCyKGtV7Vfh7zWcA_Z0kStrPDW3ppP0iGI" }} className='h-full w-full object-contain rounded-lg' />
                    </View>
                    <View className='p-2'>
                        <Text className='text-sm text-gray-500'>Lorem ipsum dolor sit </Text>
                        <Text className='text-sm text-gray-500'>Card Description</Text>
                        <Text className='text-sm text-gray-500'>Location : Maharashtra , Pune-412201</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default ImagesCard