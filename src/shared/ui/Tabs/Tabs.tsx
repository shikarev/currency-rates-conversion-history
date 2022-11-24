import { Box, Tabs as MuiTabs } from '@mui/material'
import { ReactNode, SyntheticEvent, useState } from 'react'
import { ExchangeRateCard } from 'entities/ExchangeRate'
import { ConverterCard } from 'entities/Converter/ui/ConverterCard/ConverterCard'
import { HistoryQuotesCard } from 'entities/HistoryQuotes/ui/HistoryQuotesCard/HistoryQuotesCard'
import { Tab } from '../Tab/Tab'

interface TabsProps {

}

interface TabPanelProps {
    children?: ReactNode;
    index: number
    value: number
}

function TabPanel(props: TabPanelProps) {
  const {
    children, value, index, ...other
  } = props

  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          {children}
        </Box>
      )}
    </Box>
  )
}

const Tabs = (props: TabsProps) => {
  const [value, setValue] = useState(0)

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  return (
    <Box sx={{ width: '100%' }}>
      <MuiTabs
        value={value}
        onChange={handleChange}
        sx={{
          minWidth: '300px',
          '& .MuiTabs-indicator': {
            display: 'none',
          },
        }}
      >
        <Tab label="Курсы валют" value={0} />
        <Tab label="Конвертор" value={1} />
        <Tab label="История" value={2} />
      </MuiTabs>

      <TabPanel value={value} index={0}>
        <ExchangeRateCard />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ConverterCard />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <HistoryQuotesCard />
      </TabPanel>
    </Box>
  )
}

export { Tabs }
