'use client'
import { TextEffect } from '@/components/ui/text-effect'
import BreathingText from "@/components/fancy/breathing-text"
import Link from 'next/link'
import Image from 'next/image'

export function Header() {
  return (
    <header className="mb-8 flex items-center justify-between">
      <div className="flex items-center gap-4">
        {/* GIF Container */}
        <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-lg">
          <Image
            src="/blackhole.gif"
            alt="Profile GIF"
            fill
            className="object-cover"
            unoptimized
          />
        </div>

        <div>
          {/* Name with BreathingText */}
          <Link href="/" className="font-medium text-black dark:text-white block mb-1">
            <BreathingText
              staggerDuration={0.08}
              fromFontVariationSettings="'wght' 100, 'slnt' 0"
              toFontVariationSettings="'wght' 800, 'slnt' -10"
              className="text-base sm:text-lg"
            >
              Shivang Dixit
            </BreathingText>
          </Link>

          {/* Skills with BreathingText (alternative effect) */}
          <BreathingText
            staggerDuration={0.05}
            fromFontVariationSettings="'wght' 300, 'slnt' 0"
            toFontVariationSettings="'wght' 600, 'slnt' -5"
            className="text-sm sm:text-base text-zinc-600 dark:text-zinc-500"
          >
            Web-Dev | iOS | Go-Microservices
          </BreathingText>
        </div>
      </div>
    </header>
  )
}
