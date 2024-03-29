import React, { useEffect, useState } from 'react'
import './Products.css';
import { useProductContext } from '../context/productContext';
import Loading from '../mini components/Loading';
import { Link } from 'react-router-dom';
import { useFilterContext } from '../context/filterContext';

const Products = () => {
  const {products, isLoading} = useProductContext();
  const {filterProducts, sortingFunction, filters, updateValue, allProducts, clearFilters} = useFilterContext();
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const [hide, setHide] = useState("hide");

  const handleMobile = () => {
    setHide('mobileView');
  }

  const getUniqueData = (data, prop) => {
      let newVal = data.map((elem) => {
        return elem[prop];
      })
      newVal = ['all', ...new Set(newVal)]
      return newVal;
  }

  const filterLeftSide = getUniqueData(allProducts, "category");
  const companySide = getUniqueData(allProducts, "company");

  useEffect(() => {
      window.addEventListener('resize', (event) => {
        setWindowSize(window.innerWidth);
      });
  }, [windowSize])

  if(isLoading || products.length === 0 || filterProducts===undefined) return <Loading/>
  return (
    <div className="pContainer">
        <input type="text" name='text' placeholder="Search For Products" value={filters.text} onChange={updateValue}/>
        {windowSize <= 495 ? <button onClick={handleMobile}>Apply Filters</button> : <></>}
        <div className="sortBlock">
        <select name="sort" id="sort" onClick={sortingFunction}>
          <option value="lowest">Price(lowest)</option>
          <option value="highest">Price(highest)</option>
          <option value="a-z">Price(a-z)</option>
          <option value="z-a">Price(z-a)</option>
        </select>
        </div>
        <div className="dataContainer">
          <div className={windowSize <= 495 ? `searchFilter ${hide}` : 'searchFilter'}>
          {windowSize <= 495 ? <i class="fa-solid fa-xmark" onClick={() => setHide('hide')}/> : <></>}
            <div className="category struct">
              <h3>Category</h3>
              {
                filterLeftSide.map((elem, index) => {
                  return <button
                    key={index}
                    type="button"
                    name='category'
                    value={elem}
                    onClick={updateValue}
                  >{elem}</button>
                })
              }
            </div>
            <div className="company struct">
              <h3>Companies</h3>
              <form>
                <select name="company" id="company" onClick={updateValue}>
                  {
                    companySide.map((elem, index) => {
                      return <option value={elem} key={index}>{elem}</option>
                    })
                  }
                </select>
              </form>
            </div>
            <div className="myprice struct">
              <h3>Price</h3>
              <span>{Intl.NumberFormat("en-IN", {
                    style : "currency",
                    currency : "INR",
                    maximumFractionDigits : 2,
                }).format(filters.price/100)}</span>
              <input type="range" name='price' value={filters.price} min={filters.minPrice} max={filters.maxPrice} onChange={updateValue}/>
            </div>
            <button type='button' onClick={clearFilters}>Clear Filters</button>
          </div>
          <div className="actualProducts">
          {
            filterProducts.length > 0 ? <h1></h1> : <h1>No Products Available</h1>
          }
          { filterProducts.map((elem, index) => {
          return (
            <Link to={`/details/${elem.id}`}>
            <div className="blocks" key={index}>
              <img
                src={elem.image}
                alt="images"
              />
              <div className="info">
                <span className="name">{elem.name}</span>
                <span className="price">{Intl.NumberFormat("en-IN", {
                    style : "currency",
                    currency : "INR",
                    maximumFractionDigits : 2,
                }).format(elem.price/100)}</span>
              </div>
            </div>
            </Link>
          );
        })}
          </div>
        </div>
    </div>
  )
}

export default Products;