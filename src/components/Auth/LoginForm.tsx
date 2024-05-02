import React from 'react';
import type { FormProps } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/navigation';

// Defining Input Data Types
type FieldType = {
    username?: string;
    password?: string;
};

const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
    console.log('Failed:', errorInfo);
};

const LoginForm: React.FC = () => {
    const [form] = Form.useForm();

    const router = useRouter();

    // Password Regex for 1 small 1 capital Letter 1 special char 1 num & min 8 char
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    // Onsubmit Function
    const onFinish = ({ username, password }: FieldType) => {
        // Simulating authentication
        if (password && !password.match(passwordRegex)) {
            toast.error('Password must be at least 8 characters long and include at least one lowercase letter, one uppercase letter, one number, and one special character');
        } else {
            if (username === 'phero@gmail.com' && password === 'Password1!') {
                // Mock successful login
                toast.success('Login successful!');
                router.push('/projects')
            } else {
                // Mock unsuccessful login
                toast.error('Invalid username or password');
            }
        }
    };

    return (
        <Form
            form={form}
            name="form_login"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            {/* Username Input Field */}
            <Form.Item
                label=""
                name="username"
                rules={[
                    { required: true, message: 'Please input your username!' },
                    { type: 'email', message: 'Please enter a valid email address' }
                ]}
            >
                <div>
                    <label className="block text-sm font-medium leading-6 text-gray-900">Username</label>
                    <Input prefix={<UserOutlined className="site-form-item-icon block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm sm:text-sm sm:leading-6" />} placeholder="Username" />
                </div>
            </Form.Item>

            {/* Password Input Field */}
            <Form.Item
                label=""
                name="password"
                rules={[
                    { required: true, message: 'Please input your password!' },
                ]}
            >
                <div>
                    <label className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                    <Input.Password prefix={<LockOutlined className="site-form-item-icon block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm sm:text-sm sm:leading-6" />} type="password" placeholder="Password" />
                </div>
            </Form.Item>

            {/* Submit Button */}
            <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button flex w-full justify-center rounded-md px-3 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">
                    Log in
                </Button>
            </Form.Item>
        </Form>
    );
};

export default LoginForm;