// icons.tsx
import React from 'react'

const CDN_BASE = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons'

const CompactIcon: React.FC<{ src: string; alt: string; label: string }> = ({
  src,
  alt,
  label,
}) => (
  <img
    src={src}
    alt={alt}
    title={label}
    aria-label={label}
    className="h-8 w-8"
  />
)

export const KubernetesIcon: React.FC = () => (
  <CompactIcon
    src={`${CDN_BASE}/kubernetes/kubernetes-original.svg`}
    alt="Kubernetes"
    label="Kubernetes"
  />
)

export const GoIcon: React.FC = () => (
  <CompactIcon src={`${CDN_BASE}/go/go-original.svg`} alt="Go" label="Go" />
)

export const TypeScriptIcon: React.FC = () => (
  <CompactIcon
    src={`${CDN_BASE}/typescript/typescript-original.svg`}
    alt="TypeScript"
    label="TypeScript"
  />
)

export const ExpoIcon: React.FC = () => (
  <div className="opacity-80 brightness-0 filter dark:invert">
    <CompactIcon
      src={`${CDN_BASE}/expo/expo-original.svg`}
      alt="Expo"
      label="Expo"
    />
  </div>
)

export const SwiftIcon: React.FC = () => (
  <CompactIcon
    src={`${CDN_BASE}/swift/swift-original.svg`}
    alt="Swift"
    label="Swift"
  />
)

export const RedisIcon: React.FC = () => (
  <CompactIcon
    src={`${CDN_BASE}/redis/redis-original.svg`}
    alt="Redis"
    label="Redis"
  />
)

export const GitIcon: React.FC = () => (
  <CompactIcon src={`${CDN_BASE}/git/git-original.svg`} alt="Git" label="Git" />
)

export const DockerIcon: React.FC = () => (
  <CompactIcon
    src={`${CDN_BASE}/docker/docker-original.svg`}
    alt="Docker"
    label="Docker"
  />
)

export const PostgreSQLIcon: React.FC = () => (
  <CompactIcon
    src={`${CDN_BASE}/postgresql/postgresql-original.svg`}
    alt="PostgreSQL"
    label="PostgreSQL"
  />
)

export const SQLIcon: React.FC = () => (
  <CompactIcon
    src={`${CDN_BASE}/mysql/mysql-original.svg`}
    alt="SQL"
    label="SQL"
  />
)
