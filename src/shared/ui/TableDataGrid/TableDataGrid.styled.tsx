import { Box, styled } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'

export const DataGridStyled = styled(DataGrid)(({ theme }) => ({
  height: '460px',
  borderTopLeftRadius: 0,
  borderTopRightRadius: '20px',
  borderBottomLeftRadius: '20px',
  borderBottomRightRadius: '20px',
  border: '1px solid #1A237E',
  borderTop: 0,
  '& .MuiDataGrid-iconSeparator': { color: 'transparent' },
  '& .MuiDataGrid-columnHeaders': {
    borderTopRightRadius: '20px',
    borderTopLeftRadius: 0,
    backgroundColor: theme.palette.primary.main,
    borderBottom: 0,
    color: 'white',
  },
  '& .MuiDataGrid-columnHeader:last-child .MuiDataGrid-columnSeparator': {
    display: 'none',
  },
  '& .MuiDataGrid-columnHeader:focus-within': {
    outline: 'none',
  },
  '& .MuiDataGrid-cell:focus-within, & .MuiDataGrid-cell:focus': {
    outline: 'none',
  },
  '& .MuiDataGrid-footerContainer': {
    border: 0,
    justifyContent: 'center',
  },
}))

export const PaginationWrapper = styled(Box)({
  display: 'flex',
})

export const ArrowLeftStyled = styled(Box)(({ theme }) => ({
  color: theme.palette.primary.main,
  marginRight: '15px',
  '& svg': { transform: 'rotate(180deg)' },
  cursor: 'pointer',
}))

export const ArrowRightStyled = styled(Box)(({ theme }) => ({
  color: theme.palette.primary.main,
  marginLeft: '15px',
  cursor: 'pointer',
}))

export const PageCountWrapperStyled = styled(Box)({
  pointerEvents: 'none',
  userSelect: 'none',
  width: '50px',
  textAlign: 'center',
})
