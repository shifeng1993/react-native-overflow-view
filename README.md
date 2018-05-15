# react-native-overflow-view
[![NPM Version](https://img.shields.io/npm/v/react-native-overflow-view.svg?style=flat)](https://www.npmjs.com/package/react-native-overflow-view)
  [![License](http://img.shields.io/npm/l/react-native-overflow-view.svg?style=flat)](https://github.com/shifeng1993/react-native-overflow-view/blob/master/LICENSE)
  
一个View封装的容器组件。可以使android子组件像ios一样溢出容器。

## 安装步骤

1. 安装依赖
  ```bash
  yarn add react-native-overflow-view
  ```
  或者
  ```bash
  npm install react-native-overflow-view --save
  ```
2. link
```bash
  react-native link react-native-overflow-view
```

3. 使用组件
```javascript
import React, {Component} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import View from 'react-native-overflow-view';

export default class Home extends Component {
  render() {
    return (
      <View
        style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
      }}>
        <View
          style={{
          height: 400,
          width: 300,
          backgroundColor: '#fff',
          position: 'relative'
        }} removeClippedSubviews={true} >
          <Text style={{
            position:'absolute',
            right: -10
          }}>
            helo
          </Text>
        </View>
      </View>
    );
  }
}
```

## 历史版本特性
#### 1.0.1  文档bug修复
#### 1.0.0  正式版本发布
#### 0.1.0  测试版本

