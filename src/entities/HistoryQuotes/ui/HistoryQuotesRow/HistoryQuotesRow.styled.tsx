import { styled, TableCell, TableRow } from '@mui/material'

export const TableRowStyled = styled(TableRow)({
  '&:last-child td, &:last-child th': { border: 0 },
})

export const TableCellStyled = styled(TableCell)({
  padding: '10px',
})
