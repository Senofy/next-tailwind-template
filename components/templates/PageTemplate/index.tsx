import React, { FC, ReactNode } from 'react'

import styles from './index.module.css'

interface PageTemplateProps {
	navigation: ReactNode
}

const PageTemplate: FC<PageTemplateProps> = ({ navigation, children }) => {
	return (
		<div className={styles.container}>
			<nav className={styles.navigation}>{navigation}</nav>
			<main className={styles.content}>{children}</main>
		</div>
	)
}

export default PageTemplate
