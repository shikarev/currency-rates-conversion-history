import {
  Box, Tabs as MuiTabs, Typography,
} from '@mui/material'
import { ReactNode, SyntheticEvent, useState } from 'react'
import { ExchangeRateCard } from 'entities/ExchangeRate'
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
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </Box>
  )
}

export { Tabs }
