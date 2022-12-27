const FilterReducer = (state, action) => {
  switch (action.type) {
    case 'CLEAR_FILTERS':
      return {
        ...state,
        filters :{
          ...state.filters,
          text : "",
          company : "all",
          category : "all",
          mixPrice : 0,
          price: state.filters.maxPrice,
          maxPrice : state.filters.maxPrice,
      }
      }
    case "VAL_UP":
      return {
        ...state,
        filters: {
          ...state.filters,
          [action.payload.name]: action.payload.value,
        },
      };

    case "FILTER_PRODUCTS":
      let priceArr = action.payload.map((elem) => {
        return elem.price;
      })
      const maxPrice = Math.max(...priceArr)
      return {
        ...state,
        filterProducts: [...action.payload],
        allProducts: [...action.payload],
        filters : {
          ...state.filters,
          maxPrice : maxPrice,
          price : maxPrice
        }
      };
    case "SORT_DATA":
      const valueSelection = document.getElementById("sort");
      let value = valueSelection.options[valueSelection.selectedIndex].value;
      return {
        ...state,
        sorting_products: value,
      };
    case "SORT_PRO":
      let newSortData;
      let copyProducts = [...action.payload];

      if (state.sorting_products === "lowest") {
        const sortData = (a, b) => {
          return a.price - b.price;
        };
        newSortData = copyProducts.sort(sortData);
      }

      if (state.sorting_products === "highest") {
        const sortData = (a, b) => {
          return b.price - a.price;
        };
        newSortData = copyProducts.sort(sortData);
      }

      if (state.sorting_products === "a-z") {
        newSortData = copyProducts.sort((a, b) => {
          return a.name.localeCompare(b.name);
        });
      }

      if (state.sorting_products === "z-a") {
        newSortData = copyProducts.sort((a, b) => {
          return b.name.localeCompare(a.name);
        });
      }

      return {
        ...state,
        filterProducts: newSortData,
      };
    case "INPUT_DATA":
      let { allProducts } = state;
      let temporary = [...allProducts];

      const { text, category, company, price } = state.filters;

      if (text) {
        temporary = temporary.filter((elem) => {
          return elem.name.toLowerCase().includes(text);
        });
      }

      if (company !== "all") {
        temporary = temporary.filter((elem) => {
          return elem.company.toLowerCase() === company;
        });
      }

      if (category !== "all") {
        temporary = temporary.filter((elem) => {
          return elem.category === category;
        });
      }

      if(price === 0){
        temporary = temporary.filter((elem) => {
          return elem.price === price
        })
      }

      if(price){
        temporary = temporary.filter((elem) => {
          return elem.price <= price
        })
      }

      return {
        ...state,
        filterProducts: temporary,
      };

    default:
      return state;
  }
};

export default FilterReducer;
