import React from 'react'


const countriesApi = 'https://four-week-project.herokuapp.com/countries';

 export async function getStaticPaths(){

    const resCountries = await fetch(countriesApi);
    const dataCountries = await resCountries.json();

    const paths = dataCountries.payload.map(country =>{
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


 export async function getStaticProps(context:any) {

  const countryName = context.params.city;
  const response = await fetch(`https://four-week-project.herokuapp.com/countries/?name=${countryName}`)
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