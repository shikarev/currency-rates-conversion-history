import React, { useCallback } from 'react'
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
  const gridApiContextRef = useGridApiContext()
  const page = useGridSelector(gridApiContextRef, gridPageSelector)
  const pageCount = useGridSelector(gridApiContextRef, gridPageCountSelector)

  const handlePrevPage = useCallback(() => {
    gridApiContextRef.current.setPage(page - 1)
  }, [gridApiContextRef, page])

  const handleNextPage = useCallback(() => {
    gridApiContextRef.current.setPage(page + 1)
  }, [gridApiContextRef, page])

  return (
    <PaginationWrapper>
      <ArrowLeftStyled
        component="span"
        onClick={handlePrevPage}
      >
        <Arrow />
      </ArrowLeftStyled>
      <PageCountWrapperStyled>
        {`${page + 1} / ${pageCount}`}
      </PageCountWrapperStyled>
      <ArrowRightStyled
        component="span"
        onClick={handleNextPage}
      >
        <Arrow />
      </ArrowRightStyled>
    </PaginationWrapper>
  )
}

const TableDataGrid: React.FC<TableDataGridProps> = ({ data, columns, hideFooterPagination }) => (
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
