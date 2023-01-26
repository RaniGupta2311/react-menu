import Menu from "./Menu";
import Categories from "./Categories";
import items from './data';
import React, { useState } from 'react';

const categ = ['all', ...new Set(items.map((c) => c.category))];
// console.log(categ);

function App() {
  const [menu, setMenu] = useState(items);
  const [categories, setCategories] = useState(categ);

  const filterItems = (category) => {
    if (category === 'all') {
      setMenu(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category)
    setMenu(newItems);
  }

  return <main>
    <section className="menu section">
      <div className="title">
        <h2>our menu</h2>
        <div className="underline"></div>
      </div>
      <Categories filterItems={filterItems} categories={categories} />
      <Menu menu={menu} />
    </section>
  </main>
}

export default App;
