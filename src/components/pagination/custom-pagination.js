import React from 'react'

import PaginationComponent from 'react-reactstrap-pagination'

const CustomPagination = ({
  total = 0,
  onPageChanged = () => {},
  page = 0,
  pageSize = 25,
}) => {
  return (
    <div style={{ marginTop: 30, marginBottom: 30 }}>
      <PaginationComponent
        totalItems={total}
        pageSize={pageSize}
        defaultActivePage={page}
        onSelect={onPageChanged}
      />
    </div>
  )
}

export default CustomPagination
