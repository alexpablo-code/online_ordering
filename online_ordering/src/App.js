import {BrowserRouter, Routes, Route, Link, useParams} from 'react-router-dom';
import {useState, useEffect} from 'react';
import axios from 'axios';

import './App.css';
import Header from './components/Header';
import Menu from './components/Menu';
import ItemList from './components/ItemList';
import MenuItem from './components/MenuItem';
import NotFound from './components/NotFound';


function App() {
  const[menuDb, setMenuDb] = useState()
  const[menu, setMenu] = useState([
    {
      id:234,
      categoryName: "appetizers",
      categoryItems: [
        {
          id:33,
          name: "Fried Mozzarella",
          description: "Fried mozzarella cheese with marinara sauce.",
          price: 9.49
        }
      ]
    },
    {
      id:857,
      categoryName: "entrees",
      categoryItems: [
        {
          id:56,
          name: "Chicken Alfredo",
          description: "Creamy alfredo sauce made from scratch with ingredients like parmesan, cream, garlic and butter, served with fettuccine pasta and topped with sliced grilled chicken.",
          price: 20.99
        },
        {
          id:86,
          name: "Chicken Alfredo",
          description: "Creamy alfredo sauce made from scratch with ingredients like parmesan, cream, garlic and butter, served with fettuccine pasta and topped with sliced grilled chicken.",
          price: 20.99
        }
      ]
    },
    {
      id: 563,
      categoryName: "pastas",
      categoryItems: [
        {
          id:68,
          name: "Chicken and Shrimp Carbonara",
          description: "Sautéed seasoned chicken, shrimp and spaghetti tossed in a creamy sauce with bacon and roasted red peppers.",
          price: 22.99
        }
      ]
    },
    {
      id: 735,
      categoryName: "desserts",
      categoryItems: [
        {
          id:20,
          name: "Tiramisu",
          description: "The classic Italian dessert. A layer of creamy custard set atop espresso-soaked ladyfingers.",
          price: 9.79
        }
      ]
    },
    {
      id: 308,
      categoryName: "drinks",
      categoryItems: [
        {
          id:83,
          name: "Raspberry Lemonade",
          price: 4.39
        }
      ]
    }
  ])

useEffect(() => {
  axios.get('https:localhost:8000/menu')
  .then((response) => {
    console.log(response);
  })
}, [])

  return (
    <BrowserRouter>
      <div className="App">
      <Header/>
      {/* we have the header component outside the Routes tags becauuse we want it on every route */}
      
      {/* <MenuContainer menu={menu}>
        <Routes>
          <Route path="/" element={<Categories menu={menu}/>}/>
        </Routes>
      </MenuContainer> */}
      {/*I am trying to reuse the menucontainer component and adding routes inside*/}
      

        <Routes>
          <Route path="/" element={
            <>
            <Menu menu = {menu}/>
            </>
          } />

          <Route path="/category-items/:id" element={
            <>
            <ItemList menu = {menu}/>
            </>
          }/>
          <Route path="/item/:categId/:itemId" element={<MenuItem menu={menu}/>}/>

          <Route path="*" element={<NotFound/>} />
        </Routes>
      
      </div>
    </BrowserRouter>
  );
}

export default App;
