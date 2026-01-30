'use client'
import { TextEffect } from '@/components/ui/text-effect'
import Link from 'next/link'
import Image from 'next/image'

export function Header() {
  return (
    <header className="mb-8">
      <div className="flex items-start gap-4">
        {/* GIF Container */}
        <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-lg">
          <Image
            src="/blackhole.gif"
            alt="Profile GIF"
            fill
            className="object-cover"
            unoptimized
          />
        </div>

        {/* Name and Skills */}
        <div className="pt-1">
          <Link
            href="/"
            className="text-lg font-medium text-black dark:text-white"
          >
            Shivang Dixit
          </Link>
          <TextEffect
            as="p"
            preset="fade"
            per="char"
            className="mt-1 text-zinc-600 dark:text-zinc-500"
            delay={0.5}
          >
            Web-Dev | iOS | Go-Microservices
          </TextEffect>
        </div>
      </div>
    </header>
  )
}
