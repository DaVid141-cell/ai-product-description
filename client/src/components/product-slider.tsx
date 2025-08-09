import ProductLayout from "./layouts/product-layout";
import { Card, CardContent } from "./ui/card";
import ProductCard from "./ui/product-item";
import CompactProductCard from "./ui/product-item-sm";

const sampleProduct = {
    img: "images/product-items/Biker-Leather-Jacket.jpg",
    alt: "Floral print summer dress",
    name: "Floral Midi Dress",
    brand: "BlossomWear",
    category: "Dresses",
    description:
      "A flowy and comfortable dress with vibrant floral prints, designed for sunny days and casual events.",
    price: 74.99,
    discountPrice: 59.99,
  };

    function smallCard ({col, row}) {
        return(
            <div className={`col-span-2 row-span-2 col-start-${col} row-start-${row} ml-10`}>
                <Card className="h-full">
                        <CardContent className="flex h-full items-center justify-center p-2">
                            <CompactProductCard productBox={sampleProduct}/>
                        </CardContent>
                </Card>
            </div>
        )
    }
  
export default function ProductItem ({bigCard = "left"}) {
    const isLeft = bigCard === "left";
    
    return (
        <ProductLayout>
        
            <div className="grid lg:grid-cols-9 lg:grid-rows-5 gap-15 md:grid-flow-row pb-10 pr-20">
                <div className="col-span-9 row-span-1 flex justify-between items-start">
                    <h1 className="text-4xl font-bold ml-10 mt-14">Jackets for Men</h1>
                    <a className="text-lg underline cursor-pointer mr-10 mt-14 hover:text-blue-400 transition-colors duration-200">See more</a>
                </div>
                <div
                    className={`col-span-4 row-span-4 row-start-2 ${isLeft ? "col-start-1 ml-10" : "col-start-6 mr-10"}`}
                    >
                    <Card className="h-full">
                        <CardContent className="flex h-full items-center justify-center p-2">
                        <ProductCard productBox={sampleProduct} />
                        </CardContent>
                    </Card>
                </div>
                {isLeft ? (
                    <>
                        {smallCard({col: 6, row: 2})}
                        {smallCard({col: 8, row: 2})}
                        {smallCard({col: 6, row: 4})}
                        {smallCard({col: 8, row: 4})}
                    </>
                ) : (
                    <>
                        {smallCard({col: 1, row: 2})}
                        {smallCard({col: 3, row: 2})}
                        {smallCard({col: 1, row: 4})}
                        {smallCard({col: 3, row: 4})}
                    </>
                )}
                
            </div>

        </ProductLayout>
    )
}
