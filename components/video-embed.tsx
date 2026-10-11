'use client'

import { AspectRatio } from '@/components/ui/aspect-ratio'
import { cn } from '@/lib/utils'

interface VideoEmbedProps {
  src: string
  poster?: string
  ratio?: number
  mode?: 'ambient' | 'narrative'
  preload?: 'auto' | 'metadata' | 'none'
  className?: string
}

/**
 * ambient: autoplay/muted/loop, no controls — used where video replaces what
 * used to be a static background/showcase image.
 * narrative: controls, no autoplay — used where the clip has dialogue/audio
 * meant to be watched intentionally (poster shown until pressed play).
 */
export function VideoEmbed({ src, poster, ratio = 9 / 16, mode = 'ambient', preload, className }: VideoEmbedProps) {
  const ambient = mode === 'ambient'
  const resolvedPreload = preload ?? (ambient ? 'metadata' : 'none')

  return (
    <div className={cn('overflow-hidden rounded-3xl shadow-xl border border-gray-100', className)}>
      <AspectRatio ratio={ratio}>
        <video
          className="h-full w-full object-cover"
          src={src}
          poster={poster}
          autoPlay={ambient}
          muted={ambient}
          loop={ambient}
          playsInline
          controls={!ambient}
          preload={resolvedPreload}
        />
      </AspectRatio>
    </div>
  )
}
