import React from 'react'

const TableHead = ({ items = [] }) => {
  return (
    <thead className="thead-light">
      <tr>
        {items.map(item => {
          return (
            <th key={item.key} className={item.className}>
              {item.children}
            </th>
          )
        })}
      </tr>
    </thead>
  )
}

export default TableHead
