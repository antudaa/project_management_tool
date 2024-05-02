"use client";
import React, { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query'
import Image from 'next/image';
import { Avatar, Button, List, Skeleton } from 'antd';
import type { ConfigProviderProps } from 'antd';
import { EyeOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface DataType {
    id: string;
    name: string;
    thumbnail: string;
    description: string;
    loading: boolean;
}

const count = 4;

type SizeType = ConfigProviderProps['componentSize'];

const AllProjectBoard = () => {

    const router = useRouter();

    const [size, setSize] = useState<SizeType>('middle');

    const { isFetching, error, data } = useQuery({
        queryKey: ['repoData'],
        queryFn: async () => {
            try {
                const response = await fetch('https://66313c4dc92f351c03dc91b7.mockapi.io/projects');
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                return await response.json();
            } catch (error) {
                // throw new Error(error.message);
            }
        }
    });

    const [list, setList] = useState<DataType[]>([]);
    const [visibleProjects, setVisibleProjects] = useState(count);

    // Update the list when data is fetched or changes
    useEffect(() => {
        if (data) {
            setList(data);
        }
    }, [data]);

    const onLoadMore = () => {
        setVisibleProjects((prevVisibleProjects) => prevVisibleProjects + count);
    };

    const loadMore = !isFetching ? (
        <div style={{ textAlign: 'center', marginTop: 12, height: 32, lineHeight: '32px' }}>
            <Button onClick={onLoadMore}>Load More</Button>
        </div>
    ) : null;

    console.log(data);

    const renderButtons = (item: DataType) => (
        <div>
            <Link href={`/projects/${item.id}`} passHref>
                <Button type="primary" icon={<EyeOutlined />} size={size}></Button>
            </Link>

            <Button type="default" icon={<EditOutlined />} size={size} style={{ margin: '0 8px' }}></Button>
            <Button type="primary" icon={<DeleteOutlined />} danger>

            </Button>
        </div>
    );

    return (
        <section>
            <List
                className="demo-loadmore-list"
                loading={isFetching}
                itemLayout="horizontal"
                loadMore={loadMore}
                dataSource={list.slice(0, visibleProjects)}
                renderItem={(item) => (
                    <List.Item
                        actions={[renderButtons(item)]}
                    >
                        <Skeleton avatar title={false} loading={item?.loading} active>
                            <List.Item.Meta
                                avatar={<Avatar src={item?.thumbnail} />}
                                title={<a href="https://ant.design">{item?.name}</a>}
                                description={item?.description}
                            />
                        </Skeleton>
                    </List.Item>
                )}
            />
        </section >
    );
};

export default AllProjectBoard;