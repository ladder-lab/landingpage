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
  return (
    <Box
      sx={{
        borderRadius: `${type === 'upper-left' ? 30 : 0}px ${type === 'upper-right' ? 30 : 0}px ${
          type === 'lower-right' ? 30 : 0
        }px ${type === 'lower-left' ? 30 : 0}px`,
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
        flexDirection={['upper-left', 'lower-left'].includes(type) ? 'row' : 'row-reverse'}
      >
        <Box
          sx={{
            background: 'rgba(255, 255, 255, 0.26)',
            width: 90,
            height: 90,
            borderRadius: ['upper-left', 'lower-right'].includes(type) ? '30px 0' : '0 30px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          {icon}
        </Box>
        <PointArray style={{ margin: 20 }} />
      </Box>

      <Box padding="24px 20px 36px">
        <Typography fontSize={22} fontWeight={400}>
          {text}
        </Typography>
      </Box>
    </Box>
  )
}
