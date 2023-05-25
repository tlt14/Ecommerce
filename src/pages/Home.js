import Carousel from '../components/Carousel'
import Newest from '../features/product/Newest'

function Home(props) {
  document.title = 'Home'
  return (
    <>
      <Carousel />
      <Newest />
    </>
  )
}

export default Home
