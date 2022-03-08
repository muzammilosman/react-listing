import React from 'react'
import { SortDown, SortUp } from 'react-bootstrap-icons'

export const SortRestaurants = ({onSort, sortAscending}) => {
    const sortByPrice = () => {
        onSort();
    }
  return (
    <div className='sort-field d-flex align-middle'>
        <div className='sort-label'>
            Sort by price: {sortAscending}
        </div>
        <div className='sort-field'>
            <button className='btn' onClick={() => sortByPrice()}>
                {
                    sortAscending ? <SortDown></SortDown> : <SortUp></SortUp>
                }
            </button>
        </div>
    </div>
  )
}
