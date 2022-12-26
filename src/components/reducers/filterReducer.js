const FilterReducer = (state, action) => {
  switch (action.type) {
    // case 'INPUT_DATA':
    //     let tempdata = [...state.allProducts];
    //     if(state.text){
    //         tempdata = tempdata.filter((elem) => {
    //             return elem.name.toLowerCase().includes(state.text);
    //         })
    //     }
    //     if(state.category != "ALL"){
    //         tempdata = tempdata.filter((elem) => {
    //             return state.category === elem.category;
    //         })
    //     }
    //     return {
    //         ...state,
    //         filterProducts : tempdata,
    //     }
    // case 'COMP_DATA':
    //     let myData = [...state.allProducts];
    //     if(state.company){
    //         myData = myData.filter((elem) => {
    //             return state.company === elem.company;
    //         })
    //     }
    //     return {
    //         ...state,
    //         filterProducts : myData,
    //     }
    case "VAL_UP":
      return {
        ...state,
        filters: {
          ...state.filters,
          [action.payload.name]: action.payload.value,
        },
      };

    case "FILTER_PRODUCTS":
      return {
        ...state,
        filterProducts: [...action.payload],
        allProducts: [...action.payload],
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

      const { text, category, company } = state.filters;

      if (text) {
        temporary = temporary.filter((elem) => {
          return elem.name.toLowerCase().includes(text);
        });
      }

      if (company != "all") {
        temporary = temporary.filter((elem) => {
          return elem.company.toLowerCase() === company;
        });
      }
      console.log(category);
      if (category != "all") {
        temporary = temporary.filter((elem) => {
          return elem.category === category;
        });
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
