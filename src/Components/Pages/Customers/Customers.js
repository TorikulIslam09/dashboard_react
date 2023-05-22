import React, { useEffect, useState } from 'react';
import Subcustomer from './Subcustomer/Subcustomer';

const Customers = () => {
    const [customer, setCustomer] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setCustomer(data))
    }, [])

    return (
        <div>

            <table class="table">
                <thead class="table-dark">
                <tr>
                     <th>
                        <input type="checkbox" name="" id=""/>
                            </th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Website</th>
                            <th>ID</th>
                        </tr>
                </thead>
                <tbody>
                    {
                        customer.map(user => <Subcustomer user={user} key={user.id} />)
                    }
                </tbody>
            </table>



          
        </div>
    );
};

export default Customers;