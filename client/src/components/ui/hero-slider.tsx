import { ArrowLeft, ArrowRight } from 'lucide-react';
import React, {useRef} from 'react';
import { Skeleton } from './skeleton';

const images = [
    {
        src: 'images/feature1.jpg', 
        name: 'INTO THE WILD', 
        description: 'Explore the untamed beauty where nature roars with life.'
    },
    {
        src: 'images/feature2.jpg', 
        name: 'RULE WITH COURAGE', 
        description: 'Be bold, be brave, and lead with a fearless heart'
    },
    {
        src: 'images/feature3.jpg', 
        name: 'THE GIANT GUARDIAN', 
        description: 'Silent strength and ancient wisdom walking the wild plains'
    },
    {
        src: 'images/feature4.jpg', 
        name: 'SPEED IN SILENCE', 
        description: 'Swift, silent, and unstoppable in the heart of the wild.'
    },
    {
        src: 'images/feature5.jpg', 
        name: 'KING OF THE WILD', 
        description: 'Where strength meets elegance in the heart of the savannah'
    },
    {
        src: 'images/feature6.jpg', 
        name: 'WINGS OF FREEDOM', 
        description: 'Soaring above limits, guided by instinct and vision.'
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
              <button>See More</button>
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