import {useParams, useNavigate} from 'react-router-dom';



const MenuItem = ({menu}) => {
const {categId, itemId} = useParams();

    return (
        <>
        <section className="restaurantSection">
            <div className="restaurantBody">
                <div>
                    {
                        menu.filter((category) => category.id == categId).map(categ => (
                            categ.categoryItems.filter((items) => items.id == itemId).map((item) => (
                                <>
                                <div>
                                    <h3>{item.name}</h3>
                                </div>
                                <div className="menuBody">
                                    <div className='descriptionBox textCenter'>
                                        <p>{item.description}</p>
                                    </div>
                                    <div className='modsBox textCenter'>
                                        <h5>Modification 1</h5>

                                        {/* these checkboxes have to be modified later to be in a form, now just for testing */}
                                        <div className='modsCheckbox'>
                                            <input type="checkbox" name="" id="" />
                                            <label htmlFor="">Option 1</label>
                                        </div>
                                        <div className='modsCheckbox'>
                                            <input type="checkbox" name="" id="" />
                                            <label htmlFor="">Option 2</label>
                                        </div>
                                        <div className='modsCheckbox'>
                                            <input type="checkbox" name="" id="" />
                                            <label htmlFor="">Option 3</label>
                                        </div>
                                    </div>

                                    <div className='textCenter'>
                                        <h5>Special Instructiones/notes</h5>
                                        <textarea name="instructions" id="" cols="30" rows="5"></textarea>
                                    </div>

                                    <div className='textCenter'>
                                        <h5>Quantity</h5>
                                        <div>
                                            <button>-</button>
                                            <input type="number" name="" id=""/>
                                            <button>+</button>
                                        </div>
                                    </div>

                                    <div className='textCenter'>
                                        <p className='itemPrice'>${item.price}</p>
                                    </div>

                                    <div className='textCenter'>
                                        <button type="submit">Add to Cart</button>
                                    </div>

                                </div>
                                </>
                            ))
                            ))
                    }
                </div>

            </div>
        </section>
        </>
    );
}

export default MenuItem;