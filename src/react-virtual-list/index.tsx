import React, { useCallback, useMemo, useRef, useState } from 'react';
import styles from './index.module.css';

/**
 * 虚拟滚动列表组件
 * @template T 列表项类型
 * @param list 数据列表
 * @param itemHeight 每一项的高度（必填）
 * @param itemGap 每一项的间隔（默认0）
 * @param overscan 额外渲染的可视区域外的元素数（默认5）
 * @param className 容器自定义类名
 * @param style 容器自定义样式
 * @param itemKey 自定义每一项的唯一key生成函数
 * @param children 渲染每一项的渲染函数 (item, index) => ReactNode
 */
interface ReactVirtualListProps<T = any> {
  /**
   * 数据列表
   */
  list: T[];
  /**
   * 每一项的高度（px）
   */
  itemHeight: number;
  /**
   * 每一项的间隔（px）
   * @default 0
   */
  itemGap?: number;
  /**
   * 额外渲染的可视区域外的元素数
   * @default 5
   */
  overscan?: number;
  /**
   * 容器自定义类名
   */
  className?: string;
  /**
   * 容器自定义样式
   */
  style?: React.CSSProperties;
  /**
   * 自定义每一项的唯一key生成函数
   * @param item 当前项
   * @param index 当前项的全局索引
   * @returns React.Key
   */
  itemKey?: (item: T, index: number) => React.Key;
  /**
   * 渲染每一项的渲染函数
   * @param item 当前项
   * @param index 当前项的全局索引
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

  /** 容器高度 */
  const containerHeight = containerRef.current?.clientHeight ?? 0;

  /** 可视数量 */
  const visibleCount = Math.ceil(containerHeight / itemSize);

  /** 起始索引 */
  const startIndex = Math.max(Math.floor(scrollTop / itemSize) - overscan, 0);

  /** 结束索引 */
  const endIndex = Math.min(
    startIndex + visibleCount + overscan * 2,
    list.length,
  );

  /** 偏移量 */
  const offsetY = startIndex * itemSize;

  /** 总高度 */
  const totalHeight = useMemo(() => {
    return list.length * itemSize - itemGap;
  }, [list.length, itemSize, itemGap]);

  /** 滚动处理（rAF 合并） */
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
      className={`${styles['react-virtual-list']} ${className}`}
      style={style}
      onScroll={handleScroll}
    >
      {/* 占位层 */}
      <div
        className={styles['react-virtual-list-scroll']}
        style={{ height: totalHeight }}
      />

      {/* 实际渲染层 */}
      <div
        className={styles['react-real-list-container']}
        style={{
          transform: `translateY(${offsetY}px)`,
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
