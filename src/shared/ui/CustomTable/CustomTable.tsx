import React, { useCallback } from 'react'
import Arrow from 'shared/assets/icons/big-arrow.svg'
import { ColumnProps, CustomTableProps } from 'shared/ui/CustomTable/types/types'
import {
  HeaderTableCellStyled,
  HeaderTableRowStyled,
  IconButtonArrowLeftStyled,
  IconButtonArrowRightStyled,
  PageCountWrapperStyled,
  PaginationWrapper,
  TableBodyStyled,
  TableContainerStyled,
  TableHeadStyled,
  TableStyled,
} from './CustomTable.styled'

const CustomTable: React.FC<CustomTableProps> = ({
  page,
  setPage,
  rowsPerPage,
  columns,
  dataLength,
  children,
}) => {
  const handlePrevPage = useCallback(() => {
    setPage(page - 1)
  }, [page, setPage])

  const handleNextPage = useCallback(() => {
    setPage(page + 1)
  }, [page, setPage])

  const totalPages = dataLength && (dataLength / rowsPerPage)

  return (
    <TableContainerStyled>
      <TableStyled>
        <TableHeadStyled>
          <HeaderTableRowStyled>
            {columns.map((item:ColumnProps) => (
              <HeaderTableCellStyled
                key={item.field}
                align={item.align}
                width={item.width}
                sx={{ maxWidth: item.maxWidth }}
              >
                {item.headerName}
              </HeaderTableCellStyled>
            ))}
          </HeaderTableRowStyled>
        </TableHeadStyled>
        <TableBodyStyled>
          {children}
        </TableBodyStyled>
      </TableStyled>

      {!totalPages ? null
        : (
          <PaginationWrapper>
            {totalPages <= 1 ? null
              : (
                <>
                  <IconButtonArrowLeftStyled
                    disableRipple
                    onClick={handlePrevPage}
                    disabled={page === 0}
                  >
                    <Arrow />
                  </IconButtonArrowLeftStyled>
                  <PageCountWrapperStyled>
                    {`${page + 1} / ${totalPages}`}
                  </PageCountWrapperStyled>
                  <IconButtonArrowRightStyled
                    disableRipple
                    onClick={handleNextPage}
                    disabled={page === totalPages - 1}
                  >
                    <Arrow />
                  </IconButtonArrowRightStyled>
                </>
              )}
          </PaginationWrapper>
        )}
    </TableContainerStyled>
  )
}

export { CustomTable }
