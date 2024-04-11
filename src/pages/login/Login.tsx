import { Card, Form, Input, Button, Checkbox, FormProps, Spin } from 'antd'
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import { useUserAuthContext } from '../usercontext';

import styles from './login.module.less'
// import { login } from './loginService';

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 20 },
};

const tailLayout = {
  // wrapperCol: { offset: 10, span: 14 },
};

type FieldType = {
  phone?: string;
  passwd?: string;
  remember?: string;
};


export default function Login() {
  const [logining, setLogining] = useState(false)
  const history = useHistory();

  const { login } = useUserAuthContext()!;

  const handleFinish = async (values: FieldType) => {
    try {
      console.log("handleFinish", values);
      let params = {
        phone: values.phone,
        passwd: values.passwd,
      }
      setLogining(true)
      let res = await login(params)
      console.log("handleFinish", res);

      history.push("/")
    } catch (error) {
      console.log("error", error);
    } finally {
      setLogining(false)
    }

  }

  return (
    <div className={styles.login}>
      <Card title="用户登录" className={styles.card}  >
        <Form {...layout}
          name="basic"
          initialValues={{ remember: true, phone: '13817252511', passwd: '111111' }}
          onFinish={handleFinish}

          labelCol={{ span: 8 }}
          style={{ maxWidth: 600 }}
          autoComplete={"off"}

        >
          <Form.Item
            label="账号"
            name="phone"

            rules={[{ required: true, message: '请输入账号!' }]}
          >
            <Input placeholder='输入账号' />
          </Form.Item>

          <Form.Item label="密码"
            name="passwd"
            rules={[{ required: true, message: "请输入密码" }]}
          >
            <Input placeholder='输入密码' />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }} name="remember" valuePropName='checked'>
            <Checkbox>记住我</Checkbox>
          </Form.Item>

          {logining === false ? (

            <Form.Item wrapperCol={{ offset: 8, span: 16 }} >
              <Button  {...tailLayout} type='primary' htmlType='submit'>提交</Button>
            </Form.Item>
          ) : (
            <Form.Item wrapperCol={{ offset: 8, span: 16 }} >
              <Spin></Spin>
            </Form.Item>
          )}


        </Form>
      </Card>
    </div>
  )
}
