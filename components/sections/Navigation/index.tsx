import clsx from 'clsx'
import styles from './index.module.css'

const Navigation = () => {
	return (
		<div className={styles.container}>
			<div className={styles['content-container']}>
				<div className={styles['logo-container']}>
					<img
						className={styles['logo']}
						src='https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg'
						alt='Workflow'
					/>
					<img
						className={styles['logo-mobile']}
						src='https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg'
						alt='Workflow'
					/>
				</div>
				<div className='hidden sm:block sm:ml-6'>
					<div className={styles['links-container']}>
						<a href='#' className={clsx([styles.link, styles.active])} aria-current='page'>
							Dashboard
						</a>

						<a href='#' className={styles.link}>
							Team
						</a>

						<a href='#' className={styles.link}>
							Projects
						</a>

						<a href='#' className={styles.link}>
							Calendar
						</a>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Navigation
