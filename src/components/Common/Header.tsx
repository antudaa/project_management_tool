import React from 'react';
import { Layout, theme } from 'antd';
import { Input } from 'antd';
import type { SearchProps } from 'antd/es/input/Search';

const { Search } = Input;
const { Header } = Layout;

const onSearch: SearchProps['onSearch'] = (value, _e, info) => console.log(info?.source, value);

const HeaderComponent = () => {
    const { token } = theme.useToken();
    const { colorBgContainer } = token;

    return (
        <Header style={{ padding: 0, background: colorBgContainer }}>
            <div className='flex justify-between align-middle'>
                <h1 className='pl-6 text-lg my-auto font-semibold'>{`Antu's Project Management Tool`}</h1>
                <Search className='w-44 md:w-72 py-3 pr-6 justify-end' placeholder="input search text" onSearch={onSearch} enterButton />
            </div>
        </Header>
    );
};

export default HeaderComponent;