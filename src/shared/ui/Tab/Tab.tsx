import { styled, Tab as MuiTab } from '@mui/material'

interface StyledTabProps {
    label: string;
    value: number;
}

const Tab = styled((props: StyledTabProps) => (
  <MuiTab
    sx={{
      width: { xs: '30px', sm: '120px', md: '180px' },
    }}
    disableRipple
    {...props}
  />
))(
  ({ theme }) => ({
    textTransform: 'none',
    fontSize: '14px',
    fontWeight: 400,
    height: '40px',
    border: `1px solid ${theme.palette.primary.main}`,
    backgroundColor: theme.palette.background.default,
    '&:nth-of-type(even)': {
      '&:not(:last-child)': {
        borderRight: 0,
        borderLeft: 0,
      },
    },
    '&:first-of-type': {
      borderTopLeftRadius: '20px',
    },
    '&:last-of-type': {
      borderTopRightRadius: '20px',
    },
    color: theme.palette.primary.main,
    '&:hover': {
      color: theme.palette.primary.light,
      opacity: 1,
    },
    '&.Mui-selected': {
      color: '#FFFFFF',
      backgroundColor: theme.palette.primary.main,
    },
    '&.Mui-focusVisible': {
      backgroundColor: theme.palette.primary.dark,
    },
    borderBottom: 0,
  }),
)

export { Tab }
