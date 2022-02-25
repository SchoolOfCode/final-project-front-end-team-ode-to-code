import React from 'react'


const countriesApi = 'https://four-week-project.herokuapp.com/countries';

 export async function getStaticPaths(){

    const resCountries = await fetch(countriesApi);
    const dataCountries = await resCountries.json();

    const paths = dataCountries.payload.map((country:any) =>{
        return {
            params:{
                country:country.country
            }
        }
    })
    
    return {
      paths,
      fallback:false
    }
 }

////capitalize all string
 function capitalizeFirstLetter(string:string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}


 export async function getStaticProps(context:any) {

  const countryName = context.params.country;
  const response = await fetch(`https://four-week-project.herokuapp.com/countries/?name=${capitalizeFirstLetter(countryName)}`)
  const data = await response.json();
  
  return{
    props:{
      country:data.payload[0]
    }
  }

  
}




function Country({country}:{country:any}) {


    return (
      <div>
          <h1>{country.country}</h1>
      </div>
    )
  }
  
  export default Country;