"use strict";(self.webpackChunkreact_virtual_list=self.webpackChunkreact_virtual_list||[]).push([[904],{56778:function(r,n,e){var t;e.r(n),e.d(n,{demos:function(){return x}});var m=e(90228),I=e.n(m),M=e(87999),o=e.n(M),l=e(75271),i=e(69867),P=e(14813),D=e(90674),a=e.n(D),s=e(44395),c=e(82187),_=e.n(c),v=e(99529),x={"docs-components-react-vitual-list-demo-example":{component:l.memo(l.lazy(function(){return e.e(433).then(e.bind(e,1674))})),asset:{type:"BLOCK",id:"docs-components-react-vitual-list-demo-example",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(956).Z},"@ant-design/icons":{type:"NPM",value:"6.1.0"},antd:{type:"NPM",value:"5.29.3"},mockjs:{type:"NPM",value:"1.1.0"},react:{type:"NPM",value:"18.3.1"},"../index.tsx":{type:"FILE",value:e(73328).Z},classnames:{type:"NPM",value:"2.5.1"},"./index.module.css":{type:"FILE",value:e(3249).Z}},entry:"index.tsx"},context:{"../index.tsx":s,"./index.module.css":v,"@ant-design/icons":i,antd:P,mockjs:D,react:t||(t=e.t(l,2)),"/Users/didi/Documents/fronted-end-roadmap/front-book/22-npm-third-lib/src/react-virtual-list/index.tsx":s,classnames:c,"/Users/didi/Documents/fronted-end-roadmap/front-book/22-npm-third-lib/src/react-virtual-list/index.module.css":v},renderOpts:{compile:function(){var u=o()(I()().mark(function h(){var R,g=arguments;return I()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,e.e(228).then(e.bind(e,25228));case 2:return d.abrupt("return",(R=d.sent).default.apply(R,g));case 3:case"end":return d.stop()}},h)}));function f(){return u.apply(this,arguments)}return f}()}}}},35752:function(r,n,e){e.r(n),e.d(n,{demos:function(){return m}});var t=e(75271),m={}},44395:function(r,n,e){e.r(n),e.d(n,{ReactVirtualList:function(){return P}});var t=e(48305),m=e.n(t),I=e(82187),M=e.n(I),o=e(75271),l=e(99529),i=e(52676),P=function(a){var s,c,_=a.list,v=a.itemHeight,x=a.itemGap,u=x===void 0?0:x,f=a.overscan,h=f===void 0?5:f,R=a.className,g=a.style,b=a.itemKey,d=a.children,E=(0,o.useRef)(null),O=(0,o.useRef)(null),A=(0,o.useState)(0),L=m()(A,2),C=L[0],S=L[1],p=v+u,U=(s=(c=E.current)===null||c===void 0?void 0:c.clientHeight)!==null&&s!==void 0?s:0,N=Math.ceil(U/p),y=Math.max(Math.floor(C/p)-h,0),B=Math.min(y+N+h*2,_.length),W=y*p,j=(0,o.useMemo)(function(){return _.length*p-u},[_.length,p,u]),H=(0,o.useCallback)(function(){E.current&&(O.current||(O.current=requestAnimationFrame(function(){S(E.current.scrollTop),O.current=null})))},[]);return(0,i.jsxs)("div",{ref:E,className:M()(l.default["react-virtual-list"],R),style:g,onScroll:H,children:[(0,i.jsx)("div",{className:l.default["react-virtual-list-scroll"],style:{height:j}}),(0,i.jsx)("div",{className:l.default["react-real-list-container"],style:{transform:"translateY(".concat(W,"px)")},children:_.slice(y,B).map(function(K,F){var T=y+F;return(0,i.jsx)("div",{className:l.default["react-virtual-list-item"],style:{height:v,marginBottom:u},children:d(K,T)},b?b(K,T):T)})})]})}},99529:function(r,n,e){e.r(n),n.default={"react-virtual-list":"ijYMbwSAvEkDvzI_FrHN","react-virtual-list-scroll":"ia4vQQGvSE32zees6mSc","react-real-list-container":"tqt2Mi86JMjMymYpLuj0","react-virtual-list-item":"QT44jdRTANEk51FqdP98"}},80892:function(r,n,e){e.r(n),e.d(n,{texts:function(){return t}});const t=[{value:"ReactVirtualList",paraId:0,tocIndex:0},{value:" \u662F\u4E00\u4E2A ",paraId:0,tocIndex:0},{value:"\u9AD8\u6027\u80FD\u3001\u8F7B\u91CF\u7EA7\u7684\u865A\u62DF\u6EDA\u52A8\u5217\u8868\u7EC4\u4EF6",paraId:0,tocIndex:0},{value:"\uFF0C",paraId:0,tocIndex:0},{value:`
\u901A\u8FC7\u53EA\u6E32\u67D3\u53EF\u89C6\u533A\u57DF\u5185\u7684\u5143\u7D20\uFF0C\u5927\u5E45\u964D\u4F4E\u5927\u6570\u636E\u91CF\u5217\u8868\u7684 DOM \u6570\u91CF\uFF0C\u4ECE\u800C\u63D0\u5347\u6EDA\u52A8\u548C\u6E32\u67D3\u6027\u80FD\u3002`,paraId:0,tocIndex:0},{value:"\u9002\u7528\u4E8E\u4EE5\u4E0B\u573A\u666F\uFF1A",paraId:1,tocIndex:0},{value:"\u8D85\u957F\u5217\u8868\uFF08\u4E0A\u5343 / \u4E0A\u4E07\u6761\u6570\u636E\uFF09",paraId:2,tocIndex:0},{value:"\u56FA\u5B9A\u9AD8\u5EA6\u5217\u8868\u9879",paraId:2,tocIndex:0},{value:"\u6EDA\u52A8\u6027\u80FD\u654F\u611F\u9875\u9762",paraId:2,tocIndex:0},{value:"\u540E\u53F0\u7CFB\u7EDF / \u8868\u683C / \u65E5\u5FD7\u6D41 / \u6D88\u606F\u5217\u8868",paraId:2,tocIndex:0},{value:"\u{1F680} \u9AD8\u6027\u80FD\u865A\u62DF\u6EDA\u52A8",paraId:3,tocIndex:1},{value:"\u{1F4CF} \u56FA\u5B9A\u9AD8\u5EA6 + \u53EF\u914D\u7F6E\u95F4\u9694",paraId:3,tocIndex:1},{value:"\u{1F50D} \u652F\u6301 overscan \u9884\u6E32\u67D3",paraId:3,tocIndex:1},{value:"\u{1F9E9} Render Props \u6E32\u67D3\u6A21\u5F0F\uFF0C\u7075\u6D3B\u5EA6\u9AD8",paraId:3,tocIndex:1},{value:"\u{1F9E0} requestAnimationFrame \u5408\u5E76\u6EDA\u52A8\u66F4\u65B0\uFF0C\u907F\u514D\u9891\u7E41 setState",paraId:3,tocIndex:1},{value:"\u{1F3AF} \u652F\u6301\u81EA\u5B9A\u4E49 itemKey",paraId:3,tocIndex:1},{value:"ReactVirtualList",paraId:4,tocIndex:3},{value:" \u63A5\u6536\u4E00\u4E2A Props \u5BF9\u8C61\uFF0C\u7528\u4E8E\u63A7\u5236\u865A\u62DF\u5217\u8868\u7684\u6E32\u67D3\u884C\u4E3A\u3002",paraId:4,tocIndex:3},{value:"\u53C2\u6570\u540D",paraId:5,tocIndex:4},{value:"\u8BF4\u660E",paraId:5,tocIndex:4},{value:"\u7C7B\u578B",paraId:5,tocIndex:4},{value:"\u5FC5\u586B",paraId:5,tocIndex:4},{value:"\u9ED8\u8BA4\u503C",paraId:5,tocIndex:4},{value:"list",paraId:5,tocIndex:4},{value:"\u5217\u8868\u6570\u636E\u6E90",paraId:5,tocIndex:4},{value:"any[]",paraId:5,tocIndex:4},{value:"\u662F",paraId:5,tocIndex:4},{value:"-",paraId:5,tocIndex:4},{value:"itemHeight",paraId:5,tocIndex:4},{value:"\u5355\u4E2A\u5217\u8868\u9879\u9AD8\u5EA6\uFF08px\uFF09",paraId:5,tocIndex:4},{value:"number",paraId:5,tocIndex:4},{value:"\u662F",paraId:5,tocIndex:4},{value:"-",paraId:5,tocIndex:4},{value:"itemGap",paraId:5,tocIndex:4},{value:"\u5217\u8868\u9879\u4E4B\u95F4\u7684\u95F4\u9694\uFF08px\uFF09",paraId:5,tocIndex:4},{value:"number",paraId:5,tocIndex:4},{value:"\u5426",paraId:5,tocIndex:4},{value:"0",paraId:5,tocIndex:4},{value:"overscan",paraId:5,tocIndex:4},{value:"\u53EF\u89C6\u533A\u57DF\u4E0A\u4E0B\u989D\u5916\u6E32\u67D3\u7684\u9879\u6570",paraId:5,tocIndex:4},{value:"number",paraId:5,tocIndex:4},{value:"\u5426",paraId:5,tocIndex:4},{value:"5",paraId:5,tocIndex:4},{value:"className",paraId:5,tocIndex:4},{value:"\u5BB9\u5668\u81EA\u5B9A\u4E49\u7C7B\u540D",paraId:5,tocIndex:4},{value:"string",paraId:5,tocIndex:4},{value:"\u5426",paraId:5,tocIndex:4},{value:"-",paraId:5,tocIndex:4},{value:"style",paraId:5,tocIndex:4},{value:"\u5BB9\u5668\u81EA\u5B9A\u4E49\u6837\u5F0F",paraId:5,tocIndex:4},{value:"React.CSSProperties",paraId:5,tocIndex:4},{value:"\u5426",paraId:5,tocIndex:4},{value:"-",paraId:5,tocIndex:4},{value:"itemKey",paraId:5,tocIndex:4},{value:"\u5217\u8868\u9879\u552F\u4E00 key \u751F\u6210\u51FD\u6570",paraId:5,tocIndex:4},{value:"(item: any, index: number) => React.Key",paraId:5,tocIndex:4},{value:"\u5426",paraId:5,tocIndex:4},{value:"-",paraId:5,tocIndex:4},{value:"children",paraId:5,tocIndex:4},{value:"\u5217\u8868\u9879\u6E32\u67D3\u51FD\u6570\uFF08Render Props\uFF09",paraId:5,tocIndex:4},{value:"(item: any, index: number) => React.ReactNode",paraId:5,tocIndex:4},{value:"\u662F",paraId:5,tocIndex:4},{value:"-",paraId:5,tocIndex:4},{value:`(item: any, index: number) => React.ReactNode
`,paraId:6,tocIndex:5},{value:"item",paraId:7,tocIndex:5},{value:"\uFF1A\u5F53\u524D\u5217\u8868\u9879\u6570\u636E",paraId:7,tocIndex:5},{value:"index",paraId:7,tocIndex:5},{value:"\uFF1A\u5F53\u524D\u9879\u5728\u539F\u59CB\u5217\u8868\u4E2D\u7684\u7D22\u5F15",paraId:7,tocIndex:5},{value:"\u5F53\u5217\u8868\u6570\u636E\u91CF\u8F83\u5927\u6216\u5217\u8868\u9879\u53EF\u80FD\u53D1\u751F\u91CD\u6392\u65F6\uFF0C\u5EFA\u8BAE\u63D0\u4F9B ",paraId:8,tocIndex:6},{value:"itemKey",paraId:8,tocIndex:6},{value:"\uFF0C\u4EE5\u907F\u514D\u4E0D\u5FC5\u8981\u7684\u91CD\u65B0\u6E32\u67D3\u3002",paraId:8,tocIndex:6},{value:`(item, index) => item.id
`,paraId:9,tocIndex:6}]},78190:function(r,n,e){e.r(n),e.d(n,{texts:function(){return t}});const t=[]},956:function(r,n){n.Z=`import { PhoneFilled } from '@ant-design/icons';
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
            \u63CF\u8FF0\uFF1A{item.description}
          </div>
        </Flex>
      )}
    </ReactVirtualList>
  );
};

export default Example;
`},3249:function(r,n){n.Z=`.react-virtual-list {
    width: 100%;
    height: 100%;
    overflow-y: auto;
    position: relative;
}

.react-virtual-list-scroll {
    position: absolute;
    width: 100%;
}

.react-real-list-container {
    position: absolute;
    width: 100%;
}

.react-virtual-list-item {
    box-sizing: border-box;
}`},73328:function(r,n){n.Z=`import cls from 'classnames';
import React, { useCallback, useMemo, useRef, useState } from 'react';
import styles from './index.module.css';

/**
 * \u865A\u62DF\u6EDA\u52A8\u5217\u8868\u7EC4\u4EF6
 * @template T \u5217\u8868\u9879\u7C7B\u578B
 * @param list \u6570\u636E\u5217\u8868
 * @param itemHeight \u6BCF\u4E00\u9879\u7684\u9AD8\u5EA6\uFF08\u5FC5\u586B\uFF09
 * @param itemGap \u6BCF\u4E00\u9879\u7684\u95F4\u9694\uFF08\u9ED8\u8BA40\uFF09
 * @param overscan \u989D\u5916\u6E32\u67D3\u7684\u53EF\u89C6\u533A\u57DF\u5916\u7684\u5143\u7D20\u6570\uFF08\u9ED8\u8BA45\uFF09
 * @param className \u5BB9\u5668\u81EA\u5B9A\u4E49\u7C7B\u540D
 * @param style \u5BB9\u5668\u81EA\u5B9A\u4E49\u6837\u5F0F
 * @param itemKey \u81EA\u5B9A\u4E49\u6BCF\u4E00\u9879\u7684\u552F\u4E00key\u751F\u6210\u51FD\u6570
 * @param children \u6E32\u67D3\u6BCF\u4E00\u9879\u7684\u6E32\u67D3\u51FD\u6570 (item, index) => ReactNode
 */
interface ReactVirtualListProps<T = any> {
  /**
   * \u6570\u636E\u5217\u8868
   */
  list: T[];
  /**
   * \u6BCF\u4E00\u9879\u7684\u9AD8\u5EA6\uFF08px\uFF09
   */
  itemHeight: number;
  /**
   * \u6BCF\u4E00\u9879\u7684\u95F4\u9694\uFF08px\uFF09
   * @default 0
   */
  itemGap?: number;
  /**
   * \u989D\u5916\u6E32\u67D3\u7684\u53EF\u89C6\u533A\u57DF\u5916\u7684\u5143\u7D20\u6570
   * @default 5
   */
  overscan?: number;
  /**
   * \u5BB9\u5668\u81EA\u5B9A\u4E49\u7C7B\u540D
   */
  className?: string;
  /**
   * \u5BB9\u5668\u81EA\u5B9A\u4E49\u6837\u5F0F
   */
  style?: React.CSSProperties;
  /**
   * \u81EA\u5B9A\u4E49\u6BCF\u4E00\u9879\u7684\u552F\u4E00key\u751F\u6210\u51FD\u6570
   * @param item \u5F53\u524D\u9879
   * @param index \u5F53\u524D\u9879\u7684\u5168\u5C40\u7D22\u5F15
   * @returns React.Key
   */
  itemKey?: (item: T, index: number) => React.Key;
  /**
   * \u6E32\u67D3\u6BCF\u4E00\u9879\u7684\u6E32\u67D3\u51FD\u6570
   * @param item \u5F53\u524D\u9879
   * @param index \u5F53\u524D\u9879\u7684\u5168\u5C40\u7D22\u5F15
   * @returns ReactNode
   */
  children: (item: T, index: number) => React.ReactNode;
}

const ReactVirtualList = <T,>({
  list,
  itemHeight,
  itemGap = 0,
  overscan = 5,
  className,
  style,
  itemKey,
  children,
}: ReactVirtualListProps<T>) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);

  const [scrollTop, setScrollTop] = useState(0);

  const itemSize = itemHeight + itemGap;

  /** \u5BB9\u5668\u9AD8\u5EA6 */
  const containerHeight = containerRef.current?.clientHeight ?? 0;

  /** \u53EF\u89C6\u6570\u91CF */
  const visibleCount = Math.ceil(containerHeight / itemSize);

  /** \u8D77\u59CB\u7D22\u5F15 */
  const startIndex = Math.max(Math.floor(scrollTop / itemSize) - overscan, 0);

  /** \u7ED3\u675F\u7D22\u5F15 */
  const endIndex = Math.min(
    startIndex + visibleCount + overscan * 2,
    list.length,
  );

  /** \u504F\u79FB\u91CF */
  const offsetY = startIndex * itemSize;

  /** \u603B\u9AD8\u5EA6 */
  const totalHeight = useMemo(() => {
    return list.length * itemSize - itemGap;
  }, [list.length, itemSize, itemGap]);

  /** \u6EDA\u52A8\u5904\u7406\uFF08rAF \u5408\u5E76\uFF09 */
  const handleScroll = useCallback(() => {
    if (!containerRef.current) return;

    if (rafRef.current) return;

    rafRef.current = requestAnimationFrame(() => {
      setScrollTop(containerRef.current!.scrollTop);
      rafRef.current = null;
    });
  }, []);

  return (
    <div
      ref={containerRef}
      className={cls(styles['react-virtual-list'], className)}
      style={style}
      onScroll={handleScroll}
    >
      {/* \u5360\u4F4D\u5C42 */}
      <div
        className={styles['react-virtual-list-scroll']}
        style={{ height: totalHeight }}
      />

      {/* \u5B9E\u9645\u6E32\u67D3\u5C42 */}
      <div
        className={styles['react-real-list-container']}
        style={{
          transform: \`translateY(\${offsetY}px)\`,
        }}
      >
        {list.slice(startIndex, endIndex).map((item, index) => {
          const realIndex = startIndex + index;
          return (
            <div
              key={itemKey ? itemKey(item, realIndex) : realIndex}
              className={styles['react-virtual-list-item']}
              style={{
                height: itemHeight,
                marginBottom: itemGap,
              }}
            >
              {children(item, realIndex)}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export { ReactVirtualList, type ReactVirtualListProps };
`}}]);
