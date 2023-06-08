import logo from '../assets/nike-logo.png'
import './Nav.scss'
const Nav = () => {
	return (
		<nav className='navbar ' data-bs-theme='dark'>
			<form className='container-fluid justify-content-between d-flex justify-content-center '>
				<img className='logo mt-3 ms-5' src={logo}></img>
				<div>
					<button className='btn me-5 ' type='button'>
						Home
					</button>
					<button className='btn me-5 ' type='button'>
						Popular products
					</button>
					<button className='btn me-5 ' type='button'>
						About
					</button>
				</div>
				<div>
					<button className='me-5 gradient ' type='button'>
						Contact Us
					</button>
				</div>
			</form>
		</nav>
	)
}
export default Nav
