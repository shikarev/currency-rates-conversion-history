import { ReactNode } from 'react'

export interface ColumnProps {
    field: string,
    headerName: string,
    align?: 'inherit' | 'left' | 'center' | 'right' | 'justify',
    width: string,
}

export interface CustomTableProps {
    page: number
    setPage: (page: number) => void
    rowsPerPage: number
    columns: any[]
    dataLength: number | undefined
    children: ReactNode
    hideFooterPagination?: boolean
}
