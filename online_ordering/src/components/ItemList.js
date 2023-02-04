import {useParams, useNavigate} from 'react-router-dom';


const ItemList = ({menu}) => {
    const {id} = useParams();
    const navigate = useNavigate();


    const clickHandler = (categId, id) => {
        navigate(`/item/${categId}/${id}`);
    }

    return(
        <>
        <section className="restaurantSection">
            <div className="restaurantBody">
                <div>
                    {
                        menu.filter((category) => category.id == id).map(categ => (
                            <h3>{categ.categoryName}</h3>
                            ))
                    }
                </div>
                <div className="menuBody">
                    {
                        menu.filter((category) => category.id == id).map(categ => (
                            categ.categoryItems.map((item) => (
                                <div className='itemBox' onClick={() => clickHandler(id,item.id)}>
                                    <h1>{item.name}</h1>
                                    <p>{item.description}</p>
                                    <p>{item.price}</p>
                                </div>
                            ))
                        ))
                    }

                </div>

            </div>
        </section>
        </>
    )
}

export default ItemList;