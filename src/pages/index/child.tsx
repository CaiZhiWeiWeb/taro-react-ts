import { View, Text } from '@tarojs/components'
import React from 'react';

interface Iprops {
  userName: string
}

function Child({ userName }: Iprops) { //{userName}:{userName:string}单个
  return (
    <View>
      <Text>this is Child --{userName}</Text>
    </View>
  )
}

export default Child
