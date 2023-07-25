import React from 'react';
import styles from './NaoEncontrada.module.css';

export default function NaoEncontrada() {
  return (
    <section className={styles.container}>
        <h2> Opss.. </h2>
        <p> O conteúdo que voce buscou não foi encontrado </p>
    </section>
  )
}
