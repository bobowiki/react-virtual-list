import '@testing-library/jest-dom';
import { fireEvent, render, waitFor } from '@testing-library/react';
import React from 'react';
import { ReactVirtualList, type ReactVirtualListProps } from './index';

describe('ReactVirtualList', () => {
  const list = Array.from({ length: 100 }, (_, i) => i + 1);
  const itemHeight = 30;
  const itemGap = 4;

  const renderItem: ReactVirtualListProps<number>['children'] = (item) => (
    <div data-testid={`item-${item}`}>{`Item ${item}`}</div>
  );

  it('should render first item', () => {
    const { getByTestId } = render(
      <ReactVirtualList
        list={list}
        itemHeight={itemHeight}
        itemGap={itemGap}
        style={{ height: 300 }}
      >
        {renderItem}
      </ReactVirtualList>,
    );
    expect(getByTestId('item-1')).toBeInTheDocument();
  });

  it('should render nothing when list is empty', () => {
    const { container } = render(
      <ReactVirtualList
        list={[]}
        itemHeight={itemHeight}
        itemGap={itemGap}
        style={{ height: 300 }}
      >
        {renderItem}
      </ReactVirtualList>,
    );
    expect(container.querySelectorAll('.react-virtual-list-item').length).toBe(
      0,
    );
  });

  it('should scroll and render new items', async () => {
    const { container, getByTestId } = render(
      <ReactVirtualList
        list={list}
        itemHeight={itemHeight}
        itemGap={itemGap}
        overscan={2}
        style={{ height: 300 }}
      >
        {renderItem}
      </ReactVirtualList>,
    );
    const scrollContainer = container.querySelector(
      '.react-virtual-list',
    ) as HTMLDivElement;
    fireEvent.scroll(scrollContainer, { target: { scrollTop: 300 } });
    await waitFor(() => {
      expect(getByTestId('item-10')).toBeInTheDocument();
    });
  });

  it('should render with itemGap=0', () => {
    const { container } = render(
      <ReactVirtualList
        list={list}
        itemHeight={itemHeight}
        itemGap={0}
        style={{ height: 300 }}
      >
        {renderItem}
      </ReactVirtualList>,
    );
    const items = container.querySelectorAll('.react-virtual-list-item');
    expect(items.length).toBeGreaterThan(0);
    items.forEach((el) => {
      expect(el).toHaveStyle('margin-bottom: 0px');
    });
  });

  it('should render with large overscan', () => {
    const { container } = render(
      <ReactVirtualList
        list={list}
        itemHeight={itemHeight}
        itemGap={itemGap}
        overscan={20}
        style={{ height: 300 }}
      >
        {renderItem}
      </ReactVirtualList>,
    );
    // overscan 大时渲染数量更多
    const items = container.querySelectorAll('.react-virtual-list-item');
    expect(items.length).toBeGreaterThan(10);
  });

  it('should use custom itemKey', () => {
    const { getByTestId } = render(
      <ReactVirtualList
        list={list}
        itemHeight={itemHeight}
        itemKey={(item) => `custom-key-${item}`}
        style={{ height: 300 }}
      >
        {renderItem}
      </ReactVirtualList>,
    );
    expect(getByTestId('item-1')).toBeInTheDocument();
  });

  it('should apply className and style', () => {
    const { container } = render(
      <ReactVirtualList
        list={list}
        itemHeight={itemHeight}
        className="my-list"
        style={{ height: 123, background: 'red' }}
      >
        {renderItem}
      </ReactVirtualList>,
    );
    const root = container.querySelector('.my-list');
    expect(root).toHaveStyle('height: 123px');
    expect(root).toHaveStyle('background: red');
  });

  it('should not crash when children returns null', () => {
    const { container } = render(
      <ReactVirtualList
        list={list}
        itemHeight={itemHeight}
        style={{ height: 300 }}
      >
        {() => null}
      </ReactVirtualList>,
    );
    expect(
      container.querySelectorAll('.react-virtual-list-item').length,
    ).toBeGreaterThan(0);
  });

  it('should handle itemHeight=0', () => {
    const { container } = render(
      <ReactVirtualList list={list} itemHeight={0} style={{ height: 300 }}>
        {renderItem}
      </ReactVirtualList>,
    );
    const items = container.querySelectorAll('.react-virtual-list-item');
    items.forEach((el) => {
      expect(el).toHaveStyle('height: 0px');
    });
  });

  it('should handle list with one item', () => {
    const { getByTestId } = render(
      <ReactVirtualList
        list={[42]}
        itemHeight={itemHeight}
        style={{ height: 300 }}
      >
        {renderItem}
      </ReactVirtualList>,
    );
    expect(getByTestId('item-42')).toBeInTheDocument();
  });
});
