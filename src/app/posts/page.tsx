import PostLinst from '@/components/post-list';
import { Suspense } from 'react';

const Post = () => {

  return (
    <main className='text-center pt-20 px-5'>
      <h1 className="font-bold text-4xl md:text-5xl mb-5 ">All Posts</h1>

      <Suspense fallback="loading.....">
        <PostLinst />
      </Suspense>

    </main>
  )
}

export default Post