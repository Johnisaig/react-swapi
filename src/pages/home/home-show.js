import React, { useState, useEffect } from 'react'
import moment from 'moment'

import { useDispatch } from 'react-redux'
import {
  fetchStarShips,
  getStarShip,
} from 'redux/swapi/starship/starhip.actions'

import { Table, Button } from 'reactstrap'

import { TableHead } from 'components/table'
import { FaEye } from 'react-icons/all'

import useSwapiSelector from 'hooks/useSwapiSelector'
import CustomPagination from 'components/pagination/custom-pagination'
import HomePreview from './home-preview'
import Navbar from 'components/navbar/navbar'

import './home-show.scss'

const tableColumns = [
  {
    key: 'id',
    children: '#',
  },
  {
    key: 'name',
    children: 'Name',
  },
  {
    key: 'model',
    children: 'Model',
  },
  {
    key: 'manufacturer',
    children: 'Manufacturer',
  },
  {
    key: 'consumables',
    children: 'Consumables',
  },
  {
    key: 'action',
    children: 'Action',
  },
]

const TableRow = ({
  id,
  name,
  model,
  manufacturer,
  consumables,
  created,
  onViewClick = () => {},
}) => {
  return (
    <tr>
      <td className="table-text">{id}</td>
      <td>
        <span className="table-text">{name}</span>
        <div className="small text-muted">
          Created At: {moment(created).format('LLL')}
        </div>
      </td>
      <td>
        <span className="table-text">{model}</span>
      </td>
      <td>
        <span className="table-text">{manufacturer}</span>
      </td>
      <td>
        <span className="table-text">{consumables}</span>
      </td>
      <td>
        <Button size="sm" outline color="success" onClick={onViewClick}>
          <FaEye />
        </Button>
      </td>
    </tr>
  )
}

export default function Home() {
  const dispatch = useDispatch()

  const [isDarkMode, setIsDarkMode] = useState(true)
  const [isPreviewOpen, setIsPreviewOpen] = useState(false)

  const response = useSwapiSelector('starship.resource', { results: [] })
  const data = useSwapiSelector('starship.data')

  const shouldToggle = () => {
    setIsDarkMode((prevState) => !prevState)
  }

  useEffect(() => {
    dispatch(fetchStarShips())
  }, [dispatch])

  const onPageChanged = (page) => {
    let params = { page }

    dispatch(fetchStarShips(params))
  }

  const onViewClick = (url) => {
    dispatch(getStarShip(url))
    setIsPreviewOpen(true)
  }

  const togglePreview = () => {
    setIsPreviewOpen(!isPreviewOpen)
  }

  return (
    <div className={`theme ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <Navbar isDarkMode={isDarkMode} onToggle={shouldToggle} />
      <div className="starships-container">
        <div className="table-section">
          <div className="table-header">STARTSHIP LIST</div>
          <HomePreview
            isOpen={isPreviewOpen}
            onClose={togglePreview}
            {...data}
          />
          <Table
            hover
            responsive
            className="table-outline mb-0 d-none d-sm-table"
          >
            <TableHead items={tableColumns} />
            {Array.isArray(response.results) && (
              <tbody>
                {response.results.map((row, id) => {
                  return (
                    <TableRow
                      key={id}
                      id={id + 1}
                      name={row.name}
                      onViewClick={() => onViewClick(row.url)}
                      {...row}
                    />
                  )
                })}
              </tbody>
            )}
          </Table>
          <CustomPagination
            total={response.count}
            pageSize={5}
            onPageChanged={onPageChanged}
          />
        </div>
      </div>
    </div>
  )
}
