import React from 'react'

export const SearchParams = ({onSearchChange}) => {

    const handleSearchChange = (evt) => {
        evt.preventDefault();
        const searchKey = evt.target.search.value;
        onSearchChange(searchKey);
    }

    return (
        <div className='search-container my-4 py-3'>
            <form onSubmit={handleSearchChange} className="form-inline">
                <div className='search-field form-group mx-sm-3 mb-2'>
                    <input type='text' name='search' className='form-control mx-2' placeholder='Search by name, place or cuisine' />
                </div>
                <button type='submit' className='btn btn-primary mb-2'>SEARCH</button>
            </form>
        </div>
    )
}
