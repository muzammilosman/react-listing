import React from 'react'

export const Listing = ({restaurants}) => {

  return (
    <div className='listings row'>
        {
            restaurants ? 
            restaurants.map((restaurant) => (
                    <div className='col-md-6' key={restaurant.id}>
                        <div className='rest-listing my-2 p-3'>
                            <h2>{restaurant.name}</h2>
                            <p>Place: {restaurant.place}</p>
                            <p>Cuisine: {restaurant.cuisine}</p>
                        </div>
                    </div>
                
            )) : <></>
        }
    </div>
  )
}
