import React from 'react';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import VerticalAlignTopIcon from '@mui/icons-material/VerticalAlignTop';
import './Card_box.scss';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import VerticalAlignBottomIcon from '@mui/icons-material/VerticalAlignBottom';
import FormatListNumberedRtlIcon from '@mui/icons-material/FormatListNumberedRtl';
import Barchart from './Barchart/Barchart';
import Latest_product_order from './Latest_product_order/Latest_product_order';

const Card_box = () => {
    return (
        <div>
            <div className="card-parents">
                <div className="card_items">
                    <div className="card-body">
                        <div className="card-content">
                            <span>Budget</span>
                            <h4>$24k</h4>
                        </div>
                        <div className="card-icon">
                            <span><CurrencyExchangeIcon/></span>
                        </div>
                    </div>
                    <p> <span><VerticalAlignTopIcon/> 12 month </span> Since last month</p>
                </div>


                <div className="card_items">
                    <div className="card-body">
                        <div className="card-content">
                            <span>Total Customers</span>
                            <h4>16K</h4>
                        </div>
                        <div className="card-icon bg-success">
                            <span className=''><PeopleAltIcon/></span>
                        </div>
                    </div>
                    <p> <span className='text-danger'><VerticalAlignBottomIcon/> 16% month </span> Since last month</p>
                </div>


                <div className="card_items">
                    <div className="card-body">
                        <div className="card-content">
                            <span>Task Progress</span>
                            <h4>75.5%</h4>
                        </div>
                        <div className="card-icon bg-warning">
                            <span><FormatListNumberedRtlIcon/></span>
                        </div>
                    </div>
                    <div className="progress-count"></div>
                </div>

                <div className="card_items">
                    <div className="card-body">
                        <div className="card-content">
                            <span>Total Profit</span>
                            <h4>$15k</h4>
                        </div>
                        <div className="card-icon bg-info">
                            <span><CurrencyExchangeIcon/></span>
                        </div>
                    </div>
             
                </div>
            </div>

            <div className="chard-container">
                <Barchart></Barchart>
            </div>



            <div className="latest-product-order mt-5">
                <div className="row">
                    <div className="col-lg-4">
                        <Latest_product_order/>
                    </div>
                    <div className="col-lg-8"></div>
                </div>
            </div>

        </div>
    );
};

export default Card_box;