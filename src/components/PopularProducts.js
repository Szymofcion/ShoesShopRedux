import Slider from 'react-slick'
import { BsFillStarFill } from 'react-icons/bs'

import './PopularProducts.scss'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
const PopularProductsSlick = () => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 1,
	}
	return (
		<section>
			<div>
				<h2>
					Popular <span className='text-danger'>Products</span>
				</h2>
				<Slider  {...settings}>
					<div className='px-2'>
						<div className='background-shoes'>
							<img className='shoes-1'></img>
						</div>
						<div className='descriptions-shoes'>
							<div>
								<BsFillStarFill className='text-warning' /> <span>(4.5)</span>
							</div>
							<p>Nike Air 1</p>
							<p>
								$50
								<button type='button' class='btn-add-cart'>
									Add to Cart
								</button>
							</p>
						</div>
					</div>
					<div className='px-2'>
						<div className='background-shoes'>
							<img className='shoes-1'></img>
						</div>
						<div className='descriptions-shoes'>
							<div>
								<BsFillStarFill className='text-warning' /> <span>(4.5)</span>
							</div>
							<p>Nike Air 1</p>
							<p>
								$50
								<button type='button' class='btn-add-cart'>
									Add to Cart
								</button>
							</p>
						</div>
					</div>
					<div className='px-2'>
						<div className='background-shoes'>
							<img className='shoes-1'></img>
						</div>
						<div className='descriptions-shoes'>
							<div>
								<BsFillStarFill className='text-warning' /> <span>(4.5)</span>
							</div>
							<p>Nike Air 1</p>
							<p>
								$50
								<button type='button' class='btn-add-cart'>
									Add to Cart
								</button>
							</p>
						</div>
					</div>
					<div className='px-2'>
						<div className='background-shoes'>
							<img className='shoes-1'></img>
						</div>
						<div className='descriptions-shoes'>
							<div>
								<BsFillStarFill className='text-warning' /> <span>(4.5)</span>
							</div>
							<p>Nike Air 1</p>
							<p>
								$50
								<button type='button' class='btn-add-cart'>
									Add to Cart
								</button>
							</p>
						</div>
					</div>
                    <div className='px-2'>
						<div className='background-shoes'>
							<img className='shoes-1'></img>
						</div>
						<div className='descriptions-shoes'>
							<div>
								<BsFillStarFill className='text-warning' /> <span>(4.5)</span>
							</div>
							<p>Nike Air 1</p>
							<p>
								$50
								<button type='button' class='btn-add-cart'>
									Add to Cart
								</button>
							</p>
						</div>
					</div>
				</Slider>
			</div>
		</section>
	)
}

export default PopularProductsSlick
