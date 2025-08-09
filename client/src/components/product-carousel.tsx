
import { Card, CardContent } from "./ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel"
import ProductCard from "./ui/product-item";

const Items =[
    {
        'img': 'images/product-items/Classic-Leather-Handbag.jpg',
        'alt': 'Elegant black leather handbag',
        'name': 'Classic Leather Handbag',
        'brand': 'LuxeCarry',
        'category': 'Handbags',
        'description': 'A sophisticated black leather handbag with gold-tone hardware, ideal for daily and formal occasions.',
        'price': 129.99,
        'discountPrice': 99.99
    },
    {
        'img': 'images/product-items/Minimalist-Tote-Bag.jpg',
        'alt': 'Beige tote bag',
        'name': 'Minimalist Tote Bag',
        'brand': 'UrbanCraft',
        'category': 'Handbags',
        'description': 'A spacious beige tote bag made from eco-friendly materials, perfect for work or casual outings.',
        'price': 89.99,
        'discountPrice': 69.99
    },
    {
        'img': 'images/product-items/Floral-Midi-Dress.jpg',
        'alt': 'Floral print summer dress',
        'name': 'Floral Midi Dress',
        'brand': 'BlossomWear',
        'category': 'Dresses',
        'description': 'A flowy and comfortable dress with vibrant floral prints, designed for sunny days and casual events.',
        'price': 74.99,
        'discountPrice': 59.99
    },
    {
        'img': 'images/product-items/Elegant-Evening-Dress.jpg',
        'alt': 'Red evening dress',
        'name': 'Elegant Evening Dress',
        'brand': 'GlamEssence',
        'category': 'Dresses',
        'description': 'A red evening dress with a flattering silhouette and soft satin finish, ideal for formal gatherings.',
        'price': 159.99,
        'discountPrice': 129.99
    },
    {
        'img': 'images/product-items/Biker-Leather-Jacket.jpg',
        'alt': 'Black leather biker jacket',
        'name': 'Biker Leather Jacket',
        'brand': 'UrbanEdge',
        'category': 'Jackets',
        'description': 'A bold and edgy biker jacket crafted from genuine leather with zip-up styling and snap lapels.',
        'price': 199.99,
        'discountPrice': 169.99
    },
    {
        'img': 'images/product-items/Classic-Trench-Coat.png',
        'alt': 'Beige trench coat',
        'name': 'Classic Trench Coat',
        'brand': 'MetroStyle',
        'category': 'Jackets',
        'description': 'A timeless beige trench coat with a belted waist and water-resistant finish, perfect for city wear.',
        'price': 139.99,
        'discountPrice': 109.99
    },
    {
        'img': 'images/product-items/Suede-Penny-Loafers.jpg',
        'alt': 'Brown suede penny loafers',
        'name': 'Suede Penny Loafers',
        'brand': 'StepRight',
        'category': 'Loafers',
        'description': 'Comfortable brown suede loafers with cushioned insoles and a classic penny slot detail.',
        'price': 99.99,
        'discountPrice': 79.99
    },
    {
        'img': 'images/product-items/Tassel-Leather-Loafers.jpg',
        'alt': 'Black leather tassel loafers',
        'name': 'Tassel Leather Loafers',
        'brand': 'Forman',
        'category': 'Loafers',
        'description': 'Polished black leather loafers with tassel accents, perfect for business and semi-formal looks.',
        'price': 119.99,
        'discountPrice': 94.99
    },
    {
        'img': 'images/product-items/Retro-Round-Sunglasses.png',
        'alt': 'Round retro sunglasses',
        'name': 'Retro Round Sunglasses',
        'brand': 'SunRayz',
        'category': 'Sunglasses',
        'description': 'Timeless round-frame sunglasses with a vintage look and UV-protected lenses.',
        'price': 49.99,
        'discountPrice': 39.99
    },
    {
        'img': 'images/product-items/Cat-Eye-Designer-Shades.jpg',
        'alt': 'Cat-eye sunglasses',
        'name': 'Cat-Eye Designer Shades',
        'brand': 'Visioné',
        'category': 'Sunglasses',
        'description': 'Stylish cat-eye sunglasses that offer both elegance and full sun protection for fashion-forward wearers.',
        'price': 64.99,
        'discountPrice': 51.99
    },
    {
        'img': 'images/product-items/Essential-Long-Sleeve-Tee.jpg',
        'alt': 'White cotton long sleeve tee',
        'name': 'Essential Long Sleeve Tee',
        'brand': 'CozyFit',
        'category': 'Longsleeves',
        'description': 'Soft cotton long sleeve shirt with a classic fit, great for layering or wearing on its own.',
        'price': 34.99,
        'discountPrice': 24.99
    },
    {
        'img': 'images/product-items/Striped-Crew-Neck-Shirt.jpg',
        'alt': 'Striped long sleeve shirt',
        'name': 'Striped Crew Neck Shirt',
        'brand': 'DailyLayer',
        'category': 'Longsleeves',
        'description': 'A casual striped long sleeve tee with a lightweight feel and a modern silhouette.',
        'price': 39.99,
        'discountPrice': 29.99
    }
]

export default function ProductCarousel() {
  return (
    <section className="m-12">
      <div className="flex flex-col items-start justify-between">
            <h1 className="text-4xl font-bold text-black mb-4">Featured Products</h1>
            <p className="text-md text-black mb-10">Discover our latest collection of featured products, handpicked for you.</p>
      </div>
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full max-w-[1300px]"
      >
        <CarouselContent>
          {Items.map((item, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4">
              <div className="p-1 h-full">    
              <Card className="h-full">
                <CardContent className="flex h-full items-center justify-center p-2">
                  <ProductCard productBox={item} />
                </CardContent>
              </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="cursor-pointer"/>
        <CarouselNext className="cursor-pointer"/>
      </Carousel>
    </section>
  );
}