import React from 'react';
import Loader from '../components/loader/Loader';
import './styles/styleLoader.css'

function PageLoading() {
    return (
        <div className="fixed-center">
            <div className="lds-grid fixed-loader">
                <Loader />
            </div>
        </div>
    );
}

export default PageLoading;