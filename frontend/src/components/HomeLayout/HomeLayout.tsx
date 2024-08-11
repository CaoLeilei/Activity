import React from 'react'
import { Layout } from 'antd'
import BaseLayout from '../BaseLayout/BaseLayout'
import HomeSider from './HomeSider'
import styles from './HomeLayout.module.scss'

const { Header, Content, Footer } = Layout
interface HomeLayoutProps {
  children?: React.ReactNode
}
export default function HomeLayout(props: HomeLayoutProps) {

  const { children } = props

  return (
    <BaseLayout>
      <Layout className={styles.Container}>
        <Layout.Sider theme="light" width={240} className={styles.Sider}>
          <HomeSider />
        </Layout.Sider>
        <Layout.Content className={styles.Content}>
          <div className={styles.Content__Inner}>
          { children }
          </div>
        </Layout.Content>
      </Layout>
    </BaseLayout>
  )
}
