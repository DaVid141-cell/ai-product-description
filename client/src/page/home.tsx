import HomeLayout from '../components/layouts/home-layout.tsx'
import Hero from '../components/hero.tsx'
import ProductCarousel from '../components/product-carousel.tsx'
import ProductItem from '../components/product-slider.tsx'

export default function Home() {

  return (
    
    <HomeLayout>
      <Hero/>
      <section className="bg-[#EEEEEE]">
          <ProductItem bigCard="left"/>
      </section>
      <section className="bg-[#929AAB] align-center flex justify-center">
          <ProductCarousel/>
      </section>
      <section className="bg-[#F7F7F7] align-center flex justify-center">
          <ProductCarousel/>
      </section>
      <section className="bg-[#EEEEEE]">
          <ProductItem bigCard="right"/>
      </section>
    </HomeLayout>
  )
}