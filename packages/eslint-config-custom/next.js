import next from 'eslint-config-next'
import turbo from 'eslint-config-turbo/flat'
import prettier from 'eslint-config-prettier/flat'

export const nextConfig = [
  ...next,
  ...turbo,
  prettier,
  {
    rules: {
      '@next/next/no-html-link-for-pages': 'off'
    }
  }
]
