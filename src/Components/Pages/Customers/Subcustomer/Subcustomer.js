import React from 'react';

const Subcustomer = ({ user }) => {
    const { name, email, id, website } = user;

    return (

       
            <tr>
                <td> <input type="checkbox" name="x" id=""/></td>
                <td>{name}</td>
                <td>{email}</td>
                <td>{website}</td>
                <td>{id}</td>
            </tr>
       

    );
};

export default Subcustomer;