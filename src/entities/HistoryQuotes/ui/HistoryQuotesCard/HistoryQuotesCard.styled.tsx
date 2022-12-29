import {
  Box, styled, TableCell, TableContainer, TableHead,
} from '@mui/material'

export const HistoryQuotesCardStyled = styled(Box)({
  maxWidth: '1000px',
  minWidth: '300px',
})

export const TableContainerStyled = styled(TableContainer)(({ theme }) => ({
  backgroundColor: 'white',
  borderTopLeftRadius: 0,
  borderTopRightRadius: '20px',
  borderBottomLeftRadius: '20px',
  borderBottomRightRadius: '20px',
  border: '1px solid #1A237E',
  borderTop: 0,
}))

export const TableHeadStyled = styled(TableHead)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
}))

export const TableCellStyled = styled(TableCell)(({ theme }) => ({
  color: '#fff',
}))
