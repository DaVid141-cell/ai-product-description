import ProductLayout from "./layouts/product-layout";

export default function ProductItem () {
    return (
        <ProductLayout>
        
            <div className="grid lg:grid-cols-9 lg:grid-rows-5 gap-15 outline-5 md:grid-flow-row pb-10 pr-20">
                <div className="col-span-4 row-span-4 col-start-1 row-start-2 outline-5 ml-10">3</div>
                <div className="col-span-2 row-span-2 col-start-6 row-start-2 outline-5 h-[250px] ">4</div>
                <div className="col-span-2 row-span-2 col-start-8 row-start-2 outline-5 h-[250px]">5</div>
                <div className="col-span-2 row-span-2 col-start-6 row-start-4 outline-5 h-[250px]">6</div>
                <div className="col-span-2 row-span-2 col-start-8 row-start-4 outline-5 h-[250px]">7</div>
            </div>

        </ProductLayout>
    )
}