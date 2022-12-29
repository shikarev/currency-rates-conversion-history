import React from 'react'
import {
  GridColDef,
  gridPageCountSelector,
  gridPageSelector,
  ruRU,
  useGridApiContext,
  useGridSelector,
} from '@mui/x-data-grid'
import Arrow from 'shared/assets/icons/big-arrow.svg'
import {
  ArrowLeftStyled,
  ArrowRightStyled,
  DataGridStyled,
  PageCountWrapperStyled,
  PaginationWrapper,
} from './TableDataGrid.styled'

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
    <PaginationWrapper>
      <ArrowLeftStyled
        component="span"
        onClick={() => apiRef.current.setPage(page - 1)}
      >
        <Arrow />
      </ArrowLeftStyled>
      <PageCountWrapperStyled>
        {`${page + 1} / ${pageCount}`}
      </PageCountWrapperStyled>
      <ArrowRightStyled
        component="span"
        onClick={() => apiRef.current.setPage(page + 1)}
      >
        <Arrow />
      </ArrowRightStyled>
    </PaginationWrapper>
  )
}

const TableDataGrid = ({ data, columns, hideFooterPagination }: TableDataGridProps) => (
  <DataGridStyled
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
  />
)

export { TableDataGrid }
