# react-virtual-list

轻量高性能的 React 虚拟列表组件

## Installation
npm install react-virtual-list

## Usage
```js
import { PhoneFilled } from '@ant-design/icons';
import { Avatar, Flex } from 'antd';
import { Random } from 'mockjs';
import React from 'react';
import { ReactVirtualList } from '../index';

const Example = () => {
  return (
    <ReactVirtualList
      style={{ height: '400px', width: '100%' }}
      itemHeight={100}
      itemGap={12}
      overscan={5}
      list={new Array(100).fill(0).map((_, index) => ({
        name: Random.cname(),
        avatar: Random.color(),
        id: Math.random().toString(36).substring(2, 9) + index,
        description: Random.csentence(5, 10),
        phone: Random.string('number', 11),
      }))}
    >
      {(item) => (
        <Flex
          style={{
            height: 100,
            padding: 12,
            border: '1px solid #eee',
            borderRadius: 8,
            boxSizing: 'border-box',
          }}
          gap={12}
          vertical
        >
          <Flex gap={6} align="center">
            <Avatar
              size={20}
              style={{ backgroundColor: item.avatar, fontSize: 14 }}
            >
              {item.name.slice(0, 1)}
            </Avatar>
            <span style={{ fontSize: 14, color: '#222', fontWeight: 500 }}>
              {item.name}
            </span>
          </Flex>
          <Flex
            style={{ fontSize: 12, color: '#006ff9' }}
            gap={6}
            align="center"
          >
            <span>{item.phone}</span>
            <PhoneFilled style={{ cursor: 'pointer' }} />
          </Flex>
          <div style={{ fontSize: 12, color: '#888' }}>
            描述：{item.description}
          </div>
        </Flex>
      )}
    </ReactVirtualList>
  );
};

export default Example;
```