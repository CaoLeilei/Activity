import React from 'react'
import { Layout } from 'antd'
import HeaderMenu from './HeaderMenu'
import styles from './BaseLayout.module.scss'

const { Header, Content, Footer } = Layout
interface HomeLayoutProps {
  children: React.ReactNode
}
export default function HomeLayout(props: HomeLayoutProps) {

  const { children } = props

  return (
    <Layout className={styles.Layout}>
      <Header className={styles.Header}>
        <div className={styles.Header__Inner}>
          <div className={styles.Header_Left}>
            <div className={styles.Header__Logo}>
              <h1></h1>
            </div>
            <HeaderMenu />
          </div>
          <div className={styles.Header__Right}></div>
        </div>
      </Header>
      <Content className={styles.Content}>
      { children }
      </Content>
    </Layout>
  )
}
