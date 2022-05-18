import styles from "./styles.module.scss";

const SectionHeading = ({ slogan, title, emoji, description, ...props }) => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.heading} {...props}>
          {slogan && (<div className={styles.slogan}>{slogan}</div>)}
          <h3 className={styles.title}>
            {emoji ? <span>{title}</span> : title}
            {emoji && <img src={emoji} alt="emoji" />}
          </h3>
          {description && (<p className={styles.description}>{description}</p>)}
        </div>
      </div>
    </>
  );
}

export default SectionHeading;