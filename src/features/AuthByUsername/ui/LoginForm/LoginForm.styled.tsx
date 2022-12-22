import {
  Box, FormControl, OutlinedInput, styled,
} from '@mui/material'

export const LoginFormStyled = styled('form')({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  maxWidth: '250px',
  height: '100%',
  justifyContent: 'center',
})

export const InputsWrapperStyled = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  marginBottom: '10px',
  marginTop: '42px',
})

export const OutlinedInputStyled = styled(OutlinedInput)({
  borderRadius: '5px',
  fontSize: '16px',
  '& .MuiOutlinedInput-input': {
    padding: '10px',
  },
})

export const FormControlStyled = styled(FormControl)({
  '&:not(:last-child)': {
    marginBottom: '15px',
  },
  '& .MuiFormHelperText-root': {
    fontSize: '14px', color: '#000000', marginBottom: '2px',
  },
})

export const ErrorWrapperStyled = styled(Box)({
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'center',
  height: '72px',
  marginTop: '5px',
})
