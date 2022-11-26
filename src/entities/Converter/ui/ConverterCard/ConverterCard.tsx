import {
  Box, Button, FormControl, FormHelperText, MenuItem, OutlinedInput, Select, SelectChangeEvent, Typography,
} from '@mui/material'
import { classNames } from 'shared/lib/classNames/classNames'
import { useSelector } from 'react-redux'
import { getCurrencyPairList } from 'entities/ExchangeRate/model/selectors/getCurrencyPairList/getCurrencyPairList'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { getAmount } from 'entities/Converter/model/selectors/getConverter/getConverter'
import { getFirst } from 'entities/Converter/model/selectors/getFirst/getFirst'
import { getSecond } from 'entities/Converter/model/selectors/getSecond/getSecond'
import { ChangeEvent, useCallback, useEffect } from 'react'
import { converterActions } from 'entities/Converter'
import { getTotal } from 'entities/Converter/model/selectors/getTotal/getTotal'
import SelectArrow from 'shared/assets/icons/select-arrow-down.svg'
import { getSecondItems } from 'entities/Converter/model/selectors/getSecondItems/getSecondItems'
import { getFirstItems } from 'entities/Converter/model/selectors/getFirstItems/getFirstItems'
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

  const firstPair = useSelector(getFirst)
  const secondPair = useSelector(getSecond)

  const selectorOne = useSelector(getFirstItems)
  const selectorTwo = useSelector(getSecondItems)

  const handleTotal = () => {
    const result = `${firstPair}/${secondPair}`
    const quotes = update?.find((x) => x.asset === result)?.quote

    const finish = Number(amount) * Number(quotes)
    dispatch(converterActions.setTotal(String(finish.toFixed(0))))
  }

  const onChangeConverter = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    dispatch(converterActions.setCurrency(e.target.value))
  }, [dispatch])

  const onChangeFirstPair = useCallback((e: SelectChangeEvent) => {
    if (update) {
      const newItem = update.map((item) => (
        item.asset
      )).filter((item) => item.includes(`${e.target.value}/`))

      dispatch(converterActions.setSecondItems(newItem))
      dispatch(converterActions.setSecond(newItem[0].split('/')[1]))
      dispatch(converterActions.setFirst(e.target.value))
    }
  }, [dispatch, update])

  const onChangeSecondPair = useCallback((e: SelectChangeEvent) => {
    dispatch(converterActions.setSecond(e.target.value))
  }, [dispatch])

  useEffect(() => {
    if (update) {
      dispatch(converterActions.setFirstItems(update))
    }
  }, [dispatch, update])

  return (
    <div className={classNames(cls.ConverterCard, {}, [className])}>
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
                value={firstPair}
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
                {selectorOne.map((item) => (
                  <MenuItem key={item} value={item}>{item}</MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl sx={{ width: '80px', mr: '20px' }} variant="outlined">
              <Select
                value={secondPair}
                onChange={onChangeSecondPair}
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
                {selectorTwo.map((item) => (
                  <MenuItem key={item} value={item}>{item}</MenuItem>
                ))}
              </Select>
            </FormControl>
            <Button
              color="primary"
              variant="contained"
              sx={{ width: '150px' }}
              onClick={() => handleTotal()}
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
    </div>
  )
}

export { ConverterCard }
