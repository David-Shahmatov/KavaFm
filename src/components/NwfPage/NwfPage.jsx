import styles from './NwfPage.module.scss';

const Loader = () => {
  return (
    <div className={`${styles.container} ${styles.container_marginBottom}`}>
      <div aria-label='Orange and tan hamster running in a metal wheel' role='img' class={styles.wheelAndHamster}>
        <div class={styles.wheel}></div>
        <div class={styles.hamster}>
          <div class={styles.hamster__body}>
            <div class={styles.hamster__head}>
              <div class={styles.hamster__ear}></div>
              <div class={styles.hamster__eye}></div>
              <div class={styles.hamster__nose}></div>
            </div>
            <div class={`${styles.hamster__limb}, ${styles.hamster__limbFr}`}></div>
            <div class={`${styles.hamster__limb} ${styles.hamster__limbFl}`}></div>
            <div class={`${styles.hamster__limb} ${styles.hamster__limbBr}`}></div>
            <div class={`${styles.hamster__limb} ${styles.hamster__limbBl}`}></div>
            <div class={styles.hamster__tail}></div>
          </div>
        </div>
        <div class={styles.spoke}></div>
      </div>
      <p className={styles.text}>Нажаль , нічого не знайдено :(</p>
    </div>
  )
}

export default Loader;