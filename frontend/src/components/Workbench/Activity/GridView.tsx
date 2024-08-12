import React from 'react'
import classNames from 'classnames/bind'
import { Card, Row, Col } from 'antd'
import GridViewItem from './GridViewItem'

import styles from './Activity.module.scss'

const cx = classNames.bind(styles)

export default function GridView() {
  return (
    <div className={cx('GridView')}>
      <Row gutter={16}>
        <Col span={4}>
          <GridViewItem />
        </Col>
      </Row>
    </div>
  )
}
