import React from 'react'
import WaveImage from '../../components/WaveImage';



const citiesApi = 'https://four-week-project.herokuapp.com/cities';

 export async function getStaticPaths(){

    const resCities = await fetch(citiesApi);
    const dataCities = await resCities.json();

    const paths = dataCities.payload.map((city:any) =>{
        return {
            params:{
                city:city.city_name
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

  const cityName = context.params.city;
  const response = await fetch(`https://four-week-project.herokuapp.com/cities/?name=${capitalizeFirstLetter(cityName)}`)
  const data = await response.json();
  
  return{
    props:{
      city:data.payload[0]
    }
  }

  
}




function City({city}:{city:any}) {


  return (
    <div>
      <WaveImage imageUrl={city.image} />
        <h1>{city.city_name}</h1>
        <p><span style={{fontSize:'20px'}}>Rating </span>{city.rating}★★★</p>
        <p><span style={{fontSize:'20px'}}>Great for ... </span>{city.great_for.join(" ")}</p>
        <br/>
        <h1>All About <span style={{fontSize:'20px',fontWeight:'bold'}}>{city.city_name}</span></h1>
        <p>{city.city_description}</p>
      <br/>
      {/* set actual country link site */}
        <h2>Back to  <a href={`http://localhost:3000/countries/${capitalizeFirstLetter(city.country)}`}>{city.country}</a></h2>

    </div>
  )
}

export default City;