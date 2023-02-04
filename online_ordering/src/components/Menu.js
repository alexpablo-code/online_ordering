
import {useState} from 'react';
import{Link} from 'react-router-dom';

const Menu = ({menu}) => {


    return (
        <>
        <section className="restaurantSection">
            <div className="restaurantBody">
                <div>
                    <h3>Restaurant Name</h3>
                </div>
                <div className="menuBody">
                    {
                        menu.map((category) => (
                            <div className='categoryBox' key={category.id}>
                                <h5><Link to={`/category-items/${category.id}`}>{category.categoryName}</Link></h5>
                            </div>
                        ))
                    }
                    <div className='buttonSection'>
                        <Link to= "/"><button>Add Category</button></Link>
                    </div>

                </div>

            </div>
        </section>
        </>
    );
}

export default Menu;