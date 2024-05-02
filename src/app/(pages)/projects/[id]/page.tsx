"use client"
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { BorderlessTableOutlined } from "@ant-design/icons";
import { Button, Card, Col, Popover, Row } from 'antd';
import Link from 'next/link';

const ProjectDetailsPage = (id: string) => {
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
        <div>
            <section className="min-w-screen min-h-screen bg-sky-100 flex items-center p-5 lg:p-10 overflow-hidden relative">
                <div className="w-full max-w-6xl rounded bg-white shadow-xl p-10 lg:p-20 mx-auto text-gray-800 relative md:text-left">
                    <div className="md:flex items-center -mx-10">

                        <div className="relative bg-white py-6 px-6 rounded-3xl mx-auto w-[80%] md:w-full my-4 shadow-xl">
                            <div className=" text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-green-500 left-4 -top-6">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <div className="mt-8">
                                <p className="text-xl font-semibold my-2">{data?.name}</p>
                                <div className="flex space-x-2 text-gray-400 text-sm">
                                    <BorderlessTableOutlined className="h-5 w-5 pt-0.5" />
                                    <p>{data?.description}</p>
                                </div>
                                <div className="flex space-x-2 text-gray-400 text-sm my-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                    <p>{data?.deadline}</p>
                                </div>
                                <div className="border-t-2 "></div>

                                <div className="flex justify-between flex-col">

                                    {/* Team Members */}
                                    <div className="my-2">
                                        <p className="font-semibold text-base mb-2">Team Member</p>
                                        <div className="flex space-x-2 flex-col gap-2">
                                            <ol></ol>
                                            {data?.teamMembers?.map((member) => (
                                                <Popover key={member?.id} content={member.role} title="Title" trigger="hover">
                                                    <li>{member?.name}</li>
                                                </Popover>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Tasks */}
                                    <div className="my-2">
                                        <div className='flex justify-between'>
                                            <p className="font-semibold text-base mb-2">Tasks</p>
                                            <Link href={`/projects/tasks/${data?.id}`} passHref>
                                                <Button>Manage Tasks</Button>
                                            </Link>
                                        </div>
                                        <div className="text-base text-gray-400 font-semibold">
                                            <Row gutter={16} className='gap-4'>
                                                {
                                                    data?.tasks?.map((task) => (
                                                        <Col key={task?.id} span={8}>
                                                            <Card title={task?.title} bordered={false}>
                                                                <div className="flex flex-wrap place-items-center h-56">
                                                                    <div className="overflow-hidden shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-5 hover:shadow-2xl rounded-lg h-full w-60 md:w-80 cursor-pointer m-auto">

                                                                        <div className="bg-white w-full p-4">
                                                                            <span className="block text-gray-500 dark:text-gray-400 font-light leading-snug mb-4 text-xs">Due Date : {task?.dueDate}</span>
                                                                            <p className="text-gray-600 font-light text-md">
                                                                                {task?.description}
                                                                                <a className="inline-flex text-indigo-500" href="#">Read More</a>
                                                                            </p>
                                                                            <div className="flex flex-wrap justify-starts items-center py-3 border-b-2 text-xs text-white font-medium">
                                                                                <span className="m-1 px-2 py-1 rounded bg-indigo-500">
                                                                                    {task?.status}
                                                                                </span>
                                                                            </div>
                                                                            <div className="flex items-center mt-2">
                                                                                <div className="pl-3">
                                                                                    <div className="text-xs">
                                                                                        Assigned To
                                                                                    </div>
                                                                                    <div className="text-gray-600 text-sm">
                                                                                        {task?.assignee}
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </Card>
                                                        </Col>
                                                    ))

                                                }
                                            </Row>
                                        </div>
                                    </div>

                                    {/* Recent Acitvity */}
                                    <div className="my-2">
                                        <p className="font-semibold text-base mb-2">Recent Activity</p>
                                        <div className="flex space-x-2 flex-col gap-2">
                                            <ol></ol>
                                            {data?.recentActivities?.map((activity) => (
                                                <li key={activity?.id}>{activity?.description}</li>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProjectDetailsPage;