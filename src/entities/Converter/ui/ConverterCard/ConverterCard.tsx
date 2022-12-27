import {
  FormHelperText, MenuItem, OutlinedInputProps, Typography,
} from '@mui/material'
import { useSelector } from 'react-redux'
import { getCurrencyPairList } from 'entities/ExchangeRate/model/selectors/getCurrencyPairList/getCurrencyPairList'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import React, { useCallback, useEffect } from 'react'
import { converterActions } from 'entities/Converter'
import SelectArrow from 'shared/assets/icons/select-arrow-down.svg'
import { SelectInputProps } from '@mui/material/Select/SelectInput'
import { changeFromAsset } from 'entities/Converter/model/services/changeFromAsset/changeFromAsset'
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
  TotalWrapper,
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
  }

  const onChangeConverter: OutlinedInputProps['onChange'] = useCallback((event) => {
    const value = event.target.value.replace(/\D/g, '')
    dispatch(converterActions.setCurrency(value))
  }, [dispatch])

  const onChangeFromAsset: SelectInputProps['onChange'] = useCallback((event) => {
    if (update) {
      dispatch(changeFromAsset({ currentAssets: update, fromAsset: event.target.value }))
    }
  }, [dispatch, update])

  const onChangeAssetTo: SelectInputProps['onChange'] = useCallback((event) => {
    dispatch(converterActions.setAssetTo(event.target.value))
  }, [dispatch])

  useEffect(() => {
    if (update) {
      dispatch(converterActions.setDefaultAsset(update))
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
                onChange={onChangeFromAsset}
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
            <TotalWrapper>
              <TotalFormHelperText>
                Итого
              </TotalFormHelperText>
              <Typography>
                {total}
              </Typography>
            </TotalWrapper>
          ) : null}
        </ConverterBottomStyled>
      </MainBorderStyled>
    </ConverterCardFormStyled>
  )
}

export { ConverterCard }
