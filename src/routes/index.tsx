import Dashboard from '../pages/dashboard/Dashboard';
import { UserOutlined, LaptopOutlined, ProfileOutlined, UsergroupAddOutlined } from '@ant-design/icons';
import List from '../pages/member/Member';

export const tjRoutes = [
    //会员中心
    {
        path: "/admin/index",
        component: Dashboard,
        exact: true,
        isShow: true,
        title: "管理后台",
        icon: UsergroupAddOutlined,
        children: [
            {
                path: "/admin/member/list",
                component: List,
                exact: true,
                isShow: true,
                title: "会员",
                icon: LaptopOutlined,
            }
        ]
    },

 

]