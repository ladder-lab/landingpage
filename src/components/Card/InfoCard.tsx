import { useMemo } from 'react'
import { Box, Typography } from '@mui/material'
import { ReactComponent as PointArray } from 'assets/svg/point-array.svg'

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
  const borderRadius = useMemo(() => {
    switch (type) {
      case 'upper-left':
        return '30px 0 0 0'
      case 'upper-right':
        return '0 30px 0 0'
      case 'lower-left':
        return '0 0 0 30px'
      case 'lower-right':
        return '0 0 30px 0'
      case 'lower':
        return '0 0 30px 30px'
    }
  }, [type])

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
        borderRadius,
        background: 'rgba(255, 255, 255, 0.26)',
        overflow: 'hidden',
        width: width || '100%',
        height: height || 202,
        display: 'flex',
        flexDirection: ['upper-left', 'upper-right'].includes(type) ? 'column' : 'column-reverse'
      }}
    >
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        flexDirection={['upper-left', 'lower-left', 'lower'].includes(type) ? 'row' : 'row-reverse'}
      >
        {type === 'lower' && (
          <Typography fontSize={22} fontWeight={400} pl={20}>
            {text}
          </Typography>
        )}
        <Box
          sx={{
            background: 'rgba(255, 255, 255, 0.26)',
            width: 90,
            height: 90,
            borderRadius: iconBorderRadius,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          {icon}
        </Box>
        {type !== 'lower' && <PointArray style={{ margin: 20 }} />}
      </Box>

      {type !== 'lower' && (
        <Box padding="24px 20px 36px">
          <Typography fontSize={22} fontWeight={400}>
            {text}
          </Typography>
        </Box>
      )}
    </Box>
  )
}
