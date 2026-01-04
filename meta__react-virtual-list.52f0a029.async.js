"use strict";(self.webpackChunkreact_virtual_list_library=self.webpackChunkreact_virtual_list_library||[]).push([[803],{98531:function(i,n,e){var d;e.r(n),e.d(n,{demos:function(){return I}});var E=e(90228),a=e.n(E),o=e(87999),s=e.n(o),m=e(75271),D=e(69867),t=e(14813),c=e(90674),v=e.n(c),l=e(44395),_=e(99529),I={"react-virtual-list-demo-example":{component:m.memo(m.lazy(function(){return e.e(243).then(e.bind(e,1674))})),asset:{type:"BLOCK",id:"react-virtual-list-demo-example",refAtomIds:["react-virtual-list"],dependencies:{"index.tsx":{type:"FILE",value:e(956).Z},"@ant-design/icons":{type:"NPM",value:"6.1.0"},antd:{type:"NPM",value:"5.29.3"},mockjs:{type:"NPM",value:"1.1.0"},react:{type:"NPM",value:"18.3.1"},"../index.tsx":{type:"FILE",value:e(73328).Z},"./index.module.css":{type:"FILE",value:e(3249).Z}},entry:"index.tsx"},context:{"../index.tsx":l,"./index.module.css":_,"@ant-design/icons":D,antd:t,mockjs:c,react:d||(d=e.t(m,2)),"/Users/didi/Documents/fronted-end-roadmap/front-book/22-npm-third-lib/src/react-virtual-list/index.tsx":l,"/Users/didi/Documents/fronted-end-roadmap/front-book/22-npm-third-lib/src/react-virtual-list/index.module.css":_},renderOpts:{compile:function(){var u=s()(a()().mark(function f(){var h,b=arguments;return a()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(228).then(e.bind(e,25228));case 2:return r.abrupt("return",(h=r.sent).default.apply(h,b));case 3:case"end":return r.stop()}},f)}));function x(){return u.apply(this,arguments)}return x}()}}}},44395:function(i,n,e){e.r(n),e.d(n,{ReactVirtualList:function(){return m}});var d=e(48305),E=e.n(d),a=e(75271),o=e(99529),s=e(52676),m=function(t){var c,v,l=t.list,_=t.itemHeight,I=t.itemGap,u=I===void 0?0:I,x=t.overscan,f=x===void 0?5:x,h=t.className,b=t.style,g=t.itemKey,r=t.children,R=(0,a.useRef)(null),M=(0,a.useRef)(null),L=(0,a.useState)(0),T=E()(L,2),S=T[0],K=T[1],p=_+u,A=(c=(v=R.current)===null||v===void 0?void 0:v.clientHeight)!==null&&c!==void 0?c:0,C=Math.ceil(A/p),y=Math.max(Math.floor(S/p)-f,0),U=Math.min(y+C+f*2,l.length),N=y*p,j=(0,a.useMemo)(function(){return l.length*p-u},[l.length,p,u]),B=(0,a.useCallback)(function(){R.current&&(M.current||(M.current=requestAnimationFrame(function(){K(R.current.scrollTop),M.current=null})))},[]);return(0,s.jsxs)("div",{ref:R,className:"".concat(o.default["react-virtual-list"]," ").concat(h),style:b,onScroll:B,children:[(0,s.jsx)("div",{className:o.default["react-virtual-list-scroll"],style:{height:j}}),(0,s.jsx)("div",{className:o.default["react-real-list-container"],style:{transform:"translateY(".concat(N,"px)")},children:l.slice(y,U).map(function(O,H){var P=y+H;return(0,s.jsx)("div",{className:o.default["react-virtual-list-item"],style:{height:_,marginBottom:u},children:r(O,P)},g?g(O,P):P)})})]})}},99529:function(i,n,e){e.r(n),n.default={"react-virtual-list":"ijYMbwSAvEkDvzI_FrHN","react-virtual-list-scroll":"ia4vQQGvSE32zees6mSc","react-real-list-container":"tqt2Mi86JMjMymYpLuj0","react-virtual-list-item":"QT44jdRTANEk51FqdP98"}},8968:function(i,n,e){e.r(n),e.d(n,{texts:function(){return d}});const d=[{value:"ReactVirtualList",paraId:0,tocIndex:0},{value:" \u662F\u4E00\u4E2A ",paraId:0,tocIndex:0},{value:"\u9AD8\u6027\u80FD\u3001\u8F7B\u91CF\u7EA7\u7684\u865A\u62DF\u6EDA\u52A8\u5217\u8868\u7EC4\u4EF6",paraId:0,tocIndex:0},{value:"\uFF0C",paraId:0,tocIndex:0},{value:`
\u901A\u8FC7\u53EA\u6E32\u67D3\u53EF\u89C6\u533A\u57DF\u5185\u7684\u5143\u7D20\uFF0C\u5927\u5E45\u964D\u4F4E\u5927\u6570\u636E\u91CF\u5217\u8868\u7684 DOM \u6570\u91CF\uFF0C\u4ECE\u800C\u63D0\u5347\u6EDA\u52A8\u548C\u6E32\u67D3\u6027\u80FD\u3002`,paraId:0,tocIndex:0},{value:"\u9002\u7528\u4E8E\u4EE5\u4E0B\u573A\u666F\uFF1A",paraId:1,tocIndex:0},{value:"\u8D85\u957F\u5217\u8868\uFF08\u4E0A\u5343 / \u4E0A\u4E07\u6761\u6570\u636E\uFF09",paraId:2,tocIndex:0},{value:"\u56FA\u5B9A\u9AD8\u5EA6\u5217\u8868\u9879",paraId:2,tocIndex:0},{value:"\u6EDA\u52A8\u6027\u80FD\u654F\u611F\u9875\u9762",paraId:2,tocIndex:0},{value:"\u540E\u53F0\u7CFB\u7EDF / \u8868\u683C / \u65E5\u5FD7\u6D41 / \u6D88\u606F\u5217\u8868",paraId:2,tocIndex:0},{value:"\u{1F680} \u9AD8\u6027\u80FD\u865A\u62DF\u6EDA\u52A8",paraId:3,tocIndex:1},{value:"\u{1F4CF} \u56FA\u5B9A\u9AD8\u5EA6 + \u53EF\u914D\u7F6E\u95F4\u9694",paraId:3,tocIndex:1},{value:"\u{1F50D} \u652F\u6301 overscan \u9884\u6E32\u67D3",paraId:3,tocIndex:1},{value:"\u{1F9E9} Render Props \u6E32\u67D3\u6A21\u5F0F\uFF0C\u7075\u6D3B\u5EA6\u9AD8",paraId:3,tocIndex:1},{value:"\u{1F9E0} requestAnimationFrame \u5408\u5E76\u6EDA\u52A8\u66F4\u65B0\uFF0C\u907F\u514D\u9891\u7E41 setState",paraId:3,tocIndex:1},{value:"\u{1F3AF} \u652F\u6301\u81EA\u5B9A\u4E49 itemKey",paraId:3,tocIndex:1},{value:"ReactVirtualList",paraId:4,tocIndex:3},{value:" \u63A5\u6536\u4E00\u4E2A Props \u5BF9\u8C61\uFF0C\u7528\u4E8E\u63A7\u5236\u865A\u62DF\u5217\u8868\u7684\u6E32\u67D3\u884C\u4E3A\u3002",paraId:4,tocIndex:3},{value:"\u53C2\u6570\u540D",paraId:5,tocIndex:4},{value:"\u8BF4\u660E",paraId:5,tocIndex:4},{value:"\u7C7B\u578B",paraId:5,tocIndex:4},{value:"\u5FC5\u586B",paraId:5,tocIndex:4},{value:"\u9ED8\u8BA4\u503C",paraId:5,tocIndex:4},{value:"list",paraId:5,tocIndex:4},{value:"\u5217\u8868\u6570\u636E\u6E90",paraId:5,tocIndex:4},{value:"any[]",paraId:5,tocIndex:4},{value:"\u662F",paraId:5,tocIndex:4},{value:"-",paraId:5,tocIndex:4},{value:"itemHeight",paraId:5,tocIndex:4},{value:"\u5355\u4E2A\u5217\u8868\u9879\u9AD8\u5EA6\uFF08px\uFF09",paraId:5,tocIndex:4},{value:"number",paraId:5,tocIndex:4},{value:"\u662F",paraId:5,tocIndex:4},{value:"-",paraId:5,tocIndex:4},{value:"itemGap",paraId:5,tocIndex:4},{value:"\u5217\u8868\u9879\u4E4B\u95F4\u7684\u95F4\u9694\uFF08px\uFF09",paraId:5,tocIndex:4},{value:"number",paraId:5,tocIndex:4},{value:"\u5426",paraId:5,tocIndex:4},{value:"0",paraId:5,tocIndex:4},{value:"overscan",paraId:5,tocIndex:4},{value:"\u53EF\u89C6\u533A\u57DF\u4E0A\u4E0B\u989D\u5916\u6E32\u67D3\u7684\u9879\u6570",paraId:5,tocIndex:4},{value:"number",paraId:5,tocIndex:4},{value:"\u5426",paraId:5,tocIndex:4},{value:"5",paraId:5,tocIndex:4},{value:"className",paraId:5,tocIndex:4},{value:"\u5BB9\u5668\u81EA\u5B9A\u4E49\u7C7B\u540D",paraId:5,tocIndex:4},{value:"string",paraId:5,tocIndex:4},{value:"\u5426",paraId:5,tocIndex:4},{value:"-",paraId:5,tocIndex:4},{value:"style",paraId:5,tocIndex:4},{value:"\u5BB9\u5668\u81EA\u5B9A\u4E49\u6837\u5F0F",paraId:5,tocIndex:4},{value:"React.CSSProperties",paraId:5,tocIndex:4},{value:"\u5426",paraId:5,tocIndex:4},{value:"-",paraId:5,tocIndex:4},{value:"itemKey",paraId:5,tocIndex:4},{value:"\u5217\u8868\u9879\u552F\u4E00 key \u751F\u6210\u51FD\u6570",paraId:5,tocIndex:4},{value:"(item: any, index: number) => React.Key",paraId:5,tocIndex:4},{value:"\u5426",paraId:5,tocIndex:4},{value:"-",paraId:5,tocIndex:4},{value:"children",paraId:5,tocIndex:4},{value:"\u5217\u8868\u9879\u6E32\u67D3\u51FD\u6570\uFF08Render Props\uFF09",paraId:5,tocIndex:4},{value:"(item: any, index: number) => React.ReactNode",paraId:5,tocIndex:4},{value:"\u662F",paraId:5,tocIndex:4},{value:"-",paraId:5,tocIndex:4},{value:`(item: any, index: number) => React.ReactNode
`,paraId:6,tocIndex:5},{value:"item",paraId:7,tocIndex:5},{value:"\uFF1A\u5F53\u524D\u5217\u8868\u9879\u6570\u636E",paraId:7,tocIndex:5},{value:"index",paraId:7,tocIndex:5},{value:"\uFF1A\u5F53\u524D\u9879\u5728\u539F\u59CB\u5217\u8868\u4E2D\u7684\u7D22\u5F15",paraId:7,tocIndex:5},{value:"\u5F53\u5217\u8868\u6570\u636E\u91CF\u8F83\u5927\u6216\u5217\u8868\u9879\u53EF\u80FD\u53D1\u751F\u91CD\u6392\u65F6\uFF0C\u5EFA\u8BAE\u63D0\u4F9B ",paraId:8,tocIndex:6},{value:"itemKey",paraId:8,tocIndex:6},{value:"\uFF0C\u4EE5\u907F\u514D\u4E0D\u5FC5\u8981\u7684\u91CD\u65B0\u6E32\u67D3\u3002",paraId:8,tocIndex:6},{value:`(item, index) => item.id
`,paraId:9,tocIndex:6}]},956:function(i,n){n.Z=`import { PhoneFilled } from '@ant-design/icons';
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
`},3249:function(i,n){n.Z=`.react-virtual-list {
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
}`},73328:function(i,n){n.Z=`import React, { useCallback, useMemo, useRef, useState } from 'react';
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
      className={\`\${styles['react-virtual-list']} \${className}\`}
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
