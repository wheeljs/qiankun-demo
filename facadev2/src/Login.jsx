import React, { useContext } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { Button, Form, Input } from 'antd';

import { GlobalStateProvider } from './globalState';
import './Login.css';

export default function Login() {
    const history = useHistory();
    const location = useLocation();
    const matched = location.search.match(/redirect=([^&]+)/);
    let redirectUrl = '/';
    if (matched != null) {
      redirectUrl = decodeURIComponent(matched[1]);
    }

    const [form] = Form.useForm();
    const globalState = useContext(GlobalStateProvider);

    const layout = {
        labelCol: { span: 4 },
        wrapperCol: { span: 20 }
    };

    const doLogin = values => {
        const logged = globalState.setGlobalState({
            user: values
        });
        if (logged) {
          // eslint-disable-next-line no-restricted-globals
          history.push(redirectUrl);
        }
    };

    return (<div className="login-container">
        <Form {...layout} form={form} onFinish={doLogin}>
            <Form.Item name="username" label="用户名">
                <Input />
            </Form.Item>
            <Form.Item name="avatar" label="头像">
                <Input />
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 4, span: 20 }}>
                <Button type="primary" htmlType="submit">登录</Button>
            </Form.Item>
        </Form>
    </div>);
}
