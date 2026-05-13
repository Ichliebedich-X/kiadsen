import { type Metadata } from 'next'

import { Projects } from '~/app/(main)/projects/Projects'
import { Container } from '~/components/ui/Container'

const title = '我的个人'
const description =
  '这里是我的个人空间，展示我在技术、设计与创作上的尝试。它既是我的成果合集，也是我对未来兴趣和思考的记录。'
export const metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
  },
  twitter: {
    title,
    description,
    card: 'summary_large_image',
  },
} satisfies Metadata

export default function ProjectsPage() {
  return (
    <Container className="mt-16 sm:mt-32">
      <header className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          我的个人空间。
        </h1>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          这里展示我的个人探索、创作尝试与兴趣实践。既包含技术作品，也记录我想做的事情和思考过程。
        </p>
      </header>
      <div className="mt-16 sm:mt-20">
        <Projects />
      </div>
    </Container>
  )
}

export const revalidate = 3600
