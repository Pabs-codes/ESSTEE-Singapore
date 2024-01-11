import data from './data.json';
import { useState, useEffect } from 'react';
import './Products.css';

const Products = () => {
  const [filter, setFilter] = useState('Hot Rolled Products');
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');
 
  useEffect(() => {
    // Set isVisible to false before changing the filter
    setIsVisible(false);

    // After a short delay, set isVisible to true to trigger the fade-in effect
    const timeoutId = setTimeout(() => {
      setIsVisible(true);
    }, 300); // Adjust the delay as needed

    // Cleanup the timeout to avoid memory leaks
    return () => clearTimeout(timeoutId);
  }, [filter]);

  const handleCategoryClick = (categoryName) => {
    setFilter(categoryName);
    setSelectedCategory(categoryName); // Update selected category
  };


  

  return (

    
    <section className="products section" id="products">
  
      <div className="products__container">
        {/* <h2 className="section__title">
          Explore our durable steel products and <br />
          choose the perfect solution for your project
        </h2> */}
     

     <div className='leftcont'>
     <h2 className="section__title">
     &#10533; Products Category  &#10534;
        </h2>
        <ul className="products__filters">
          
        <li
            className={`products__item  ${filter === 'Hot Rolled Products' && 'active-product'}`}
            // onClick={() => setFilter('Hot Rolled Products')}
            onClick={() => handleCategoryClick('Hot Rolled Products')}

            data-filter=""
          >
            <h3 className="products__title">Hot Rolled Products</h3>
          </li>

          <li
            className={`products__item products__line ${filter === 'Cold Rolled Products' && 'active-product'}`}
            onClick={() => handleCategoryClick('Cold Rolled Products')}
    
            data-filter=""
          >
            <h3 className="products__title">Cold Rolled Products</h3>
            
          </li>

          <li
            className={`products__item ${filter === 'Galvanized Products' && 'active-product'}`}
            onClick={() => handleCategoryClick('Galvanized Products')}
            data-filter=""
          >
            <h3 className="products__title">Galvanized Products</h3>
          </li>

          <li
            className={`products__item ${filter === 'Electro Galvanized Products' && 'active-product'}`}
            onClick={() => handleCategoryClick('Electro Galvanized Products')}
            data-filter=""
          >
            <h3 className="products__title">Electro Galvanized Products</h3>
          </li>

          <li
            className={`products__item ${filter === 'Cladding_sheets' && 'active-product'}`}
            onClick={() => handleCategoryClick('')}
            data-filter=""
          >
            <h3 className="products__title">Wire Products</h3>
          </li>

          <li
            className={`products__item ${filter === 'Cladding_sheets' && 'active-product'}`}
            onClick={() => handleCategoryClick('')}
            data-filter=""
          >
            <h3 className="products__title">Scaffolding Products</h3>
          </li>

          <li
            className={`products__item ${filter === 'Cladding_sheets' && 'active-product'}`}
            onClick={() => handleCategoryClick('')}
            data-filter=""
          >
            <h3 className="products__title">Cladding Sheets</h3>
          </li>

          <li
            className={`products__item ${filter === 'Cladding_sheets' && 'active-product'}`}
            onClick={() => setFilter('Cladding_sheets')}
            data-filter=""
          >
            <h3 className="products__title">Pre Painted Coils</h3>
          </li>

          <li
            className={`products__item ${filter === 'Cladding_sheets' && 'active-product'}`}
            onClick={() => setFilter('Cladding_sheets')}
            data-filter=""
          >
            <h3 className="products__title">Aluminium Sheets</h3>
          </li>

          <li
            className={`products__item ${filter === 'Cladding_sheets' && 'active-product'}`}
            onClick={() => setFilter('Cladding_sheets')}
            data-filter=""
          >
            <h3 className="products__title">Pipes Products</h3>
          </li>

          <li
            className={`products__item ${filter === 'Cladding_sheets' && 'active-product'}`}
            onClick={() => setFilter('Cladding_sheets')}
            data-filter=""
          >
            <h3 className="products__title">Stainless Steel</h3>
          </li>

          <li
            className={`products__item ${filter === 'Cladding_sheets' && 'active-product'}`}
            onClick={() => setFilter('Cladding_sheets')}
            data-filter=""
          >
            <h3 className="products__title">Bold, Nuts & nails</h3>
          </li>

          <li
            className={`products__item ${filter === 'Cladding_sheets' && 'active-product'}`}
            onClick={() => setFilter('Cladding_sheets')}
            data-filter=""
          >
            <h3 className="products__title">Hardware Products</h3>
          </li>

          <li
            className={`products__item ${filter === 'Cladding_sheets' && 'active-product'}`}
            onClick={() => setFilter('Cladding_sheets')}
            data-filter=""
          >
            <h3 className="products__title">Glass Products</h3>
          </li>

          <li
            className={`products__item ${filter === 'Cladding_sheets' && 'active-product'}`}
            onClick={() => setFilter('Cladding_sheets')}
            data-filter=""
          >
            <h3 className="products__title">Ceramic</h3>
          </li>

          <li
            className={`products__item ${filter === 'Cladding_sheets' && 'active-product'}`}
            onClick={() => setFilter('Cladding_sheets')}
            data-filter=""
          >
            <h3 className="products__title">Machinery</h3>
          </li>

          <li
            className={`products__item ${filter === 'Cladding_sheets' && 'active-product'}`}
            onClick={() => setFilter('Cladding_sheets')}
            data-filter=""
          >
            <h3 className="products__title">Chemical</h3>
          </li>

          <li
            className={`products__item ${filter === 'Cladding_sheets' && 'active-product'}`}
            onClick={() => setFilter('Cladding_sheets')}
            data-filter=""
          >
            <h3 className="products__title">Building Materials</h3>
          </li>


        </ul>
        </div>

          <div className='rightcont'>
          <h2 className="section__title2">{selectedCategory} </h2>
        <div className="products__content grid">
          {data.categories.map((category, index) => {
            return (
              category.category === filter && (
                <article className={`products__card main-menu ${isVisible ? 'fade-in active' : 'fade-in'}`} key={index}>
                  <div className="products__shape">
                    <img src={category.imageUrl} alt="" className="products__img" />
                  </div>
                  <div className="products__data">
                    <h2 className="products__name1">{category.name}</h2>
                    <h3 className="products__availability">{category.availability}</h3>
                    <h3 className="products__size2">{category.size2}</h3>
                    <h4 className="products__details">{category.details}</h4>
                    <h5 className="products__details2">{category.details2}</h5>
                    <h5 className="products__details2">{category.moreInfo}</h5>
                    {/* <button className="products__button2" onClick={handleMoreInfoClick}>
                    Click here for more info
                  </button> */}

                   {/* Conditionally render the info message */}
                   {/* {showInfoMessage && (
                    <p className="info-message">not available at the moment , <br/> please contact us for more details.</p>
                  )} */}

                 
                  </div>
                </article>
              )
            );
          })}

          
        </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
