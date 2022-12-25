import { FormHelperText, MenuItem, Typography } from '@mui/material'
import { useSelector } from 'react-redux'
import { getCurrencyPairList } from 'entities/ExchangeRate/model/selectors/getCurrencyPairList/getCurrencyPairList'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import React, { ChangeEvent, useCallback, useEffect } from 'react'
import { converterActions } from 'entities/Converter'
import SelectArrow from 'shared/assets/icons/select-arrow-down.svg'
import { SelectInputProps } from '@mui/material/Select/SelectInput'
import {
  AmountFormControlStyled,
  AmountOutlinedInputStyled,
  AssetFromFormControlStyled,
  AssetToFormControlStyled,
  ConverterBottomStyled,
  ConverterCardFormStyled,
  ConverterTopStyled,
  ConverterWrapperStyled,
  MainBorderStyled,
  SelectStyled,
  TitleContainerStyled,
  TitleStyled,
  TotalFormHelperText,
  TotalSubmitButton,
} from './ConverterCard.styled'
import { getAmount } from '../../model/selectors/getAmount/getAmount'
import { getAssetFrom } from '../../model/selectors/getAssetFrom/getAssetFrom'
import { getAssetTo } from '../../model/selectors/getAssetTo/getAssetTo'
import { getTotal } from '../../model/selectors/getTotal/getTotal'
import { getToAssetsList } from '../../model/selectors/getToAssetsList/getToAssetsList'
import { getFromAssetsList } from '../../model/selectors/getFromAssetsList/getFromAssetsList'

const ConverterCard = () => {
  const update = useSelector(getCurrencyPairList)
  const dispatch = useAppDispatch()

  const amount = useSelector(getAmount)
  const total = useSelector(getTotal)
  const assetFrom = useSelector(getAssetFrom)
  const assetTo = useSelector(getAssetTo)
  const fromAssetsList = useSelector(getFromAssetsList)
  const toAssetsList = useSelector(getToAssetsList)

  const handleTotal: React.FormEventHandler = (event) => {
    event.preventDefault()
    const result = `${assetFrom}/${assetTo}`
    const quotes = update?.find((x) => x.asset === result)?.quote

    const finish = Number(amount) * Number(quotes)
    dispatch(converterActions.setTotal(String(finish.toFixed(4))))
  }

  const onChangeConverter = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.replace(/\D/g, '')
    dispatch(converterActions.setCurrency(value))
  }, [dispatch])

  const onChangeFirstPair: SelectInputProps['onChange'] = useCallback((event) => {
    if (update) {
      const newItem = update.map((item) => (
        item.asset
      )).filter((item) => item.includes(`${event.target.value}/`))

      dispatch(converterActions.getAsset(newItem))
      dispatch(converterActions.setFirst(event.target.value))
    }
  }, [dispatch, update])

  const onChangeAssetTo: SelectInputProps['onChange'] = useCallback((event) => {
    dispatch(converterActions.setAssetTo(event.target.value))
  }, [dispatch])

  useEffect(() => {
    if (update) {
      dispatch(converterActions.setDefaultAssets(update))
    }
  }, [dispatch, update])

  return (
    <ConverterCardFormStyled onSubmit={handleTotal}>
      <TitleContainerStyled>
        <TitleStyled>Конвертация валют</TitleStyled>
      </TitleContainerStyled>

      <MainBorderStyled>
        <ConverterTopStyled>
          <ConverterWrapperStyled>
            <AmountFormControlStyled variant="outlined">
              <FormHelperText>Сумма</FormHelperText>
              <AmountOutlinedInputStyled
                value={amount}
                onChange={onChangeConverter}
              />
            </AmountFormControlStyled>

            <AssetFromFormControlStyled variant="outlined">
              <SelectStyled
                value={assetFrom}
                onChange={onChangeFirstPair}
                IconComponent={SelectArrow}
              >
                {fromAssetsList.map((item) => (
                  <MenuItem key={item} value={item}>{item}</MenuItem>
                ))}
              </SelectStyled>
            </AssetFromFormControlStyled>

            <AssetToFormControlStyled variant="outlined">
              <SelectStyled
                value={assetTo}
                onChange={onChangeAssetTo}
                IconComponent={SelectArrow}
                displayEmpty
              >
                {toAssetsList.map((item) => (
                  <MenuItem key={item} value={item}>{item}</MenuItem>
                ))}
              </SelectStyled>
            </AssetToFormControlStyled>

            <TotalSubmitButton
              color="primary"
              variant="contained"
              type="submit"
            >
              Расчитать
            </TotalSubmitButton>
          </ConverterWrapperStyled>
        </ConverterTopStyled>

        <ConverterBottomStyled>
          {total ? (
            <>
              <TotalFormHelperText>
                Итого
              </TotalFormHelperText>
              <Typography>
                {total}
              </Typography>
            </>
          ) : null}
        </ConverterBottomStyled>
      </MainBorderStyled>
    </ConverterCardFormStyled>
  )
}

export { ConverterCard }
