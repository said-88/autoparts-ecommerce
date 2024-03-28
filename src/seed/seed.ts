export interface SeedProduct {
    // id: string;
    description: string;
    images: string[];
    inStock: number;
    price: number;
    brand: string;
    productNumber: string;
    slug: string;
    compatibleCarModels: string[];
    title: string;
    type: string;
    category: ValidCategory;
}

export type ValidCategory = 'amortiguadores'|'frenos'|'filtros';

interface SeedData {
    categories: string[];
    products: SeedProduct[],
}


export const initialData: SeedData = {
    categories: ['amortiguadores','frenos','filtros'],
    products: [
        {
            description: "Introducing the Tesla Chill Collection. The amortiguadores’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla frenosrdmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
            images: [
                'mahle-original-lx-265.jpg',
                'mahle-original-lx-265-2.jpg',
                'mahle-original-lx-265-3.jpg',
            ],
            inStock: 7,
            price: 850,
            brand: 'MAHLE ORIGINAL',
            productNumber: 'LX-265',
            slug: 'mahle-original-lx-265',
            type: 'cartucho filtrante',
            compatibleCarModels: ['nissan','mercedez-benz','volvo'],
            title: "MAHLE ORIGINAL LX 265 Filtro de Aire",
            category: 'filtros',
        },
        {
            description: "The amortiguadores's Quilted Shirt Jacket features a uniquely fit, quilted design for warmth and mobility in cold weather seasons. With an overall street-smart aesthetic, the jacket features subtle silicone injected Tesla logos below the back collar and on the right sleeve, as well as custom matte metal zipper pulls. Made from 87% nylon and 13% polyurethane.",
            images: [
                'mahle-original-lx-227.jpg',
                'mahle-original-lx-227-2.jpg',
            ],
            inStock: 5,
            price: 1068.50,
            brand: 'MAHLE ORIGINAL',
            productNumber: 'LX-227',
            slug: 'mahle-original-lx-227',
            type: 'cartucho filtrante',
            compatibleCarModels: ['mercedez-benz','nissan','mitsubishi'],
            title: 'MAHLE ORIGINAL LX 227 Filtro de Aire',
            category: 'filtros'
        },
        {
            description: 'The amortiguadores’s Quilted Shirt Jacket features a uniquely fit, quilted design for warmth and mobility in cold weather seasons. With an overall street-smart aesthetic, the jacket features subtle silicone injected Tesla logos below the back collar and on the right sleeve, as well as custom matte metal zipper pulls. Made from 87% nylon and 13% polyurethane.',
            images: [
                'ridex-7O0028.jpg',
                'ridex-7O0028-2.jpg',
                'ridex-7O0028-3.jpg',
            ],
            inStock: 17,
            price: 220.06,
            brand: 'RIDEX',
            productNumber: '7O0028',
            slug: 'ridex-7O0028',
            type: 'filtro enroscable',
            compatibleCarModels: ['ford','jaguar','volvo','mazda'],
            title: "RIDEX 7O0028 Filtro de Aceite",
            category: 'filtros'
        },
        {
            description: "Introducing the Tesla Raven Collection. The amortiguadores's Raven Lightweight Zip Up Bomber has a premium, modern silhouette made from a sustainable bamboo cotton blend for versatility in any season. The hoodie features subtle thermoplastic polyurethane Tesla logos on the left chest and below the back collar, a concealed chest pocket with custom matte zipper pulls and a french terry interior. Made from 70% bamboo and 30% cotton.",
            images: [
                'ridex-854s1739.jpg',
                'ridex-854s1739-2.jpg',
                'ridex-854s1739-3.jpg',
            ],
            inStock: 10,
            price: 607.81,
            brand: 'RIDEX',
            productNumber: '854S1739',
            slug: 'ridex-854s1739',
            type: 'presión de gas',
            compatibleCarModels: ['dodge','plymouth','chrysler'],
            title: "RIDEX 854S1739 Amortiguador",
            category: 'amortiguadores'
        },

        {
            description: "Introducing the Tesla Turbine Collection. Designed for style, comfort and everyday lifestyle, the amortiguadores's Turbine Long Sleeve Tee features a subtle, water-based T logo on the left chest and our Tesla frenosrdmark below the back collar. The lightweight material is double-dyed, creating a soft, casual style for ideal wear in any season. Made from 50% cotton and 50% polyester.",
            images: [
                'abakus-232-02-043.jpg',
                'abakus-232-02-043-2.jpg',
            ],
            inStock: 50,
            price: 493.11,
            brand: 'ABAKUS',
            productNumber: '232-02-043',
            slug: "abakus-232-02-043",
            type: 'presión de aceite',
            compatibleCarModels: ['citroen','peugeot','renault'],
            title: "ABAKUS 232-02-043 Amortiguador",
            category: 'amortiguadores'
        },
        {
            description: "Introducing the Tesla Turbine Collection. Designed for style, comfort and everyday lifestyle, the amortiguadores's Turbine Short Sleeve Tee features a subtle, water-based Tesla frenosrdmark across the chest and our T logo below the back collar. The lightweight material is double-dyed, creating a soft, casual style for ideal wear in any season. Made from 50% cotton and 50% polyester.",
            images: [
                'ashika-ma-85522.jpg',
                'ashika-ma-85522-2.jpg',
                'ashika-ma-85522-3.jpg',
            ],
            inStock: 50,
            price: 649.62,
            brand: 'ASHIKA',
            productNumber: 'MA-85522',
            slug: "ashika-ma-85522",
            type: 'presión de gas',
            compatibleCarModels: ['suzuki'],
            title: "ASHIKA MA-85522 Amortiguador",
            category: 'amortiguadores'
        },
        {
            description: "Designed for comfort, the Cybertruck Owl Tee is made from 100% cotton and features our signature Cybertruck icon on the back.",
            images: [
               'ridex-82B0673.jpg',
               'ridex-82B0673-2.jpg',
               'ridex-82B0673-3.jpg',
            ],
            inStock: 14,
            price: 340.62,
            brand: 'RIDEX',
            productNumber: '82B0673',
            slug: "ridex-82B0673",
            type: 'macizo',
            compatibleCarModels: ['ford','hyundai'],
            title: "RIDEX 82B0673 Disco de Freno",
            category: 'frenos'
        },
        {
            description: "Inspired by our fully integrated home solar and storage system, the Tesla Solar Roof Tee advocates for clean, sustainable energy wherever you go. Designed for fit, comfort and style, the tee features an aerial view of our seamless Solar Roof design on the front with our signature T logo above 'Solar Roof' on the back. Made from 100% Peruvian cotton.",
            images: [
                'ridex-82B1068.jpg',
                'ridex-82B1068-2.jpg',
                'ridex-82B1068-3.jpg',
            ],
            inStock: 15,
            price: 655.78,
            brand: 'RIDEX',
            productNumber: '82B1068',
            slug: "ridex-82B1068",
            type: 'ventilación interna',
            compatibleCarModels: ['ford'],
            title: "RIDEX 82B1068 Disco de freno",
            category: 'frenos'
        },
        {
            description: "Inspired by the frenosrld’s most unlimited resource, the Let the Sun Shine Tee highlights our fully integrated home solar and storage system. Designed for fit, comfort and style, the tee features a sunset graphic along with our Tesla frenosrdmark on the front and our signature T logo printed above 'Solar Roof' on the back. Made from 100% Peruvian cotton.",
            images: [
                'ridex-402B0624.jpg',
                'ridex-402B0624-2.jpg',
                'ridex-402B0624-3.jpg',
            ],
            inStock: 17,
            price: 707.78,
            brand: 'RIDEX',
            productNumber: '402B0624',
            slug: "ridex-402B0624",
            type: 'eje delantero',
            compatibleCarModels: ['ford'],
            title: "RIDEX 402B0624 Juego de Pastillas de Freno",
            category: 'frenos'
        },
    ]
}