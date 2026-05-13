export const seo = {
  title: 'Kiadsen | 个人BLog',
  description:
    '我是 Kiadsen，大二在读学生，爱折腾第一名，deepsleeper。热爱开发，享受生活，并在未知领域中不断探索。',
  url: new URL(
    process.env.NODE_ENV === 'production'
      ? 'https://kiadsen.vercel.app'
      : 'http://localhost:3000'
  ),
} as const
