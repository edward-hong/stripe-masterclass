import Header from '../header/header'
import Footer from '../footer/footer'

const Layout = ({ children }) => (
	<>
		<Header />
		<main>{children}</main>
		<Footer />
	</>
)

export default Layout
