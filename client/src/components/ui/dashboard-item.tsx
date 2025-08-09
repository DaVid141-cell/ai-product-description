import { Card, CardContent } from "./card";
import ProductCard from "./product-item";

const Items =
    {
        'img': 'images/product-items/Classic-Leather-Handbag.jpg',
        'alt': 'Elegant black leather handbag',
        'name': 'Classic Leather Handbag',
        'brand': 'LuxeCarry',
        'category': 'Handbags',
        'description': 'A sophisticated black leather handbag with gold-tone hardware, ideal for daily and formal occasions.',
        'price': 129.99,
        'discountPrice': 99.99
    }

export default function DashboardItem ({buttonAdd, buttonBuy}) {
    return (
        <div className="p-1 h-full">    
            <Card className="h-full">
                <CardContent className="flex h-full items-center justify-center p-2">
                    <ProductCard 
                        productBox={Items} 
                        buttonAdd={buttonAdd}
                        buttonBuy={buttonBuy}
                    />
                </CardContent>
            </Card>
         </div>
    )
}