
import UpVoteBtn from '@/components/upvote-btn';
import prisma from '@/lib/db';
import React from 'react'
import NotFound from './not-found';

const page = async ({ params }: { params: { id: string } }) => {
    const post = await prisma.post.findUnique({
        where: {
            id: parseInt(params.id),
        },
    });
    if (!post) {
        NotFound();
    }


    return (
        <main className='px-7 pt-24 text-center'>
            <h1 className='text-5xl font-semibold mb-6'>{post.title}</h1>
            <p className='max-w-[700px] mx-auto'>{post.body}</p>

            <UpVoteBtn />

        </main>
    )
}

export default page