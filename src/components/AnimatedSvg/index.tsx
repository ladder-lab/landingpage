import { useEffect, useRef } from 'react'
import Lottie from 'lottie-web'
import { Box, SxProps } from '@mui/material'

export default function AnimatedSvg({
  fileName,
  sx,
  className,
  onClick,
  height
}: {
  fileName: string
  sx?: SxProps
  className?: string
  onClick?: () => void
  height?: string | number
}) {
  const ref = useRef(null)

  useEffect(() => {
    if (!ref.current || !fileName) return
    Lottie.loadAnimation({
      container: ref.current, // the dom element that will contain the animation
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: `/animations/${fileName}.json`
    })

    return () => {
      Lottie.destroy()
    }
  }, [fileName])

  return (
    <Box
      id={fileName}
      ref={ref}
      className={className}
      style={{ width: '100%', display: 'flex', alignItems: 'flex-end', height: height, zIndex: 1 }}
      sx={sx}
      onClick={onClick}
    ></Box>
  )
}
