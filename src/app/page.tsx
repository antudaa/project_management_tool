"use client";
import React from 'react';
import LoginForm from '@/components/Auth/LoginForm';
import Image from 'next/image'
import loginpageImage from "@/utils/Images/loginImage_3.jpg";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

export default function Home() {

  // Create a client
  const queryClient = new QueryClient()

  return (
    <main className="bg-[aliceblue] min-h-screen w-full text-black py-6">

      <QueryClientProvider client={queryClient}>
        <div className="font-[sans-serif] text-[#333]">
          <div className="min-h-screen flex flex-col items-center justify-center">
            <div className="grid md:grid-cols-2 items-center gap-4 max-w-6xl w-full p-4 m-4 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-md">
              <div className="md:max-w-md w-full sm:px-6 py-4">
                <div className="mb-12">
                  <h3 className="text-3xl font-extrabold">Sign in</h3>
                </div>
                <LoginForm />
              </div>
              <div className="md:h-full max-md:mt-10 bg-[#000842] rounded-xl lg:p-12 p-8">
                <Image
                  className="rounded-xl w-full h-full object-contain"
                  src={loginpageImage}
                  alt="Next.js Logo"
                  width={180}
                  height={37}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </QueryClientProvider>
    </main>
  );
}
