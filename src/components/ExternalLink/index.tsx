import React, { HTMLProps, useCallback } from 'react'
import { Link, Theme } from '@mui/material'
import { SxProps } from '@mui/system'

export default function ExternalLink({
  target = '_blank',
  href,
  rel = 'noopener noreferrer',
  style,
  sx,
  children,
  underline,
  className,
  color
}: Omit<HTMLProps<HTMLAnchorElement>, 'as' | 'ref' | 'onClick'> & {
  href: string
  style?: React.CSSProperties
  sx?: SxProps<Theme>
  underline?: 'always' | 'hover' | 'none'
  color?: string
}) {
  const handleClick = useCallback(
    (event: React.MouseEvent<HTMLAnchorElement>) => {
      if (target === '_blank' || event.ctrlKey || event.metaKey) {
      } else {
        event.preventDefault()
        window.location.href = href
      }
    },
    [href, target]
  )
  return (
    <Link
      target={target}
      rel={rel}
      href={href}
      onClick={handleClick}
      style={style}
      sx={{
        color: color ? color + '!important' : undefined,

        ...sx
      }}
      underline={underline ?? 'none'}
      className={className}
    >
      {children}
    </Link>
  )
}
