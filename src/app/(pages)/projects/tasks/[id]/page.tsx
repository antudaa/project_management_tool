"use client"
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { BorderlessTableOutlined } from "@ant-design/icons";
import { Button, Card, Col, Popover, Row } from 'antd';
import Link from 'next/link';

const ProjectDetailsPage = (id) => {
    const projectId = id.params.id;

    const { isFetching, error, data } = useQuery({
        queryKey: ['project'],
        queryFn: async () => {
            try {
                const response = await fetch(`https://66313c4dc92f351c03dc91b7.mockapi.io/projects/${projectId}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                return await response.json();
            } catch (error) {
                // throw new Error(error.message);
            }
        }
    });

    console.log(data);

    return (
        <div className='min-h-screen bg-indigo-50'>
            Tasks
        </div>
    );
};

export default ProjectDetailsPage;