import { Box, Typography } from '@mui/material'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ConverterCard.module.scss'

interface ConverterCardProps {
  className?: string
}

const ConverterCard = (props: ConverterCardProps) => {
  const { className } = props

  return (
    <div className={classNames(cls.ConverterCard, {}, [className])}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'primary.main',
          height: '60px',
          borderTopRightRadius: '20px',
        }}
      >
        <Typography sx={{ color: '#FFFFFF', fontSize: '16px' }}>Конвертация валют</Typography>
      </Box>
      <Box
        sx={{
          border: '1px solid',
          borderColor: 'primary.main',
          borderTop: 0,
          borderBottomRightRadius: '20px',
          borderBottomLeftRadius: '20px',
          height: '300px',
        }}
      >
        Converter
      </Box>
    </div>
  )
}

export { ConverterCard }
