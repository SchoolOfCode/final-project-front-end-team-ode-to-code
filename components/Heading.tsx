import React from 'react';
import styles from './styles/Heading.module.css';

export default function Heading({
  text,
  justify,
}: {
  text: string;
  justify: string;
}) {
  return (
    <h2
      className={styles.test}
      style={{ textAlign: justify } as React.CSSProperties}
    >
      {text}
    </h2>
  );
}
