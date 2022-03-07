import React, {useState} from 'react'
import { useNavigate } from 'react-router';
import { createRestaurant } from '../utils/base-service';

export const RestaurantForm = () => {
    const navigate = useNavigate();
    const [isSuccess, setSuccessMessage] = useState();
    const [errorMsg, setError] = useState();

    const addRestaurant = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const place = event.target.place.value;
        const cuisine = event.target.cuisine.value;
        const restaurantBody = {name, place, cuisine};
        createRestaurant(restaurantBody).then((res) => {
            if(res.status === 201){
                setSuccessMessage(true);
                alert('Restaurant successfully created');
                navigate('/');
            }
        }).catch((err) => {
            if(err.response){
                setError(err.response.data.message)
            } else {
                setError('Something went wrong!')
            }
        })
    }   

  return (
    <div className='container'>
        <div className='rest-form-header'>
            <h1>ADD RESTAURANT</h1>
        </div>
        <div className='rest-form vertical-center'>
            <form className='w-100' onSubmit={addRestaurant}>
                <div className="form-group d-flex my-2">
                    <label htmlFor="name" className='w-25'>Restaurant Name</label>
                    <input type="text" className="form-control text-left" name='name' placeholder="Name"/>
                </div>
                <div className="form-group d-flex my-2">
                    <label htmlFor="place" className='w-25'>Location</label>
                    <input type="text" className="form-control text-left" name='place' placeholder="Location"/>
                </div>
                <div className="form-group d-flex my-2">
                    <label htmlFor="cuisine" className='w-25 text-left'>Cuisine</label>
                    <input type="text" className="form-control"  name='cuisine' placeholder="Cuisine"/>
                </div>
                {
                    !isSuccess ? 
                    <div className='text-center'>
                        <p>{errorMsg}</p>
                    </div> : <></>
                }
                <button type="submit" className="btn btn-primary my-2">Submit</button>
            </form>
        </div>
    </div>
  )
}
