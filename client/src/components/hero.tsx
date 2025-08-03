import Slider from "./ui/hero-slider";
import ProductItem from "./product-slider";
import ProductCarousel from "./product-carousel";

export default function Hero () {
    return (
    <div >
        <section>
            <Slider/>
        </section>
        <section>
            <ProductItem/>
        </section>
        <section className="bg-black align-center flex justify-center">
            <ProductCarousel/>
        </section>
    </div>
    )
}