import React from 'react'
import { Card, Table, Button, Form, Select, TableProps, Space, Tag } from 'antd';


// interface DataType {
//   key: string;
//   name: string;
//   age: number;
//   address: string;
//   tags: string[];
// }

// const data: DataType[] = [
//   {
//     key: '1',
//     name: 'John Brown',
//     age: 32,
//     address: 'New York No. 1 Lake Park',
//     tags: ['nice', 'developer'],
//   },
//   {
//     key: '2',
//     name: 'Jim Green',
//     age: 42,
//     address: 'London No. 1 Lake Park',
//     tags: ['loser'],
//   },
//   {
//     key: '3',
//     name: 'Joe Black',
//     age: 32,
//     address: 'Sydney No. 1 Lake Park',
//     tags: ['cool', 'teacher'],
//   },
// ];

interface DataType {
  id: number;
  phone: string;

  jifen: number;
  // chujin: number;
  // zancunjin: number;
  qudao: string;
  c_time: number;
  // del_time: number;
}
// id int(11) primary key auto_increment,
//         phone varchar(11) COMMENT '手机号',
//         jifen int(10) COMMENT '积分',
//         chujin double COMMENT '储值金',
//         zancunjin double COMMENT '暂存金',
//         qudao varchar(300) COMMENT '渠道',
//         c_time timestamp default now() COMMENT '创建时间',
//         del int(1) COMMENT '删除标志',
//         del_time timestamp 

const columns: TableProps<DataType>['columns'] = [
  {
    title: 'Id',
    dataIndex: 'id',
    key: 'id',
    render: (text) => <a>{text}</a>,
  },
  {
    title: '手机号',
    dataIndex: 'phone',
    key: 'phone',
    render: (text) => <a>{text}</a>,
  },
  {
    title: '积分',
    dataIndex: 'jifen',
    key: 'jifen',
  },
  {
    title: '渠道',
    dataIndex: 'qudao',
    key: 'qudao',
    render: (text) => <a>{text}</a>,
  },
  // {
  //   title: 'Tags',
  //   key: 'tags',
  //   dataIndex: 'tags',
  //   render: (_, { tags }) => (
  //     <>
  //       {tags.map((tag) => {
  //         let color = tag.length > 5 ? 'geekblue' : 'green';
  //         if (tag === 'loser') {
  //           color = 'volcano';
  //         }
  //         return (
  //           <Tag color={color} key={tag}>
  //             {tag.toUpperCase()}
  //           </Tag>
  //         );
  //       })}
  //     </>
  //   ),
  // },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a>Invite {record.phone}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];

// id: number;
// phone: string;
// jifen: number;
// qudao: string;
// c_time: number;
 

const data: DataType[] = [
  {
    id: 1,
    phone: '128i9989',
    jifen: 80,
    qudao: "广告",
    c_time: new Date().getTime()
  },
  {
    id: 2,
    phone: '138i9989',
    jifen: 90,
    qudao: "广告",
    c_time: new Date().getTime()
  },
  {
    id: 3,
    phone: '158i9989',
    jifen: 100,
    qudao: "网络",
    c_time: new Date().getTime()
  },
];



export default function Member(props: any) {
  return (

    <Card title="会员列表">
      <Table columns={columns} dataSource={data} rowKey={(row:any)=>row.id} 
        pagination={{
            total: data.length,
            defaultPageSize: 2,
            current:1,
            onChange:(page:number, pageSize:number=2)=>{
              console.log("--------reload-------")
            }
            ,showTotal: (total:number)=>{return   `Total ${total} items.`}
        }}
      />
    </Card>
  )
}
