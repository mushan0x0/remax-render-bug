import * as React from 'react';
import {View, Text, Image, Button, navigateTo} from 'remax/wechat';
import styles from './index.css';

export default () => {
  return (
    <View className={styles.app}>
      <Button onClick={() => navigateTo({url: '/pages/page1/index'})}>点我去page1</Button>
    </View>
  );
};
