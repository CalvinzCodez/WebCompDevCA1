import React from 'react';
import '../styleSheets/buttons.css';
import { AdminNavAdd } from './adminNavAdd';
import { AdminNavDelete } from './adminNavDelete';


const OptionPage = () => {

    return (
        <>
            {/* Renders the add and delete option buttons */}
            <div className='adminMenu'>
            <AdminNavAdd />
            </div>
            <div className='adminMenu'>
            <AdminNavDelete />
            </div>

        </>
    );
};

export default OptionPage;