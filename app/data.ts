type Project = {
  name: string
  description: string
  link: string
  video: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: 'Twap / Spot Oracle',
    description:
      'Websocket streaming service which calculates TWAP for UniswapV3 Pools.',
    link: '',
    video:
      'https://res.cloudinary.com/drlckonat/video/upload/v1763225815/TwapPreview_avmthi.mp4',
    id: 'project1',
  },
  {
    name: 'Disperz',
    description: 'Mass AirDrop Token Contract which is Gas efficient and Fast.',
    link: 'https://disperz.netlify.app/',
    video:
      'https://res.cloudinary.com/drlckonat/video/upload/v1763543243/DisperzSample_epf6jp.mov',
    id: 'project2',
  },
  {
    name: 'MRT Telegram Bot',
    description:
      'Checks real-time Whales Bitcoin Buy/Sell to predict the price impact on ETH&SOL.',
    link: '',
    video: '',
    id: 'project3',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'TON Blockchain',
    title: 'Telegram Mini-Apps Builder',
    start: '2025',
    end: 'Present',
    link: '',
    id: 'work1',
  },
  {
    company: 'ChainLink Oracles by Cyfrin',
    title: 'Fellowship',
    start: 'July',
    end: 'Aug 2025',
    link: '',
    id: 'work2',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Go-Kafka Event Streaming',
    description: 'A guide on, How Event Streaming works under the hood.',
    link: '',
    uid: 'blog-1',
  },
  {
    title: 'Exploring Uniswap Contracts (V4 & V3)',
    description:
      'A deep dive into Uniswap Pool Contracts and its Functions & Testing with Foundry',
    link: '',
    uid: 'blog-2',
  },
  {
    title: "Diving into Apple's CryptoKit & Foundation",
    description: 'A guide on, How to make secured iOS Apps.',
    link: '',
    uid: 'blog-3',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/Shiv2576',
  },
  {
    label: 'Twitter',
    link: 'https://x.com/Shiv_dixit2576',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/shivang-dixit-0911b2326/',
  },
]

export const EMAIL = 'dixitshiva12358@gmail.com'
