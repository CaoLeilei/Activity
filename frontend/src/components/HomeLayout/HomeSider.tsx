import React from 'react'
import type { MenuProps } from 'antd';
import classNames from 'classnames/bind';
import { AppstoreOutlined, ArrowRightOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import styles from './HomeSider.module.scss'

const cx = classNames.bind(styles)

type MenuItem = Required<MenuProps>['items'][number];

export default function HomeSider() {
  return (
    <div className={styles.Module}>
      <div className={styles.MenuGroup}>
        <div className={styles.MenuGroup__Title}>
          <span>活动分类</span>
        </div>
        <div className={styles.MenuGroup__Body}>
          <div className={styles.Menus}>
            <div className={cx(['Menus__Item', 'IsActive'])}>
              <div className={styles.Menus__ItemLeft}>
                <div className={cx('Menus__ItemIcon')}>
                  <AppstoreOutlined />
                </div>
                <span>抽奖活动</span>
              </div>
            </div>
            <div className={styles.Menus__Item}>
              <div className={styles.Menus__ItemLeft}>
                <AppstoreOutlined />
                <span>裂变引流</span>
              </div>
            </div>
            <div className={styles.Menus__Item}>
              <div className={styles.Menus__ItemLeft}>
                <AppstoreOutlined />
                <span>红包活动</span>
              </div>
            </div>
            <div className={styles.Menus__Item}>
              <div className={styles.Menus__ItemLeft}>
                <AppstoreOutlined />
                <span>投票竞猜</span>
              </div>
            </div>
            <div className={styles.Menus__Item}>
              <div className={styles.Menus__ItemLeft}>
                <AppstoreOutlined />
                <span>答题活动</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.MenuGroup}>
        <div className={styles.MenuGroup__Title}>
          <span>创意设计</span>
        </div>
        <div className={styles.MenuGroup__Body}>
          <div className={styles.Menus}>
            <div className={styles.Menus__Item}>
              <AppstoreOutlined />
              <span>H5</span>
            </div>
            <div className={styles.Menus__Item}>
              <AppstoreOutlined />
              <span>海报</span>
            </div>
            <div className={styles.Menus__Item}>
              <AppstoreOutlined />
              <span>长页</span>
            </div>
            <div className={styles.Menus__Item}>
              <AppstoreOutlined />
              <span>表单</span>
            </div>
            <div className={styles.Menus__Item}>
              <AppstoreOutlined />
              <span>电子画册</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
