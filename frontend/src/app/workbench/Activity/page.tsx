'use client'
import React from 'react'
import classNames from 'classnames/bind';
import { Tabs, Radio, Button } from 'antd';
import { AppstoreOutlined, MenuOutlined, DeleteOutlined } from  '@ant-design/icons';
import WorkbenchLayout from '@/components/WorkbenchLayout/WorkbenchLayout'
import GridView from '@/components/Workbench/Activity/GridView';
import ListView from '@/components/Workbench/Activity/ListView';
import styles from './Activity.module.scss'

const cx = classNames.bind(styles)

export default function Activity() {

  const items = [
    {
      key: '1',
      label: `全部`,
      children: '',
    },
    {
      key: '2',
      label: `未发布`,
      children: '',
    },
    {
      key: '3',
      label: `未开始`,
      children: '',
    },
    {
      key: '4',
      label: `进行中`,
      children: '',
    },
    {
      key: '5',
      label: `已结束`,
      children: '',
    },
  ];

  const onChange = (key: string) => {
    console.log(key);
  };

  return (
    <WorkbenchLayout>
      <div className={cx('Header')}>
        <Tabs defaultActiveKey="1" className={cx('Header__Tabs')} items={items} onChange={onChange} />
        <div className={cx('Header__OptBox')}>
          <Radio.Group defaultValue="a" className={cx('Header__ViewType')} buttonStyle="solid">
            <Radio.Button value="Grid">
              <AppstoreOutlined />
            </Radio.Button>
            <Radio.Button value="b">
              <MenuOutlined />
            </Radio.Button>
          </Radio.Group>
          <Button className={cx('Header__TrustBtn')}>
            <DeleteOutlined />
            <span>活动回收站</span>
          </Button>
        </div>
      </div>
      <div className={cx('Container')}>
        <GridView />
      </div>
    </WorkbenchLayout>
  )
}
