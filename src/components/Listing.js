import React from 'react'
import { Trash } from 'react-bootstrap-icons';

export const Listing = ({restaurants, onDelete}) => {

  const deleteListing = (id) => {
    if(id){
      onDelete(id);
    }
  }

  return (
    <div className='listings row'>
        {
            restaurants ? 
            restaurants.map((restaurant) => (
                    <div className='col-md-6' key={restaurant.id}>
                        <div className='rest-listing my-2 p-3'>
                            <div className='delete-icon align-right'>
                              <button className='text-decoration-none btn' onClick={() => deleteListing(restaurant.id)}>
                                <Trash color='red'></Trash>
                              </button>
                            </div>
                            <h2>{restaurant.name}</h2>
                            <p>Place: {restaurant.place}</p>
                            <p>Cuisine: {restaurant.cuisine}</p>
                            <p>Average price: {restaurant.avg_price}</p>
                        </div>
                    </div>
                
            )) : <></>
        }
    </div>
  )
}
