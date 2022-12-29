import React from 'react'
import { TableCell, TableRow } from '@mui/material'
import { useSelector } from 'react-redux'
import { getHistoryQuotesItem } from 'entities/HistoryQuotes/model/selectors/getHistoryQuotesItem/getHistoryQuotesItem'

const HistoryQuotesRow = ({ id }:{id: string}) => {
  const historyItem = useSelector(getHistoryQuotesItem(id))
  return (
    <TableRow
      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
    >
      <TableCell component="th" scope="row">
        {historyItem?.asset}
      </TableCell>
      <TableCell align="right">{historyItem?.startDate}</TableCell>
      <TableCell align="right">{historyItem?.startQuote}</TableCell>
      <TableCell align="right">{historyItem?.finishDate}</TableCell>
      <TableCell align="right">{historyItem?.finishQuote}</TableCell>
      <TableCell align="right">{historyItem?.profit}</TableCell>
    </TableRow>
  )
}

export default HistoryQuotesRow
