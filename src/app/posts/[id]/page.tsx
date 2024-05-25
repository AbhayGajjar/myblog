import UpVoteBtn from '@/components/upvote-btn';
import prisma from '@/lib/db';
import React from 'react';
import NotFound from './not-found';

const Page = async ({ params }: { params: { id: string } }) => {
    const post = await prisma.post.findUnique({
        where: {
            id: parseInt(params.id, 10),
        },
    });

    if (!post) {
        return <NotFound />;
    }

    return (
        <main className='px-7 pt-24 text-center'>
            <h1 className='text-5xl font-semibold mb-6'>{post.title}</h1>
            <p className='max-w-[700px] mx-auto'>{post.body}</p>
            <UpVoteBtn />
        </main>
    );
};

export default Page;
