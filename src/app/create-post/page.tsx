import { createPost } from '@/actions/action'
import Form from '@/components/Form';
import { getKindeServerSession, LogoutLink } from '@kinde-oss/kinde-auth-nextjs/server'
import { redirect } from 'next/navigation';
import React from 'react'

const CreatePost = async () => {
    const { isAuthenticated } = getKindeServerSession();
    if (!(await isAuthenticated())) {
        redirect('/api/auth/login?post_login_redirect_uri=/create-post');
    }
    return (
        <main className='text-center pt-16'>
            <h1 className='text-4xl font-semibold tracking-tight mb-6'>Create a New Post</h1>

            <Form />
            <LogoutLink className='h-10 bg-red-500 px-5 py-2 rounded text-white'>Log out</LogoutLink>
        </main>
    )
}

export default CreatePost