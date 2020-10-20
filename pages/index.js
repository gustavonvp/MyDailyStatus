//Não e necessário import React from 'react'
import React from 'react';
import fetch from 'isomorphic-fetch'
import Link from 'next/link'

import Statistics from '../components/Statics';

const Index = ({cases}) =>{
    const { brazil, world } = cases;
    
return (
    <>

      <main className="home-container">
        
        <div className="bg-filter">
          
          <div className="content">
            
            <h1>
              Uma das principais formas de ajudar o controle da Covid-19 é saber
              onde ela está
            </h1>
            
            <h2>
              {' '}
              E se você pudesse saber como as pessoas ao seu redor estão se
              sentindo?{' '}
            </h2>
            
            <p>
              Você compartilha como você está hoje, e só assim consegue
              visualizar as pessoas a sua volta de forma anônima.
            </p>

            <Link href="/api/login">
              <a className="button">Faça sua parte você também</a>
            </Link>
          
          </div>
        
        </div>
        
        <Statistics title="ESTATÍSTICAS DO BRASIL" todayCases={brazil} />
        <Statistics title="ESTATÍSTICAS DO MUNDO" todayCases={world} />
      
      </main>
    
    </>
    
)}

Index.getInitialProps = async function () {
    const worldCases = await await fetch(
      'https://api.covid19api.com/world/total'
    );
  
    const brazilCases = await fetch(
      'https://xx9p7hp1p7.execute-api.us-east-1.amazonaws.com/prod/PortalGeralApi'
    );
  
    const dataBrazil = await brazilCases.json();
    const dataWorld = await worldCases.json();
  
    return {
      cases: {
        brazil: {
          Confirmed: dataBrazil.confirmados.total,
          Recovered: dataBrazil.confirmados.recuperados,
          Deaths: dataBrazil.obitos.total,
        },
        world: {
          Confirmed: dataWorld.TotalConfirmed,
          Deaths: dataWorld.TotalDeaths,
          Recovered: dataWorld.TotalRecovered,
        },
      },
    };
  };

export default Index;