import styles from "./Banner.module.scss";

const Banner = (props) => {
         
    return(
        <div className={styles.banner}>
            <h1>{props.text}</h1>
        </div>
    )
};

export default Banner;