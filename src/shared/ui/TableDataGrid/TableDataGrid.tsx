import React, { useState } from 'react'
import { DataGrid as MuiDataGrid, GridColDef, ruRU } from '@mui/x-data-grid'

interface TableDataGridProps {
    data: any[]
    columns: GridColDef[]
}

const TableDataGrid = ({ data, columns }: TableDataGridProps) => {
  const [pageSize, setPageSize] = useState<number>(10)

  return (
    <MuiDataGrid
      loading={!data}
      rows={data}
      getRowId={(row) => row.id}
      columns={columns}
      rowHeight={58}
      headerHeight={60}
      rowCount={data.length}
      pageSize={pageSize}
      rowsPerPageOptions={[5, 10, 20]}
      onPageSizeChange={(newPageSize: number) => setPageSize(newPageSize)}
      disableSelectionOnClick
      autoHeight
      disableColumnMenu
      disableDensitySelector
      disableColumnSelector
      hideFooterPagination
      localeText={ruRU.components.MuiDataGrid.defaultProps.localeText}
      sx={{
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
        },
      }}
    />
  )
}

export { TableDataGrid }
