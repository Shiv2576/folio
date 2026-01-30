'use client'
import { TextEffect } from '@/components/ui/text-effect'
import Link from 'next/link'
import Image from 'next/image'

export function Header() {
  return (
    <header className="mb-8 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-lg">
          <Image
            src="/blackhole.gif"
            alt="Profile GIF"
            fill
            className="object-cover"
            unoptimized // Add this if using GIFs with Next.js Image
          />
        </div>

        <div>
          <Link href="/" className="font-medium text-black dark:text-white">
            Shivang Dixit
          </Link>
          <TextEffect
            as="p"
            preset="fade"
            per="char"
            className="text-zinc-600 dark:text-zinc-500"
            delay={0.5}
          >
            Web-Dev | iOS | Go-Microservices
          </TextEffect>
        </div>
      </div>
    </header>
  )
}
