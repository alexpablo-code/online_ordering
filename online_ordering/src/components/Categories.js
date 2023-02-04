import {Link} from 'react-router-dom';

const Categories = ({menu}) => {
    return (
        <div>
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
    );
}

export default Categories;
