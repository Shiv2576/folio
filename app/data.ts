type Project = {
  name: string
  description: string
  link: string
  video: string
  id: string
  widgetData?: PriceWidgetData
}

export interface PriceWidgetData {
  symbols: string[]
  updateInterval: number
  apiEndpoint?: string
  showChart?: boolean
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
    link: 'https://unistream2.netlify.app/',
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
    name: 'Engineering Log',
    description:
      'A running log of what I’m building, breaking, and learning while working on real-world systems.',
    link: '',
    video: '',
    id: 'project3',
  },
  {
    name: 'MRT Telegram Bot',
    description:
      'Checks real-time Whales Bitcoin Buy/Sell to predict the price impact on ETH&SOL.',
    link: 'https://mrt-nu.vercel.app/',
    video: '',
    id: 'project4',
    widgetData: {
      symbols: ['BTC', 'ETH', 'SOL'],
      updateInterval: 5000,
      apiEndpoint: 'https://api.binance.com/api/v3/ticker/price',
      showChart: true,
    },
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
    title: 'Common Go Mistakes',
    description:
      'This page is a summary of the mistakes in the 100 Go Mistakes and How to Avoid Them',
    link: 'https://100go.co/',
    uid: 'blog-1',
  },
  {
    title: 'Exploring Uniswap Contracts (V4 & V3)',
    description:
      'A deep dive into Uniswap Pool Contracts and its Functions & Testing with Foundry',
    link: 'https://github.com/Shiv2576/Uniswap_V3_Tests',
    uid: 'blog-2',
  },
  {
    title: "Diving into Apple's CryptoKit & Foundation",
    description: 'A guide on, How to make secured iOS Apps.',
    link: 'https://developer.apple.com/documentation/cryptokit',
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
