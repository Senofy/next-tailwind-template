import type { NextPage } from 'next'
import { Fragment } from 'react'
import Head from '../components/Head'
import { PageTemplate } from '../components/templates'
import { Navigation, TechnicalSpecifications } from '../components/sections'

const Home: NextPage = () => {
	return (
		<Fragment>
			<Head title={'Home'} />
			<PageTemplate navigation={<Navigation />}>
				<TechnicalSpecifications
					title='Technical Specifications'
					description='The walnut wood card tray is precision milled to perfectly fit a stack of Focus cards. The
					powder coated steel divider separates active cards from new ones, or can be used to archive
					important task lists.'
					specifications={[
						{ title: 'Origin', description: 'Designed by Good Goods, Inc.' },
						{
							title: 'Material',
							description:
								'Solid walnut base with rare earth magnets and powder coated steel card cover',
						},
						{ title: 'Dimensions', description: '6.25" x 3.55" x 1.15"' },
						{ title: 'Finish', description: 'Hand sanded and finished with natural oil' },
						{ title: 'Includes', description: 'Wood card tray and 3 refill packs' },
						{
							title: 'Considerations',
							description: 'Made from natural materials. Grain and color vary with each item.',
						},
					]}
					images={[
						{
							src: 'https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-01.jpg',
							alt: 'Walnut card tray with white powder coated steel divider and 3 punchout holes.',
						},
						{
							src: 'https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-02.jpg',
							alt: 'Top down view of walnut card tray with embedded magnets and card groove.',
						},
						{
							src: 'https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-03.jpg',
							alt: 'Side of walnut card tray with card groove and recessed card area.',
						},
						{
							src: 'https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-04.jpg',
							alt: 'Walnut card tray filled with cards and card angled in dedicated groove.',
						},
					]}
				/>
			</PageTemplate>
		</Fragment>
	)
}

export default Home
