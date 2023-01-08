import React, { useCallback } from 'react'
import { useSelector } from 'react-redux'
import { TableCellStyled, TableRowStyled } from 'shared/ui/CustomTable/CustomTable.styled'
import { CustomTableRowProps } from 'shared/ui/CustomTable/types/types'
import StarOutlined from 'shared/assets/icons/star-outlined.svg'
import StarFilled from 'shared/assets/icons/star-filled.svg'
import { IconButton } from '@mui/material'
import { exchangeRateActions } from 'entities/ExchangeRate'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { getExchangeRateItem } from 'entities/ExchangeRate/model/selectors/getExchangeRateItem/getExchangeRateItem'

const ExchangeRateRow: React.FC<CustomTableRowProps> = ({ id }) => {
  const dispatch = useAppDispatch()

  const exchangeItem = useSelector((state) => getExchangeRateItem(state, id))

  const handleFavorites = useCallback((favorite: boolean | undefined, id: string | undefined) => {
    if (favorite && id) {
      dispatch(exchangeRateActions.removeFromFavorites(id))
    }

    if (!favorite && id) {
      dispatch(exchangeRateActions.addToFavorites(id))
    }
  }, [dispatch])

  return (
    <TableRowStyled>
      <TableCellStyled component="th" scope="row" sx={{ maxWidth: '85px' }}>
        <IconButton
          onClick={() => handleFavorites(exchangeItem?.favorite, exchangeItem?.id)}
        >
          {exchangeItem?.favorite ? <StarFilled /> : <StarOutlined />}
        </IconButton>
      </TableCellStyled>
      <TableCellStyled align="left">{exchangeItem?.asset}</TableCellStyled>
      <TableCellStyled align="left">{exchangeItem?.quote}</TableCellStyled>
      <TableCellStyled align="left">{exchangeItem?.startDate}</TableCellStyled>
    </TableRowStyled>
  )
}

export { ExchangeRateRow }
