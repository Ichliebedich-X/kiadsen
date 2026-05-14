import { kvKeys } from '~/config/kv'
import { env } from '~/env.mjs'
import { redis } from '~/lib/redis'
import { getLatestBlogPosts } from '~/sanity/queries'

import { BlogPostCard } from './BlogPostCard'

export async function BlogPosts({ limit = 5 }) {
  let posts = []

  try {
    posts = (await getLatestBlogPosts({ limit, forDisplay: true })) || []
  } catch (error) {
    console.error('Failed to load latest blog posts:', error)
    posts = []
  }

  const postIdKeys = posts.map(({ _id }: { _id: string }) => kvKeys.postViews(_id))

  let views: number[] = []
  if (env.VERCEL_ENV === 'development') {
    views = posts.map(() => Math.floor(Math.random() * 1000))
  } else {
    if (postIdKeys.length > 0) {
      views = await redis.mget<number[]>(...postIdKeys)
    }
  }

  return (
    <>
      {posts.map((post, idx) => (
        <BlogPostCard post={post} views={views[idx] ?? 0} key={post._id} />
      ))}
    </>
  )
}
