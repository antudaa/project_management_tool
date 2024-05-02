"use client";
import React from 'react';
import { Layout, theme } from 'antd';
import FooterComponent from '@/components/Common/Footer';
import HeaderComponent from '@/components/Common/Header';
import AllProjectBoard from '@/components/Projects/AllProjectBoard';


const { Content } = Layout;
const page = () => {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();


    return (
        <Layout className='min-h-screen'>
            <Layout>

                {/* Header  */}
                <HeaderComponent />

                {/* Main Content */}
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,
                        borderRadius: borderRadiusLG,
                    }}
                >
                    <AllProjectBoard />
                </Content>

                {/* Footer */}
                <FooterComponent />
            </Layout>
        </Layout>
    );
};

export default page;