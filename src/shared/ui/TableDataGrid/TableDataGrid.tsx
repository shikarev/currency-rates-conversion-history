import React from 'react'
import {
  DataGrid as MuiDataGrid,
  GridColDef,
  gridPageCountSelector,
  gridPageSelector,
  ruRU,
  useGridApiContext,
  useGridSelector,
} from '@mui/x-data-grid'
import { Box } from '@mui/material'
import Arrow from 'shared/assets/icons/big-arrow.svg'

interface TableDataGridProps {
    data: any[]
    columns: GridColDef[]
    hideFooterPagination?: boolean
}

export function CustomPagination() {
  const apiRef = useGridApiContext()
  const page = useGridSelector(apiRef, gridPageSelector)
  const pageCount = useGridSelector(apiRef, gridPageCountSelector)

  return (
    <Box>
      <Box>
        <Box sx={{ display: 'flex' }}>
          <Box
            component="span"
            sx={{
              color: 'primary.main', mr: '15px', '& svg': { transform: 'rotate(180deg)' }, cursor: 'pointer',
            }}
            onClick={() => apiRef.current.setPage(page - 1)}
          >
            <Arrow />
          </Box>
          <Box sx={{ pointerEvents: 'none', userSelect: 'none' }}>
            {`${page + 1} / ${pageCount}`}
          </Box>
          <Box
            component="span"
            sx={{ color: 'primary.main', ml: '15px', cursor: 'pointer' }}
            onClick={() => apiRef.current.setPage(page + 1)}
          >
            <Arrow />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

const TableDataGrid = ({ data, columns, hideFooterPagination }: TableDataGridProps) => (
  <MuiDataGrid
    loading={!data}
    rows={data}
    getRowId={(row) => row.id}
    columns={columns}
    rowHeight={58}
    headerHeight={60}
    rowCount={data.length}
    pageSize={10}
    rowsPerPageOptions={[10]}
    disableSelectionOnClick
    disableColumnMenu
    disableDensitySelector
    disableColumnSelector
    hideFooterPagination={hideFooterPagination}
    localeText={ruRU.components.MuiDataGrid.defaultProps.localeText}
    components={{
      Pagination: CustomPagination,
    }}
    sx={{
      height: '460px',
      borderTopLeftRadius: 0,
      borderTopRightRadius: '20px',
      borderBottomLeftRadius: '20px',
      borderBottomRightRadius: '20px',
      border: '1px solid #1A237E',
      borderTop: 0,
      '& .MuiDataGrid-iconSeparator': { color: 'transparent' },
      '& .MuiDataGrid-columnHeaders': {
        borderTopRightRadius: '20px',
        borderTopLeftRadius: 0,
        backgroundColor: 'primary.main',
        borderBottom: 0,
        color: 'white',
      },
      '& .MuiDataGrid-columnHeader:last-child .MuiDataGrid-columnSeparator': {
        display: 'none',
      },
      '& .MuiDataGrid-columnHeader:focus-within': {
        outline: 'none',
      },
      '& .MuiDataGrid-cell:focus-within, & .MuiDataGrid-cell:focus': {
        outline: 'none',
      },
      '& .MuiDataGrid-footerContainer': {
        border: 0,
        justifyContent: 'center',
      },
    }}
  />
)

export { TableDataGrid }
