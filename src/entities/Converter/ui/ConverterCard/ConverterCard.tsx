import {
  Box, Button, FormControl, FormHelperText, MenuItem, OutlinedInput, Select, SelectChangeEvent, Typography,
} from '@mui/material'
import { classNames } from 'shared/lib/classNames/classNames'
import { useSelector } from 'react-redux'
import { getCurrencyPairList } from 'entities/ExchangeRate/model/selectors/getCurrencyPairList/getCurrencyPairList'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import {
  ChangeEvent, FormEvent, useCallback, useEffect,
} from 'react'
import { converterActions } from 'entities/Converter'
import SelectArrow from 'shared/assets/icons/select-arrow-down.svg'
import { getAmount } from '../../model/selectors/getAmount/getAmount'
import { getAssetFrom } from '../../model/selectors/getAssetFrom/getAssetFrom'
import { getAssetTo } from '../../model/selectors/getAssetTo/getAssetTo'
import { getTotal } from '../../model/selectors/getTotal/getTotal'
import { getToAssetsList } from '../../model/selectors/getToAssetsList/getToAssetsList'
import { getFromAssetsList } from '../../model/selectors/getFromAssetsList/getFromAssetsList'
import cls from './ConverterCard.module.scss'

interface ConverterCardProps {
  className?: string
}

const ConverterCard = (props: ConverterCardProps) => {
  const { className } = props

  const update = useSelector(getCurrencyPairList)
  const dispatch = useAppDispatch()

  const amount = useSelector(getAmount)
  const total = useSelector(getTotal)
  const assetFrom = useSelector(getAssetFrom)
  const assetTo = useSelector(getAssetTo)
  const fromAssetsList = useSelector(getFromAssetsList)
  const toAssetsList = useSelector(getToAssetsList)

  const handleTotal = (event: FormEvent) => {
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

  const onChangeFirstPair = useCallback((event: SelectChangeEvent) => {
    if (update) {
      const newItem = update.map((item) => (
        item.asset
      )).filter((item) => item.includes(`${event.target.value}/`))
      console.log(newItem)

      dispatch(converterActions.getAsset(newItem))
      dispatch(converterActions.setFirst(event.target.value))
    }
  }, [dispatch, update])

  const onChangeAssetTo = useCallback((event: SelectChangeEvent) => {
    dispatch(converterActions.setAssetTo(event.target.value))
  }, [dispatch])

  useEffect(() => {
    if (update) {
      dispatch(converterActions.setDefaultAssets(update))
    }
  }, [dispatch, update])

  return (
    <form className={classNames(cls.ConverterCard, {}, [className])} onSubmit={handleTotal}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'primary.main',
          height: '60px',
          borderTopRightRadius: '20px',
        }}
      >
        <Typography sx={{ color: '#FFFFFF', fontSize: '16px' }}>Конвертация валют</Typography>
      </Box>
      <Box
        sx={{
          border: '1px solid',
          borderColor: 'primary.main',
          borderTop: 0,
          borderBottomRightRadius: '20px',
          borderBottomLeftRadius: '20px',
          height: '300px',
          p: '10px',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            height: '130px',
            justifyContent: 'center',
            alignItems: 'center',
            borderBottom: '1px solid #E1E1E1',
          }}
        >
          <Box sx={{ display: 'flex', height: '60px', alignItems: 'flex-end' }}>
            <FormControl sx={{ mr: '20px', width: '80px' }} variant="outlined">
              <FormHelperText sx={{ fontSize: '14px', color: '#000000', mb: '2px' }}>Сумма</FormHelperText>
              <OutlinedInput
                value={amount}
                onChange={onChangeConverter}
                sx={{
                  borderRadius: '5px',
                  fontSize: '16px',
                  '& .MuiOutlinedInput-input': {
                    p: '10px',
                  },
                }}
              />
            </FormControl>

            <FormControl sx={{ width: '80px', mr: '5px' }} variant="outlined">
              <Select
                value={assetFrom}
                onChange={onChangeFirstPair}
                IconComponent={SelectArrow}
                sx={{
                  borderRadius: '5px',
                  fontSize: '16px',
                  height: '43px',
                  '& .MuiSelect-icon': {
                    top: 'calc(50% - 2px)',
                    right: '10px',
                  },
                  '& .MuiOutlinedInput-input': {
                    p: '10px',
                  },
                }}
              >
                {fromAssetsList.map((item) => (
                  <MenuItem key={item} value={item}>{item}</MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl sx={{ width: '80px', mr: '20px' }} variant="outlined">
              <Select
                value={assetTo}
                onChange={onChangeAssetTo}
                IconComponent={SelectArrow}
                displayEmpty
                sx={{
                  borderRadius: '5px',
                  fontSize: '16px',
                  height: '43px',
                  '& .MuiSelect-icon': {
                    top: 'calc(50% - 2px)',
                    right: '10px',
                  },
                  '& .MuiOutlinedInput-input': {
                    p: '10px',
                  },
                }}
              >
                {toAssetsList.map((item) => (
                  <MenuItem key={item} value={item}>{item}</MenuItem>
                ))}
              </Select>
            </FormControl>
            <Button
              color="primary"
              variant="contained"
              sx={{ width: '150px' }}
              type="submit"
            >
              Расчитать
            </Button>
          </Box>
        </Box>
        <Box
          sx={{
            height: '150px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Box sx={{ width: '435px' }}>
            {total
              ? (
                <Box>
                  <FormHelperText sx={{ fontSize: '14px', color: '#000000', mb: '2px' }}>Итого</FormHelperText>
                  <Typography>{total}</Typography>
                </Box>
              )
              : null}
          </Box>
        </Box>
      </Box>
    </form>
  )
}

export { ConverterCard }
