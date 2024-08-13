import React from 'react';
import { useRouter } from 'next/navigation'
import {
  AppstoreOutlined,
  MailOutlined,
  TeamOutlined,
  GiftOutlined,
  ProfileOutlined,
  SettingOutlined,
  HomeOutlined
} from '@ant-design/icons';
import classNames from 'classnames/bind';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import styles from './WorkbenchMenus.module.scss'

const cx = classNames.bind(styles)

type MenuItem = Required<MenuProps>['items'][number];
interface WorkbenchMenusProps {
  currentMenu: string,
}

const items: MenuItem[] = [
  {
    key: 'Dashboard',
    label: '管理中心',
    icon: <HomeOutlined />,
  },
  {
    key: 'Activity',
    label: '我的活动',
    icon: <GiftOutlined />,
  },
  {
    key: 'WinnerList',
    label: '中奖名单',
    icon: <ProfileOutlined />,
  },
  {
    key: 'CouponManagement',
    label: '核销管理',
    icon: <AppstoreOutlined />,
  },
  {
    key: 'UserManagement',
    label: '用户管理',
    icon: <AppstoreOutlined />,
  },
  {
    key: 'ComdManagement',
    label: '商品管理',
    icon: <AppstoreOutlined />,
  },
  {
    type: 'divider',
  },
  {
    key: 'AccountInfo',
    label: '账号信息',
    icon: <SettingOutlined />,
  },
  {
    key: 'ManagerInfo',
    label: '成员管理',
    icon: <TeamOutlined />,
  },
  {
    key: 'OptLogs',
    label: '操作日志',
    icon: <SettingOutlined />,
  },
  {
    key: 'grp',
    label: 'Group',
    type: 'group',
    children: [
      { key: '13', label: 'Option 13' },
      { key: '14', label: 'Option 14' },
    ],
  },
];

export default function WorkbenchMenus (props: WorkbenchMenusProps) {
  const { currentMenu } = props

  const router = useRouter();

  const handleClick: MenuProps['onClick'] = ({key}) => {
    console.log('click ', key);
    if (key === 'Dashboard') {
      router.push('/workbench', { scroll: false })
    } else {
      router.push(`/workbench/${key}`, { scroll: false })
    }
  };

  const defaultSelectedKeys = currentMenu ? [currentMenu] : []

  return (
    <Menu
      mode="inline"
      className={cx('Menus')}
      defaultSelectedKeys={defaultSelectedKeys}
      defaultOpenKeys={[currentMenu]}
      items={items}
      onClick={handleClick}
    />
  );
};
