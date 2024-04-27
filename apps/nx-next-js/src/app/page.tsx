import styles from './page.module.css';
import { Button } from '@nx-next-js/ui-components';


export default function Index() {
  return (
    <div className={styles.page}>
      <Button >Hi! I'm shared button</Button>
    </div>
  );
}
