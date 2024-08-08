import React from 'react'
import { Layout } from 'antd'
import HomeHeader from './HomeHeader'

import styles from './HomeLayout.module.scss'

const { Header, Content, Footer } = Layout
interface HomeLayoutProps {
  children: React.ReactNode
}
export default function HomeLayout(props: HomeLayoutProps) {

  const { children } = props

  return (
    <Layout>
      <Header>
        <HomeHeader />
      </Header>
      <Content>
        <div className={styles.HomeLayout__Content}>
          { children }
        </div>
      </Content>
      <Footer></Footer>
    </Layout>
  )
}
