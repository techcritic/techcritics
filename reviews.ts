import { Review } from '../types/review';

export const reviews: Record<string, Review[]> = {
  smartphones: [
    {
      id: '1',
      title: "iPhone 15 Pro Max",
      image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569",
      rating: 4.5,
      category: "Smartphones",
      categoryColor: "blue",
      description: "Apple's latest flagship brings significant camera improvements and the new A17 Pro chip.",
      fullReview: `The iPhone 15 Pro Max represents Apple's most ambitious smartphone yet. The device features a groundbreaking 5x telephoto camera, a first for any iPhone, enabling unprecedented zoom capabilities for mobile photography enthusiasts.

The A17 Pro chip, built on a 3nm process, delivers desktop-class gaming performance while maintaining excellent power efficiency. The new titanium frame not only looks premium but also contributes to a lighter overall weight compared to previous Pro Max models.

USB-C integration finally brings universal compatibility, supporting faster data transfers and the ability to connect to external displays at up to 4K 60Hz. The Action Button, replacing the traditional mute switch, adds a new layer of customization to the iPhone experience.`
    },
    {
      id: '2',
      title: "Samsung Galaxy S24 Ultra",
      image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c",
      rating: 4.7,
      category: "Smartphones",
      categoryColor: "blue",
      description: "Samsung's AI-powered flagship sets new standards for smartphone photography and productivity.",
      fullReview: `The Samsung Galaxy S24 Ultra pushes the boundaries of what's possible with mobile AI. The device introduces Galaxy AI, a suite of intelligent features that transform how we interact with our smartphones.

The new 200MP main camera with enhanced AI processing delivers exceptional photos in any lighting condition. The 50MP 5x telephoto camera provides incredible zoom capabilities with minimal quality loss.

The S Pen experience has been refined further, making it an indispensable tool for productivity. The 6.8-inch QHD+ display with adaptive refresh rate up to 120Hz provides an immersive viewing experience.`
    },
    {
      id: '6',
      title: "Google Pixel 8 Pro",
      image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97",
      rating: 4.6,
      category: "Smartphones",
      categoryColor: "blue",
      description: "Google's computational photography marvel with advanced AI features.",
      fullReview: `The Pixel 8 Pro showcases Google's mastery of computational photography and AI. The new Tensor G3 chip enables unprecedented AI capabilities, from enhanced photo editing to real-time translation.

The 50MP main sensor, combined with Google's advanced algorithms, produces stunning photos in any condition. The upgraded ultrawide and telephoto cameras complete a versatile camera system.

The 6.7-inch LTPO OLED display with 120Hz refresh rate provides excellent visibility and smooth animations. The new temperature sensor adds unique utility to the device.`
    }
  ],
  laptops: [
    {
      id: '3',
      title: "MacBook Pro M3",
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
      rating: 4.8,
      category: "Laptops",
      categoryColor: "green",
      description: "Revolutionary performance meets incredible battery life with the M3 chip.",
      fullReview: `The MacBook Pro M3 represents the next evolution in Apple's silicon journey. The M3 chip brings significant improvements in both CPU and GPU performance, while maintaining the exceptional power efficiency that Apple Silicon is known for.

The Liquid Retina XDR display continues to be the best in class, with mini-LED technology providing stunning HDR content viewing. The improved GPU architecture makes this an excellent choice for creative professionals.

The Magic Keyboard provides a comfortable typing experience, and the extensive port selection, including HDMI and SD card reader, ensures excellent connectivity options.`
    },
    {
      id: '7',
      title: "Dell XPS 13 Plus",
      image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45",
      rating: 4.5,
      category: "Laptops",
      categoryColor: "green",
      description: "A masterpiece of modern design with powerful performance.",
      fullReview: `The Dell XPS 13 Plus is a bold reimagining of the traditional laptop. Its minimalist design with a zero-lattice keyboard and invisible touchpad creates a stunning aesthetic that stands out in the premium laptop segment.

The 13.4-inch 4K OLED display option provides incredible color accuracy and contrast, perfect for content creators. Intel's latest processors deliver excellent performance for productivity tasks.

The capacitive touch function row and edge-to-edge keyboard maximize the available space, though they may require some adjustment time for users.`
    }
  ],
  audio: [
    {
      id: '4',
      title: "Sony WH-1000XM5",
      image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb",
      rating: 5,
      category: "Audio",
      categoryColor: "purple",
      description: "Best-in-class noise cancellation and exceptional sound quality.",
      fullReview: `The Sony WH-1000XM5 sets a new standard for wireless noise-cancelling headphones. The redesigned drivers deliver cleaner, more natural sound while the improved noise cancellation effectively blocks out more ambient noise than ever before.

The new 8-microphone system, combined with advanced audio processing, ensures crystal-clear call quality and better noise cancellation. The touch controls are intuitive and responsive.

Battery life remains excellent at 30 hours with ANC enabled, and the new collapsible design, while different from its predecessor, is still travel-friendly.`
    },
    {
      id: '8',
      title: "Apple AirPods Pro 2",
      image: "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434",
      rating: 4.8,
      category: "Audio",
      categoryColor: "purple",
      description: "Enhanced active noise cancellation and spatial audio experience.",
      fullReview: `The AirPods Pro 2 improve upon their predecessor in every way. The H2 chip enables significantly better active noise cancellation and more immersive spatial audio with dynamic head tracking.

The new touch control on the stems allows for volume adjustment, while the improved battery life provides up to 6 hours of listening time with ANC enabled. The charging case now includes precision finding with U1 chip integration.

Sound quality has been enhanced with better bass response and clearer mids, while the Adaptive EQ continues to optimize audio output based on your ear shape.`
    }
  ],
  cameras: [
    {
      id: '5',
      title: "Sony A7 IV",
      image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32",
      rating: 4.9,
      category: "Cameras",
      categoryColor: "red",
      description: "A hybrid powerhouse that excels in both photography and videography.",
      fullReview: `The Sony A7 IV is a remarkable achievement in hybrid camera design. The new 33MP full-frame sensor provides excellent image quality and improved low-light performance, while the enhanced autofocus system with real-time tracking ensures sharp focus in any situation.

Video capabilities are equally impressive, with 4K 60p recording in 10-bit 4:2:2 color. The improved heat dissipation allows for longer recording times without overheating.

The refined ergonomics, including a fully articulating screen and improved grip, make this camera comfortable for all-day shooting sessions.`
    },
    {
      id: '9',
      title: "Canon EOS R6 Mark II",
      image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd",
      rating: 4.7,
      category: "Cameras",
      categoryColor: "red",
      description: "Versatile mirrorless camera with advanced AF capabilities.",
      fullReview: `The Canon EOS R6 Mark II builds upon its predecessor's success with meaningful improvements. The new 24.2MP sensor provides excellent image quality and improved dynamic range, while the enhanced Dual Pixel CMOS AF II system offers even better subject detection and tracking.

Video features include 4K 60p recording without crop and improved rolling shutter performance. The in-body image stabilization system provides up to 8 stops of shake correction.

The refined electronic viewfinder and fully articulating touchscreen make composition and review a pleasure, while the improved battery life ensures longer shooting sessions.`
    }
  ]
};