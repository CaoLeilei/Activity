'use client'
import React, { use, useState } from 'react'
import classNames from 'classnames/bind';
import { Tabs, Radio, Button, RadioChangeEvent } from 'antd';
import { AppstoreOutlined, MenuOutlined, DeleteOutlined } from  '@ant-design/icons';
import WorkbenchLayout from '@/components/WorkbenchLayout/WorkbenchLayout'
import GridView from '@/components/Workbench/Activity/GridView';
import ListView from '@/components/Workbench/Activity/ListView';
import styles from './Activity.module.scss'

const cx = classNames.bind(styles)

// 活动状态
const ACT_STATUS = {
  ALL: 'ALL',
  UNPUBLISHED: 'UNPUBLISHED',
  UNSTART: 'UNSTART',
  INPROGRESS: 'INPROGRESS',
  END: 'END'
}

// 活动的展示形式
const ACT_VIEW_TYPES = {
  GRID: 'GRID',
  LIST: 'LIST'
}

export default function Activity() {

  const [activeStatus, setActiveStatus] = useState(ACT_STATUS.ALL)
  const [actViewType, setActViewType] = useState(ACT_VIEW_TYPES.GRID)

  const handleViewTypeChange = (e: RadioChangeEvent) => {
    const value: string = e.target.value as string
    console.log('handleViewTypeChange', e)
    setActViewType(value)
  }

  const items = [
    {
      key: ACT_STATUS.ALL,
      label: `全部`,
    },
    {
      key: ACT_STATUS.UNPUBLISHED,
      label: `未发布`,
    },
    {
      key: ACT_STATUS.UNSTART,
      label: `未开始`,
    },
    {
      key: ACT_STATUS.INPROGRESS,
      label: `进行中`,
    },
    {
      key: ACT_STATUS.END,
      label: `已结束`,
    },
  ];

  const onChange = (key: string) => {
    setActiveStatus(key)
  };

  return (
    <WorkbenchLayout currentMenu="Activity">
      <div className={cx('Header')}>
        <Tabs defaultActiveKey={ACT_STATUS.ALL} activeKey={activeStatus} className={cx('Header__Tabs')} items={items} onChange={onChange} />
        <div className={cx('Header__OptBox')}>
          <Radio.Group
            defaultValue={ACT_VIEW_TYPES.GRID}
            value={actViewType}
            className={cx('Header__ViewType')}
            buttonStyle="solid"
            onChange={handleViewTypeChange}
          >
            <Radio.Button value={ACT_VIEW_TYPES.GRID}>
              <AppstoreOutlined />
            </Radio.Button>
            <Radio.Button value={ACT_VIEW_TYPES.LIST}>
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
        { }
        <GridView />
      </div>
    </WorkbenchLayout>
  )
}
