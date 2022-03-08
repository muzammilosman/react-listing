import { Listing } from './Listing'
import React, { useEffect, useState } from 'react'
import { deleteRestaurant, getRestaurants } from '../utils/base-service';
import { SearchParams } from './SearchParams';
import { useNavigate } from 'react-router';
import { SortRestaurants } from './SortRestaurants';

export const Layout = () => {

    const [restaurants, setRestaurants] = useState([]); 
    const [sortAscending, setSort] = useState(true); 
    const navigate = useNavigate();

    useEffect(() => {
        fetchRestaurants();
      }, []);

    const fetchRestaurants = (searchKey = '') => {
        getRestaurants(searchKey).then((res) => {
            if(res.data){
                setRestaurants(res.data);
                setSort(true);
            }
        })
    }

    const resetListings = (evt) => {
        evt.preventDefault();
        fetchRestaurants();
    }

    const handleSort = () => {
        if(sortAscending){
            setRestaurants([...restaurants.sort((a,b) => a.avg_price - b.avg_price)]);
            setSort(false);
        } else {
            setRestaurants([...restaurants.sort((a,b) => b.avg_price - a.avg_price)]);
            setSort(true);
        }
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

    const deleteListing = (id) => {
        if(id){
            deleteRestaurant(id).then((res) => {
                if(res){
                    setRestaurants(restaurants.filter((res) => res.id !== id));
                    alert('Restaurant deleted successfully')
                }
            })
        }
    }
 
  return (
    <div className='container'>
        <div className='listing-header d-flex my-4'>
            <h1 className='home-heading w-50'>
                <a className='text-decoration-none pe-auto' onClick={resetListings}>
                    RESTAURANTS
                </a>
            </h1>
            <div className='align-right w-50'>
                <button className='btn' onClick={logout}>
                    Logout
                </button>
            </div>
        </div>
        <SearchParams onSearchChange={handleTitleChange} sortAscending={sortAscending}></SearchParams>
        <SortRestaurants onSort={handleSort} sortAscending={sortAscending}></SortRestaurants>
        { restaurants.length > 0 ? <Listing restaurants={restaurants} onDelete={deleteListing}></Listing> : <></>}
        <div className='add-new my-4'>
            <button className='btn btn-primary' onClick={addNewRestaurant}>
                + Add New
            </button>
        </div>
    </div>
  )
}
