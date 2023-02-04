import {useParams} from 'react-router-dom';

const ItemList = ({menu}) => {
    const {id} = useParams();

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
                                <div>
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