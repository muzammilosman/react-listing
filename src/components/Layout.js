import { Listing } from './Listing'
import React, { useEffect, useState } from 'react'
import { getRestaurants } from '../utils/base-service';
import { SearchParams } from './SearchParams';
import { useNavigate } from 'react-router';

export const Layout = () => {

    const [restaurants, setRestaurants] = useState([]);  
    const navigate = useNavigate();

    useEffect(() => {
        fetchRestaurants();
      }, []);

    const fetchRestaurants = (searchKey = '') => {
        getRestaurants(searchKey).then((res) => {
            if(res.data){
                console.log(res.data)
                setRestaurants(res.data)
            }
        })
    }

    const resetListings = (evt) => {
        evt.preventDefault();
        fetchRestaurants();
    }

    const handleTitleChange = (searchKey) => {
        if(searchKey){
            fetchRestaurants(searchKey);
        }
    }

    const addNewRestaurant = (evt) => {
        evt.preventDefault();
        navigate('/add')
    }

    const logout = (evt) => {
        evt.preventDefault();
        localStorage.clear();
        navigate('/login')
    }
 
  return (
    <div className='container'>
        <div className='listing-header d-flex my-4'>
            <h1 className='home-heading w-50'>
                <a className='text-decoration-none pe-auto' onClick={resetListings}>
                    RESTAURANTS
                </a>
            </h1>
            <div className='options w-50'>
                <button className='btn' onClick={logout}>
                    Logout
                </button>
            </div>
        </div>
        <SearchParams onSearchChange={handleTitleChange}></SearchParams>
        { restaurants.length > 0 ? <Listing restaurants={restaurants}></Listing> : <></>}
        <div className='add-new my-4'>
            <button className='btn btn-primary' onClick={addNewRestaurant}>
                + Add New
            </button>
        </div>
    </div>
  )
}
