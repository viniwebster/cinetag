import React, { useEffect, useState } from 'react';
import styles from './Inicio.module.css';
import Banner from 'components/Banner';
import Titulo from 'components/Titulo';
import Card from 'components/Card';

export default function Inicio() {

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch('https://my-json-server.typicode.com/monicahillman/cinetag-api/videos')
      .then(resposta => resposta.json())
      .then(dados => {
        setVideos(dados)
      })
  }, [])

  return (
    <>
        <Banner imagem="home"/>
        <Titulo>
            <h1> Um lugar para guardar seus videos e filmes </h1>
        </Titulo>
        <section className={styles.container}>
            {videos.map( item => <Card key={item.id} {...item} /> )}
        </section>
    </>
  )
}
