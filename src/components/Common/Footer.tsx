"use client";
import React from 'react';
import { Layout } from 'antd';

const { Footer } = Layout;

const FooterComponent = () => {
    return (
        <Footer style={{ textAlign: 'center' }}>
            Antu Das ©{new Date().getFullYear()} Created by antu_das
        </Footer>
    );
};

export default FooterComponent;