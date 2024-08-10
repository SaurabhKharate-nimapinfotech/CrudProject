import React from 'react'
import DataTable from 'react-data-table-component';
import { user } from '../../db';
import styles from '../components/Table.module.scss'
import { Link, useNavigate } from 'react-router-dom';



function Table() {
    const navigate = useNavigate();
    const columns = [
        {
            name: 'ID',
            selector: row => row.id,
        },
        {
            name: 'Name',
            selector: row => row.name,
        },
        {
            name: 'Email',
            selector: row => row.email,
        },
        {
            name: 'Update/Delete',
            selector: row => <div className={styles.main_btn} >
                                 <button className={styles.update}>Update</button>
                                 <button className={styles.delete}>Delete</button>
                             </div>
        },
    ];
    return (
        <>
        <div className={styles.btnadd}>
             <button 
                className={styles.add}
                onClick={()=>{navigate('/add')}}
             
             
             >Add</button>
        </div>
            <DataTable
                className={styles.table}
                columns={columns}
                data={user}
            />
        </>

    )
}

export default Table
