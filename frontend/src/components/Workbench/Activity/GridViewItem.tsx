import React, { useReducer } from 'react'
import { useRouter } from 'next/navigation'
import classNames from 'classnames/bind'
import { Card, Button } from 'antd'
import { SendOutlined, SettingOutlined, EditOutlined, EllipsisOutlined } from  '@ant-design/icons';

import styles from './Activity.module.scss'

const cx = classNames.bind(styles)

interface ItemBtnProps {
  data: any
}

interface ActItemProps {
  data: any
}

const SettingButton: React.FC = props => {
  return (
    <Button type="text" icon={<SettingOutlined />} key="setting">
      设置
    </Button>
  )
}

const EditButton = (props: ItemBtnProps) => {
  const { data: { actId  = 1 } = {} } = props
  const router = useRouter()
  const handleClick = () => {
    router.push(`/workbench/Activity/${actId}/Edit`)
  }
  return (
    <Button type="text" icon={<EditOutlined />} key="edit" onClick={handleClick}>
      编辑
    </Button>
  )
}

const PublishButton = (props: ItemBtnProps) => {

  const submitPublish = async () => {
    console.log('submit publish')
  }

  return (
    <Button type="text" icon={<SendOutlined />} key="publish" onClick={() => { submitPublish() }}>
      发布
    </Button>
  )
}
export default function GridViewItem(props: ActItemProps) {

  const itemAction = [
  ]

  return (
    <Card
      cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"/>}
      className={cx('GridView__Card')}
      actions={[
        <PublishButton key="publish" data={props.data} />,
        <EditButton key="edit" data={props.data} />,
        <SettingButton key="setting" />,
        // <EllipsisOutlined key="ellipsis" />,
      ]}
    >
    </Card>
  )
}
