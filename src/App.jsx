import React,{ useEffect, useState } from "react"
import './App.scss';
import Filter from './containers/Filter/Filter';
import Cards from './components/Cards/Cards';

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [beers, setBeers] = useState([])
  const [checked, setChecked] = useState([])


  const getBeers = async() => {
    const tempData = []
    const cleanTempData = []

    for(let i = 1; i < 6; i++) {
      let url = `https://api.punkapi.com/v2/beers?page=${i}&per_page=80`;
      const res = await fetch(url);
      const currentData = await res.json();
      tempData.push(currentData)
    }
    console.log(tempData);
    
    tempData.forEach(array => {
      array.forEach(object => {
        cleanTempData.push(object)
      })
    })
    console.log(cleanTempData);
    setBeers(cleanTempData)
  }

  useEffect(() => {
    getBeers()
  }, [])

  

  const handleInput = event => {
    const cleanInput = event.target.value.toLowerCase();
    setSearchTerm(cleanInput);
  }

  let filteredBeers = beers.filter(beer => {
    const beerTitleLower = beer.name.toLowerCase();

    if(!beerTitleLower.includes(searchTerm)){
      return false;
    }
    
    if(checked.includes('abv') && !(beer.abv > 6 )){
      return false;
    }

    const year = beer.first_brewed.split("").splice(3, 4).join("")
    if(checked.includes("classic-range") && !(year < 2010)) {
      return false
    }

    if(checked.includes("ph") && !(beer.ph < 4)) {
      return false
    }

    return true
  });

  const handleChange = event => {
    if (event.target.checked) {
      const stateCopy = checked.map(string => (string));
      stateCopy.push(event.target.value)
      setChecked(stateCopy)
    } else if (!event.target.checked) {
    
      const checkedFiltered = checked.filter(string => {
        if (event.target.value !== string) {
          return string
        }
      })
      setChecked(checkedFiltered)
    }
  }
  
  console.log(checked);
    // const checkedBeers = checked.map(element => {
    //   if (element = "abv") {
    //     filteredBeers = beers.filter(beer => {
    //       if (beer.abv > 6) {
    //         console.log(beer);
    //         return beer
    //       }
    //     })
    //     setBeers(filteredBeers)
    //   }
    // })

    // if (event.target.checked && event.target.value === "abv") {
    //   filteredBeers = beers.filter(beer => {
    //     if (beer.abv > 6) {
    //       console.log(beer);
    //       return beer
    //     }
    //   })
    //   setBeers(filteredBeers)
    // } else if (!event.target.checked && event.target.value === "abv") {
    //   getBeers()
    // }

    // if (event.target.checked && event.target.value === "classic-range") {
    //   filteredBeers = beers.filter(beer => {
    //     const year = beer.first_brewed.split("").splice(3, 4).join("")
    //     console.log(year);
    //     if (year < 2010) {
    //       console.log(beer);
    //       return beer
    //     }
    //   })
    //   setBeers(filteredBeers)
    // } else if (!event.target.checked && event.target.value === "classic-range") {
    //   getBeers()
    // }

    // if (event.target.checked && event.target.value === "ph") {
    //   filteredBeers = beers.filter(beer => {
    //     if (beer.ph < 4) {
    //       console.log(beer);
    //       return beer
    //     }
    //   })
    //   setBeers(filteredBeers)
    // } else if (!event.target.checked && event.target.value === "ph") {
    //   getBeers()
    // }

  return (
    <div className="App">
      <Filter label={"Search Beer: "} handleInput={handleInput} handleChange={handleChange}/> 
      <Cards arr = {filteredBeers} />
    </div>
  );
}

export default App;
