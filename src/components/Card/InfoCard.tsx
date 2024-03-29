import { useMemo } from 'react'
import { Box, Typography } from '@mui/material'
// import { ReactComponent as PointArray } from 'assets/svg/point-array.svg'
// import useBreakpoint from 'hooks/useBreakpoint'

export default function InfoCard({
  text,
  icon,
  type,
  width,
  height
}: {
  text: string
  icon: JSX.Element
  type: 'upper-left' | 'upper-right' | 'lower-left' | 'lower-right' | 'lower'
  width?: number | string
  height?: number | string
}) {
  // const isDownMd = useBreakpoint('md')

  // const borderRadius = useMemo(() => {
  //   switch (type) {
  //     case 'upper-left':
  //       return '30px 0 0 0'
  //     case 'upper-right':
  //       return '0 30px 0 0'
  //     case 'lower-left':
  //       return '0 0 0 30px'
  //     case 'lower-right':
  //       return '0 0 30px 0'
  //     case 'lower':
  //       return '0 0 30px 30px'
  //   }
  // }, [type])

  const iconBorderRadius = useMemo(() => {
    switch (type) {
      case 'upper-left':
        return '30px 0'
      case 'upper-right':
        return '0 30px'
      case 'lower-left':
        return '0 30px'
      case 'lower-right':
        return '30px 0'
      case 'lower':
        return '30px 0'
    }
  }, [type])

  return (
    <Box
      sx={{
        borderRadius: { xs: '30px' },
        background: '#2D2C3A',
        overflow: 'hidden',
        width: width || '100%',
        height: {
          xs: height || 185,
          md: height || 220
        },
        flexDirection: ['upper-left', 'upper-right'].includes(type) ? 'column' : 'column-reverse'
      }}
    >
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        flexDirection={['upper-left', 'lower-left', 'lower'].includes(type) ? 'row' : 'row-reverse'}
      >
        {/* {type === 'lower' && (
          <Typography sx={{ fontSize: { xs: 16, md: 18 }, fontWeight: 400, pl: 20, lineHeight: 1.2 }} variant="h5">
            {text}
          </Typography>
        )} */}
        <Box
          sx={{
            background: '#2D2C3A',
            width: '100%',
            // width: { xs: 75, md: 90 },
            height: { xs: 72, md: 90 },
            borderRadius: iconBorderRadius,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          {icon}
        </Box>
        {/* {type !== 'lower' && (
          <PointArray
            style={{ margin: isDownMd ? -12 : '0 20px', transform: isDownMd ? 'rotate(90deg) scale(0.6)' : 'none' }}
          />
        )} */}
      </Box>

      {/* {type !== 'lower' && ( */}
      <Box height="100%" sx={{ padding: { xs: '5px 16px 28px', md: '5px 20px 36px' } }}>
        <Typography
          sx={{ fontSize: { xs: 16, lg: 18 }, fontWeight: 400, lineHeight: 1.2, color: '#fff' }}
          variant="h5"
          textAlign={'center'}
        >
          {text}
        </Typography>
      </Box>
      {/* )} */}
    </Box>
  )
}
