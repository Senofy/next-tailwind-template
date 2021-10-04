import { FC } from 'react'
import styles from './index.module.css'

interface Specification {
	title: string
	description: string
}

interface Image {
	src: string
	alt: string
}

interface SpecificationsProps {
	title: string
	description: string
	specifications: Specification[]
	images: Image[]
}

const Section: FC<SpecificationsProps> = ({ title, description, specifications = [], images = [] }) => {
	return (
		<div className={styles.container}>
			<div>
				<h2 className={styles.title}>{title}</h2>
				<p className={styles.description}>{description}</p>

				<dl className={styles.specifications}>
					{specifications.map((specification) => (
						<div className={styles.specification} key={specification.title}>
							<dt className={styles['specification__title']}>{specification.title}</dt>
							<dd className={styles['specification__description']}>{specification.description}</dd>
						</div>
					))}
				</dl>
			</div>
			<div className={styles['image-container']}>
				{images.map((image) => (
					<img key={image.alt} src={image.src} alt={image.alt} className={styles.image} />
				))}
			</div>
		</div>
	)
}

export default Section
