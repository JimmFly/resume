import { Card, Checkbox, Table, Tag } from 'antd'
import React, { useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import type { Data } from './data'
import users from './data'
import './style.css'

/**
 * Advanced filter table component with age range and city filters
 * Supports multi-select, inverse selection, empty state, and URL synchronization
 */
const AdvancedFilterTable: React.FC = () => {
  // State for age range filter
  const [selectedAgeRanges, setSelectedAgeRanges] = useState<string[]>([])
  // State for city filter
  const [selectedCities, setSelectedCities] = useState<string[]>([])
  // State for page size
  const [pageSize, setPageSize] = useState<number>(10)

  const [searchParams, setSearchParams] = useSearchParams()

  /**
   * Initialize filters from URL parameters on component mount
   */
  useEffect(() => {
    const ageRangesParam = searchParams.get('ageRanges')
    const citiesParam = searchParams.get('cities')

    if (ageRangesParam) {
      setSelectedAgeRanges(ageRangesParam.split(','))
    }
    if (citiesParam) {
      setSelectedCities(citiesParam.split(','))
    }
  }, [searchParams])

  /**
   * Update URL parameters when filters change
   */
  useEffect(() => {
    const newParams = new URLSearchParams(searchParams)

    // Update age ranges parameter
    if (selectedAgeRanges.length > 0) {
      newParams.set('ageRanges', selectedAgeRanges.join(','))
    } else {
      newParams.delete('ageRanges')
    }

    // Update cities parameter
    if (selectedCities.length > 0) {
      newParams.set('cities', selectedCities.join(','))
    } else {
      newParams.delete('cities')
    }

    // Update URL without page reload
    setSearchParams(newParams, { replace: true })
  }, [searchParams, selectedAgeRanges, selectedCities, setSearchParams])

  /**
   * Analyze data to generate age ranges based on actual age distribution
   */
  const analyzeAgeRanges = useMemo(() => {
    if (!users || users.length === 0) return []

    // Get all ages from data
    const ages = users.map(user => user.age).sort((a, b) => a - b)
    const minAge = Math.min(...ages)
    const maxAge = Math.max(...ages)

    // Use 10-year intervals as requested
    const rangeSize = 10

    // Generate ranges starting from the minimum age
    const ranges = []
    const startAge = Math.floor(minAge / rangeSize) * rangeSize

    for (let i = startAge; i <= maxAge + rangeSize; i += rangeSize) {
      const start = i
      const end = i + rangeSize - 1

      // Check if this range contains any actual data
      const hasData = ages.some(age => age >= start && age <= end)

      if (hasData) {
        ranges.push({
          label: `${start}-${end}`,
          value: `${start}-${end}`,
          min: start,
          max: end,
          count: ages.filter(age => age >= start && age <= end).length,
        })
      }
    }

    return ranges
  }, [])

  // Use the analyzed age ranges
  const ageRanges = analyzeAgeRanges

  // Get unique cities from data
  const uniqueCities = useMemo(() => {
    const cities = [...new Set(users.map(item => item.address))]
    return cities.sort()
  }, [])

  // Filter data based on selected filters
  const filteredData = useMemo(() => {
    let filtered = users

    // Filter by age ranges
    if (selectedAgeRanges.length > 0) {
      filtered = filtered.filter(item => {
        return selectedAgeRanges.some(rangeValue => {
          const range = ageRanges.find(r => r.value === rangeValue)
          if (range) {
            return item.age >= range.min && item.age <= range.max
          }
          return false
        })
      })
    }

    // Filter by cities
    if (selectedCities.length > 0) {
      filtered = filtered.filter(item => selectedCities.includes(item.address))
    }

    return filtered
  }, [ageRanges, selectedAgeRanges, selectedCities])

  /**
   * Handle age range checkbox change
   */
  const handleAgeRangeChange = (value: string, checked: boolean) => {
    if (checked) {
      setSelectedAgeRanges(prev => [...prev, value])
    } else {
      setSelectedAgeRanges(prev => prev.filter(item => item !== value))
    }
  }

  /**
   * Handle city checkbox change
   */
  const handleCityChange = (value: string, checked: boolean) => {
    if (checked) {
      setSelectedCities(prev => [...prev, value])
    } else {
      setSelectedCities(prev => prev.filter(item => item !== value))
    }
  }

  /**
   * Clear age range selection
   */
  const clearAgeRangeSelection = () => {
    setSelectedAgeRanges([])
  }

  /**
   * Clear city selection
   */
  const clearCitySelection = () => {
    setSelectedCities([])
  }

  /**
   * Select all age ranges
   */
  const selectAllAgeRanges = () => {
    setSelectedAgeRanges(ageRanges.map(range => range.value))
  }

  /**
   * Invert age range selection
   */
  const invertAgeRangeSelection = () => {
    const allValues = ageRanges.map(range => range.value)
    const newSelection = allValues.filter(value => !selectedAgeRanges.includes(value))
    setSelectedAgeRanges(newSelection)
  }

  /**
   * Select all cities
   */
  const selectAllCities = () => {
    setSelectedCities([...uniqueCities])
  }

  /**
   * Invert city selection
   */
  const invertCitySelection = () => {
    const newSelection = uniqueCities.filter(city => !selectedCities.includes(city))
    setSelectedCities(newSelection)
  }



  // Table columns configuration
  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      width: 80,
      sorter: (a: Data, b: Data) => a.id - b.id,
    },
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
      sorter: (a: Data, b: Data) => a.name.localeCompare(b.name),
    },
    {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
      width: 100,
      sorter: (a: Data, b: Data) => a.age - b.age,
    },
    {
      title: '城市',
      dataIndex: 'address',
      key: 'address',
      sorter: (a: Data, b: Data) => a.address.localeCompare(b.address),
    },
  ]

  return (
    <div className='advanced-filter-table'>
      <h2 className='table-title'>高级筛选表格</h2>

      <Card className='filter-card'>
        {/* Age Range Filter */}
        <div className='filter-section'>
          <div className='filter-header'>
            <span className='filter-label'>年龄段:</span>
            {selectedAgeRanges.map(range => (
              <Tag key={range} color='blue' className='filter-tag'>
                {range}
              </Tag>
            ))}
            {selectedAgeRanges.length > 0 && (
              <button className='clear-button' onClick={clearAgeRangeSelection}>
                清空
              </button>
            )}
          </div>
          <div className='checkbox-grid'>
            {ageRanges.map(range => (
              <div key={range.value} className='checkbox-item'>
                <Checkbox
                  checked={selectedAgeRanges.includes(range.value)}
                  onChange={e => handleAgeRangeChange(range.value, e.target.checked)}
                >
                  {range.label}
                </Checkbox>
              </div>
            ))}
          </div>
          <div className='filter-actions'>
            <button className='action-button primary' onClick={selectAllAgeRanges}>
              全选
            </button>
            <button className='action-button secondary' onClick={invertAgeRangeSelection}>
              反选
            </button>
          </div>
        </div>

        {/* City Filter */}
        <div className='filter-section'>
          <div className='filter-header'>
            <span className='filter-label'>城市:</span>
            {selectedCities.map(city => (
              <Tag key={city} color='green' className='filter-tag'>
                {city}
              </Tag>
            ))}
            {selectedCities.length > 0 && (
              <button className='clear-button' onClick={clearCitySelection}>
                清空
              </button>
            )}
          </div>
          <div className='checkbox-grid'>
            {uniqueCities.map(city => (
              <div key={city} className='checkbox-item'>
                <Checkbox
                  checked={selectedCities.includes(city)}
                  onChange={e => handleCityChange(city, e.target.checked)}
                >
                  {city}
                </Checkbox>
              </div>
            ))}
          </div>
          <div className='filter-actions'>
            <button className='action-button primary' onClick={selectAllCities}>
              全选
            </button>
            <button className='action-button secondary' onClick={invertCitySelection}>
              反选
            </button>
          </div>
        </div>
      </Card>

      {/* Results Summary */}
      <Card className='results-card'>
        <div className='results-header'>
          <span className='results-text'>筛选结果: 共 {filteredData.length} 条记录</span>
        </div>
      </Card>

      {/* Data Table */}
      {filteredData.length > 0 ? (
        <Table
          columns={columns}
          dataSource={filteredData}
          rowKey='id'
          pagination={{
            pageSize: pageSize,
            showSizeChanger: true,
            showQuickJumper: true,
            showTotal: (total, range) => `第 ${range[0]}-${range[1]} 条，共 ${total} 条`,
            onShowSizeChange: (_, size) => setPageSize(size),
          }}
          className='data-table'
        />
      ) : (
        <div className='empty-state'>
          <div className='empty-state-icon'>📊</div>
          <div className='empty-state-text'>暂无数据</div>
          <div className='empty-state-description'>请调整筛选条件后重试</div>
        </div>
      )}
    </div>
  )
}

export default AdvancedFilterTable
