import Balancer from 'react-wrap-balancer'

import { Container } from '~/components/ui/Container'

import { BlogPosts } from './BlogPosts'

const description =
  '这里记录我的技术探索与个人思考，既有开发笔记，也有生活随想。希望把实用经验和真实感悟分享给更多人。'
export const metadata = {
  title: '我的博客',
  description,
  openGraph: {
    title: '我的博客',
    description,
  },
  twitter: {
    title: '我的博客',
    description,
    card: 'summary_large_image',
  },
}

// TODO: add pagination or infinite scroll
export default function BlogPage() {
  return (
    <Container className="mt-16 sm:mt-24">
      <header className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          欢迎光临我的博客
        </h1>
        <p className="my-6 text-base text-zinc-600 dark:text-zinc-400">
          <Balancer>{description}</Balancer>
        </p>
        {/**
        <p className="flex items-center">
          <SocialLink href="/feed.xml" platform="rss" />
        </p>
        */}
      </header>
      <div className="mt-12 grid grid-cols-1 gap-6 sm:mt-20 lg:grid-cols-2 lg:gap-8">
        <BlogPosts limit={20} />
      </div>
    </Container>
  )
}

export const revalidate = 60
