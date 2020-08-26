import * as React from 'react';
import { View, Text, Image, Button, navigateTo } from 'remax/wechat';
import {useEffect, useState} from "react";

export default () => {
  return (
    <View>
      <Button onClick={() => navigateTo({url: '/pages/page2/index'})}>点我去page2</Button>
      {new Array(100).fill(0).map((_,i) => <Test key={i}/>)}
    </View>
  );
};

const Test = () => {
  const [a, setA] = useState(1);
  useEffect(() => {
    if (a < 90) {
      setA(a + 1)
    }
  }, [a])
  const b = a % 3;
  return b === 0 ? <View>233</View> : b === 1 ? <Image/> : b === 2 ? <Text>233</Text> : <Button>233</Button>
}
