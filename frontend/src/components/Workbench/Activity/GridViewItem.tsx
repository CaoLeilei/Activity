import React from 'react'
import classNames from 'classnames/bind'
import { Card, Button } from 'antd'
import { SendOutlined, SettingOutlined, EditOutlined, EllipsisOutlined } from  '@ant-design/icons';

import styles from './Activity.module.scss'

const cx = classNames.bind(styles)

const SettingButton: React.FC = props => {
  return (
    <Button type="text" icon={<SettingOutlined />} key="setting">
      设置
    </Button>
  )
}

const EditButton: React.FC = props => {
  return (
    <Button type="text" icon={<EditOutlined />} key="edit">
      编辑
    </Button>
  )
}

const PublishButton: React.FC = props => {
  return (
    <Button type="text" icon={<SendOutlined />} key="publish">
      发布
    </Button>
  )
}
export default function GridViewItem() {

  const itemAction = [
  ]

  return (
    <Card
      cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"/>}
      className={cx('GridView__Card')}
      actions={[
        <PublishButton key="publish" />,
        <EditButton key="edit" />,
        <SettingButton key="setting" />,
        // <EllipsisOutlined key="ellipsis" />,
      ]}
    >
    </Card>
  )
}
