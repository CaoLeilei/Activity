'use client'
import React, { useEffect, useState } from 'react'
import { throttle } from 'lodash'
import { Form, Layout } from 'antd'
import classNames from 'classnames/bind'

import styles from './ActivityEdit.module.scss'

const cx = classNames.bind(styles)

export default function ActivityEdit() {
  const [editSideWidth, setEditSideWidth] = useState(500)

  const computedEditWidth = () => {
    const docWidth = document.documentElement.clientWidth
    let asideWidth = docWidth - 420 - 120 - 240
    if (asideWidth < 500) {
      asideWidth = 500
    } else if (asideWidth > 700) {
      asideWidth = 700
    }
    setEditSideWidth(asideWidth)
  }

  useEffect(() => {
    //  获取浏览器宽度
    const handleResize = throttle(() => {
      computedEditWidth()
    }, 100)
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <Layout className={cx('Layout')}>
      <Layout.Header className={cx('Header')}></Layout.Header>
      <Layout className={cx('Container')}>
        <Layout.Sider width={120} theme="light"></Layout.Sider>
        <Layout.Sider width={240} theme="light"></Layout.Sider>

        <Layout.Content className={cx('Content')}>
          <div className={cx('ViewBox')}>
            <div className={cx('PhoneView')}></div>
          </div>
        </Layout.Content>
        <Layout.Sider width={editSideWidth} theme="light">
        </Layout.Sider>
      </Layout>
    </Layout>
  )
}
