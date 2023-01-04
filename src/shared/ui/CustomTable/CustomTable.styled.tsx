import {
  Box, IconButton, styled, Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
} from '@mui/material'

export const TableStyled = styled(Table)({
  minWidth: '650px',
})

export const TableContainerStyled = styled(TableContainer)({
  backgroundColor: 'white',
  borderTopLeftRadius: 0,
  borderTopRightRadius: '20px',
  borderBottomLeftRadius: '20px',
  borderBottomRightRadius: '20px',
  border: '1px solid #1A237E',
  borderTop: 0,
})

export const TableHeadStyled = styled(TableHead)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
}))

export const TableBodyStyled = styled(TableBody)({
  display: 'flex',
  height: '340px',
  flexDirection: 'column',
  overflowY: 'scroll',
})

export const TableRowStyled = styled(TableRow)({
  display: 'flex',
})

export const TableCellStyled = styled(TableCell)({
  color: '#fff',
  padding: '10px',
  display: 'flex',
  flex: 1,
})

export const PaginationWrapper = styled(Box)({
  display: 'flex',
  width: '100%',
  justifyContent: 'center',
  padding: '10px',
  alignItems: 'center',
})

export const IconButtonArrowLeftStyled = styled(IconButton)(({ theme }) => ({
  color: theme.palette.primary.main,
  '& hover': { backgroundColor: 'transparent' },
  '& svg': { transform: 'rotate(180deg)' },
}))

export const IconButtonArrowRightStyled = styled(IconButton)(({ theme }) => ({
  color: theme.palette.primary.main,
  '& hover': { backgroundColor: 'transparent' },
}))

export const PageCountWrapperStyled = styled(Box)({
  pointerEvents: 'none',
  userSelect: 'none',
  width: '50px',
  textAlign: 'center',
})
