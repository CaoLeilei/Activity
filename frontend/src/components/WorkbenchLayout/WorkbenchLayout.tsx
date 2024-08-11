import React from 'react'
import { Layout } from 'antd'
import classNames from 'classnames/bind';
import BaseLayout from '../BaseLayout/BaseLayout'
import WorkbenchMenus from './WorkbenchMenus'

import styles from './WorkbenchLayout.module.scss'

const cx = classNames.bind(styles);

interface WorkbenchLayoutProps {
  children?: React.ReactNode,
  currentMenu?: string,
}
export default function WorkbenchLayout(props: WorkbenchLayoutProps) {
  return (
    <BaseLayout>
    <Layout className={cx('Layout')}>
      <Layout.Sider theme="light" width={240} className={cx('Sider')}>
        <div className={cx('SiderInner')}>
          <WorkbenchMenus currentMenu={props.currentMenu} />
        </div>
      </Layout.Sider>
      <Layout.Content className={cx('Content')}>
        <div className={cx('ContentInner')}>
          {props.children}
        </div>
      </Layout.Content>
    </Layout>
    </BaseLayout>
  )
}
