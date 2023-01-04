import React from 'react'
import { TableCell } from '@mui/material'
import { useSelector } from 'react-redux'
import { getHistoryQuotesItem } from 'entities/HistoryQuotes/model/selectors/getHistoryQuotesItem/getHistoryQuotesItem'
import { TableRowStyled } from './HistoryQuotesRow.styled'

const HistoryQuotesRow = ({ id }:{id: string}) => {
  const historyItem = useSelector(getHistoryQuotesItem(id))

  return (
    <TableRowStyled>
      <TableCell component="th" scope="row">
        {historyItem?.asset}
      </TableCell>
      <TableCell align="left">{historyItem?.startDate}</TableCell>
      <TableCell align="left">{historyItem?.startQuote}</TableCell>
      <TableCell align="left">{historyItem?.finishDate}</TableCell>
      <TableCell align="left">{historyItem?.finishQuote}</TableCell>
      <TableCell align="left">{historyItem?.profit}</TableCell>
    </TableRowStyled>
  )
}

export { HistoryQuotesRow }
