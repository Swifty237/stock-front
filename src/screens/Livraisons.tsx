import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import TopBar from '../components/TopBar';

const Livraisons = () => {
    return (
        <div>
            <div className='bg-light d-flex'>
                <Sidebar />
                <div className='container-fluid'>

                    <TopBar topbarTitle="Livraisons" />

                    <div className="d-flex justify-content-around mt-4">
                        <input type="text" className='rounded w-50' placeholder='search' />
                        <button className="btn btn-primary">
                            Ajouter
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Livraisons;