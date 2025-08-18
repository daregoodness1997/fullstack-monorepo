import React from 'react';
import { Button, Input, Mantine } from '@dareheight/ui';
import styles from './Home.module.scss';

const Home = () => {
  return (
    <div className={styles.container}>
      <Input placeholder="Your name" radius="md" size="lg" />
      <Input
        label="Email"
        placeholder="Your Email"
        type="email"
        radius="md"
        size="lg"
      />
      <Button onClick={() => alert('Submitted!')} radius="md" size="lg">
        Submit
      </Button>
      <Mantine.Button size="lg">Allow</Mantine.Button>
    </div>
  );
};

export default Home;
