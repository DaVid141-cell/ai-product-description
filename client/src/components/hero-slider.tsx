import { ArrowLeft, ArrowRight } from 'lucide-react';
import {useRef} from 'react';
import { Link } from 'react-router-dom';

const images = [
    {
        src: 'images/feature2.jpg', 
        name: 'AI Product Description Generator',
        description: 'Effortlessly generate high-quality, tailored fashion descriptions powered by AI, built into your shopping experience.'

    },
    {
        src: 'images/feature1.jpg', 
        name: 'AI Product Description Generator',
        description: 'Effortlessly generate high-quality, tailored fashion descriptions powered by AI, built into your shopping experience.'
    },
    {
        src: 'images/feature3.jpg', 
        name: 'AI Product Description Generator',
        description: 'Effortlessly generate high-quality, tailored fashion descriptions powered by AI, built into your shopping experience.'
    },
    {
        src: 'images/feature4.jpg', 
        name: 'AI Product Description Generator',
        description: 'Effortlessly generate high-quality, tailored fashion descriptions powered by AI, built into your shopping experience.'
    },
    {
        src: 'images/feature5.jpg', 
        name: 'AI Product Description Generator',
        description: 'Effortlessly generate high-quality, tailored fashion descriptions powered by AI, built into your shopping experience.'
    },
    {
        src: 'images/feature6.jpg', 
        name: 'AI Product Description Generator',
        description: 'Effortlessly generate high-quality, tailored fashion descriptions powered by AI, built into your shopping experience.'
    }
]


export default function Slider() {
    const slideRef = useRef<HTMLDivElement>(null);

    const handleNext = () => {
        const items = slideRef.current?.querySelectorAll('.item');
        if (items && items.length > 0) {
        slideRef.current?.appendChild(items[0]);
        }
    };

    const handlePrev = () => {
        const items = slideRef.current?.querySelectorAll('.item');
        if (items && items.length > 0) {
        slideRef.current?.prepend(items[items.length - 1]);
        }
    };
    return(
        <div className="min-h-[700px] flex items-center justify-center overflow-hidden relative">
            <div className="container">
                <div className="slide" ref={slideRef}>
                    {images.map((img, idx) => (
                    <div
                        className="item "
                        key={idx}
                        style={{ backgroundImage: `url(${img.src})` }}
                    >
                        <div className="content">
                        <div className="name">{img.name}</div>
                        <div className="des">{img.description}</div>
                        <button>
                            <Link to="/product-generation" className='font-bold transition hover:scale-105'>Try now</Link>
                        </button>
                    </div>
                </div>
                    ))}
                </div>
                    <div className="w-full text-center absolute bottom-5">
                        <button
                            className="w-10 h-[35px] pb-10 leading-[35px] text-center rounded-lg border border-black cursor-pointer mx-[5px] transition duration-300 hover:bg-[#4a90e2] hover:text-white"
                            onClick={handlePrev}
                        >
                            <ArrowLeft className="inline-block" />
                        </button>
                        <button
                            className="w-10 h-[35px] pb-10 leading-[35px] text-center rounded-lg border border-black cursor-pointer mx-[5px] transition duration-300 hover:bg-[#4a90e2] hover:text-white"
                            onClick={handleNext}
                        >
                            <ArrowRight className="inline-block" />
                        </button>
                    </div>

            </div>
        </div>
    )
}