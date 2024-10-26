import styles from './Title.module.css';
import TitleProps from './Title.props';
function Title({ title }: TitleProps) {
	return <h1 className={styles['title']}>{title}</h1>;
}

export default Title;
