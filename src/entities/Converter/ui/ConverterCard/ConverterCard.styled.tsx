import {
  Box, Button, FormControl, FormHelperText, OutlinedInput, Select, styled, Typography,
} from '@mui/material'

export const ConverterCardFormStyled = styled('form')({
  maxWidth: '750px',
  minWidth: '470px',
  minHeight: '360px',
})

export const TitleContainerStyled = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: theme.palette.primary.main,
  height: '60px',
  borderTopRightRadius: '20px',
}))

export const TitleStyled = styled(Typography)({
  color: '#FFFFFF',
  fontSize: '16px',
})

export const MainBorderStyled = styled(Box)(({ theme }) => ({
  border: '1px solid',
  borderColor: theme.palette.primary.main,
  borderTop: 0,
  borderBottomRightRadius: '20px',
  borderBottomLeftRadius: '20px',
  height: '300px',
  padding: '10px',
}))

export const ConverterTopStyled = styled(Box)({
  display: 'flex',
  height: '130px',
  justifyContent: 'center',
  alignItems: 'center',
  borderBottom: '1px solid #E1E1E1',
})

export const ConverterWrapperStyled = styled(Box)({
  display: 'flex',
  height: '60px',
  alignItems: 'flex-end',
})

export const AmountFormControlStyled = styled(FormControl)({
  marginRight: '20px',
  width: '80px',
  '& .MuiFormHelperText-root': {
    fontSize: '14px',
    color: '#000000',
    marginBottom: '2px',
  },
})

export const AmountOutlinedInputStyled = styled(OutlinedInput)({
  borderRadius: '5px',
  fontSize: '16px',
  '& .MuiOutlinedInput-input': {
    padding: '10px',
  },
})

export const AssetFromFormControlStyled = styled(FormControl)({
  width: '80px',
  marginRight: '5px',
})

export const SelectStyled = styled(Select)({
  borderRadius: '5px',
  fontSize: '16px',
  height: '43px',
  '& .MuiSelect-icon': {
    top: 'calc(50% - 2px)',
    right: '10px',
  },
  '& .MuiOutlinedInput-input': {
    padding: '10px',
  },
})

export const AssetToFormControlStyled = styled(FormControl)({
  width: '80px',
  marginRight: '20px',
})

export const TotalSubmitButton = styled(Button)({
  width: '150px',
})

export const ConverterBottomStyled = styled(Box)({
  height: '150px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
})

export const TotalFormHelperText = styled(FormHelperText)({
  fontSize: '14px',
  color: '#000000',
  marginBottom: '2px',
})

export const TotalWrapper = styled(Box)({
  width: '435px',
})
