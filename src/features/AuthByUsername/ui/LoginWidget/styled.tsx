import { Box, styled } from '@mui/material'

export const WidgetBoxStyled = styled(Box)({
  borderRadius: '20px',
  backgroundColor: '#fff',
  width: '100%',
  height: '100%',
  maxWidth: '480px',
  maxHeight: '480px',
  minWidth: '240px',
  display: 'flex',
  flexDirection: 'column',
  boxShadow: '5px 5px 10px 1px rgb(128 128 128 / 30%)',
})

export const TitleBoxStyled = styled(Box)({
  borderTopLeftRadius: '20px',
  borderTopRightRadius: '20px',
  background: '#1a237e',
  height: '60px',
  color: '#fff',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '10px',
})

export const ContentBoxStyled = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
  padding: '1.6rem',
})
