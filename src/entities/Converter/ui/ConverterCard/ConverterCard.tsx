import {
  FormHelperText, MenuItem, OutlinedInputProps, Typography,
} from '@mui/material'
import { useSelector } from 'react-redux'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import React, { useCallback, useEffect } from 'react'
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
  TotalWrapper,
} from './ConverterCard.styled'
import { getAmount } from '../../model/selectors/getAmount/getAmount'
import { getAssetFrom } from '../../model/selectors/getAssetFrom/getAssetFrom'
import { getAssetTo } from '../../model/selectors/getAssetTo/getAssetTo'
import { getToAssetsList } from '../../model/selectors/getToAssetsList/getToAssetsList'
import { getFromAssetsList } from '../../model/selectors/getFromAssetsList/getFromAssetsList'
import { fetchConverterCurrencyPairs } from
  '../../model/services/fetchConverterCurrencyPairs/fetchConverterCurrencyPairs'
import { getTotal } from '../../model/selectors/getTotal/getTotal'

const ConverterCard = () => {
  const dispatch = useAppDispatch()

  const amount = useSelector(getAmount) ?? ''
  const total = useSelector(getTotal)
  const assetFrom = useSelector(getAssetFrom)
  const assetTo = useSelector(getAssetTo)
  const fromAssetsList = useSelector(getFromAssetsList)
  const toAssetsList = useSelector(getToAssetsList)

  const handleSubmit: React.FormEventHandler = (event) => {
    event.preventDefault()
  }

  const onChangeAmount: OutlinedInputProps['onChange'] = useCallback((event) => {
    const value = event.target.value.replace(/\D/g, '')
    dispatch(converterActions.setAmount(+value))
  }, [dispatch])

  const onChangeFromAsset: SelectInputProps['onChange'] = useCallback((event) => {
    dispatch(converterActions.setChangeFromAsset(event.target.value))
  }, [dispatch])

  const onChangeAssetTo: SelectInputProps['onChange'] = useCallback((event) => {
    dispatch(converterActions.setAssetTo(event.target.value))
  }, [dispatch])

  useEffect(() => {
    dispatch(fetchConverterCurrencyPairs())
    console.log('converter')
  }, [dispatch])

  return (
    <ConverterCardFormStyled onSubmit={handleSubmit}>
      <TitleContainerStyled>
        <TitleStyled>?????????????????????? ??????????</TitleStyled>
      </TitleContainerStyled>

      <MainBorderStyled>
        <ConverterTopStyled>
          <ConverterWrapperStyled>
            <AmountFormControlStyled variant="outlined">
              <FormHelperText>??????????</FormHelperText>
              <AmountOutlinedInputStyled
                value={amount}
                onChange={onChangeAmount}
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
              ??????????????????
            </TotalSubmitButton>
          </ConverterWrapperStyled>
        </ConverterTopStyled>

        <ConverterBottomStyled>
          {!total ? null : (
            <TotalWrapper>
              <TotalFormHelperText>
                ??????????
              </TotalFormHelperText>
              <Typography>
                {total.toFixed(4)}
              </Typography>
            </TotalWrapper>
          )}
        </ConverterBottomStyled>
      </MainBorderStyled>
    </ConverterCardFormStyled>
  )
}

export { ConverterCard }
