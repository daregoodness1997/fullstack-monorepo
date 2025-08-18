import { Button, Input, UIProvider } from '@dareheight/ui';
import styles from './global.module.scss'

function App() {
  return (
    <UIProvider>
     <div className={styles.container}>
      <Input placeholder="Your name" radius="md" size="lg" />
      <Input label="Email" placeholder="Your Email" type="email"  radius="md" size="lg"/>
      <Button onClick={() => alert("Submitted!")} radius="md" size="lg">Submit</Button>
    </div>
    </UIProvider>
  );
}

export default App;
