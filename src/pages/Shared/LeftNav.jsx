import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const LeftNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(error => console.error(error))
    }, [])


    return (
        <div>
            <h4>All Category</h4>
            <div className='ps-4'>
                {
                    categories.map(category => <Link key={category.id} className='text-decoration-none text-black' to={`/category/${category.id}`}> <Button className='w-100 text-start mb-2' variant="light" key={category.id}>
                        {category.name}
                    </Button></Link> )
                }
        </div>
        </div >
    );
};

export default LeftNav;