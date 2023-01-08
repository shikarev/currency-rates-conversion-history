import React from 'react'
import { useSelector } from 'react-redux'
import { getHistoryQuotesItem } from 'entities/HistoryQuotes/model/selectors/getHistoryQuotesItem/getHistoryQuotesItem'
import { TableCellStyled, TableRowStyled } from 'shared/ui/CustomTable/CustomTable.styled'
import { CustomTableRowProps } from 'shared/ui/CustomTable/types/types'
import { StateSchema } from 'app/providers/StoreProvider'

const HistoryQuotesRow: React.FC<CustomTableRowProps> = ({ id }) => {
  const historyItem = useSelector((state: StateSchema) => getHistoryQuotesItem(state, id))

  return (
    <TableRowStyled>
      <TableCellStyled component="th" scope="row">
        {historyItem?.asset}
      </TableCellStyled>
      <TableCellStyled align="left">{historyItem?.startDate}</TableCellStyled>
      <TableCellStyled align="left">{historyItem?.startQuote}</TableCellStyled>
      <TableCellStyled align="left">{historyItem?.finishDate}</TableCellStyled>
      <TableCellStyled align="left">{historyItem?.finishQuote}</TableCellStyled>
      <TableCellStyled align="left">{historyItem?.profit}</TableCellStyled>
    </TableRowStyled>
  )
}

export { HistoryQuotesRow }
