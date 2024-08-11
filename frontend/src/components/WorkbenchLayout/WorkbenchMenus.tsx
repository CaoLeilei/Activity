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
import type { MenuProps } from 'antd';
import { Menu } from 'antd';

type MenuItem = Required<MenuProps>['items'][number];
interface WorkbenchMenusProps {
  currentMenu?: string,
}

const items: MenuItem[] = [
  {
    key: 'Dashboard',
    label: '控制中心',
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

const App: React.FC = (props: WorkbenchMenusProps) => {
  const { currentMenu } = props

  const router = useRouter();

  const onClick: MenuProps['onClick'] = ({key}) => {
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
      onClick={onClick}
      style={{ width: 240 }}
      defaultSelectedKeys={defaultSelectedKeys}
      defaultOpenKeys={['sub1']}
      mode="inline"
      items={items}
    />
  );
};

export default App;