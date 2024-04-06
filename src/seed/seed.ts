import bcryptjs from 'bcryptjs';

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

interface SeedUser {
    email: string;
    password: string;
    name: string;
    role: 'admin'|'user'
}

export type ValidCategory = 'amortiguadores'|'frenos'|'filtros';

interface SeedData {
    users: SeedUser[];
    categories: string[];
    products: SeedProduct[],
}


export const initialData: SeedData = {
    users: [
        {
          email: 'admin@admin.com',
          name: 'Admin Admin',
          password: bcryptjs.hashSync('admin123'),
          role: 'admin'
        },
        {
          email: 'user@user.com',
          name: 'User User',
          password: bcryptjs.hashSync('user123'),
          role: 'user'
        }, 
    ],

    categories: ['amortiguadores','frenos','filtros'],
    products: [
        {
            description: "Altura [mm]: 377.0, Diámetro 4 [mm]: 138.0, Diámetro 3 [mm]: 8.5, Diámetro [mm]: 198.2, Diám. int. 2[mm]: 103, 104, Peso neto [g]: 1708, long. de embalaje [cm]: 20.0, Ancho de embalaje [cm]: 20, h embalaje [cm]: 39. Construido con precisión para cumplir con los estándares de calidad y rendimiento exigidos por la industria automotriz, el filtro de aire MAHLE ORIGINAL LX 265 garantiza un flujo de aire óptimo hacia el motor, lo que contribuye a un funcionamiento más suave y eficiente. Además, ayuda a proteger el motor contra el desgaste prematuro y la acumulación de residuos, lo que puede prolongar la vida útil del motor y mejorar su rendimiento general.",
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
            description: "Altura [mm]: 382, Altura 1 [mm]: 383, Diámetro 4 [mm]: 161, 160, Diámetro 3 [mm]: 10,5, Diámetro [mm]: 228, Diám. int. 2[mm]: 116, Peso neto [g]: 2250, long. de embalaje [cm]: 23, Ancho de embalaje [cm]: 23. Este filtro de aire está diseñado para capturar eficazmente partículas de polvo, suciedad y otros contaminantes presentes en el aire que ingresa al motor. Su diseño preciso y su construcción robusta garantizan un flujo de aire óptimo hacia el motor, lo que contribuye a un funcionamiento suave y eficiente del vehículo. Cumple con los más altos estándares de calidad y rendimiento exigidos por la industria automotriz.",
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
            description: 'Altura [mm]: 85, Rosca empalme: 3/4, Diámetro [mm]: 76. El filtro RIDEX 700028 está diseñado para adaptarse a una amplia gama de modelos de vehículos específicos. Se fabrica de acuerdo con los estándares y especificaciones de los fabricantes de automóviles para garantizar un ajuste perfecto y una funcionalidad óptima. Utiliza una tecnología de filtración avanzada para capturar partículas de suciedad, sedimentos y otros contaminantes presentes en el aceite del motor. El diseño del filtro está optimizado para proporcionar una filtración eficiente sin restringir el flujo de aceite, lo que asegura un adecuado suministro de lubricación al motor.',
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
            description: "Lado de montaje: Eje trasero, Tipo de amortiguador: Presión de gas, Tipo de sujeción de amortiguador: Anillo superior, Anillo inferior, Diámetro [mm]: 45, Cantidad por eje: 1, Longitud [mm]: 451.284. Está construido con materiales de alta calidad, como acero resistente a la corrosión para el cuerpo del amortiguador y sellos duraderos para mantener el aceite de amortiguación sellado de forma segura. Utiliza un sistema de amortiguación hidráulica o de gas para controlar el movimiento de la suspensión y absorber los impactos. Este sistema está diseñado para proporcionar una conducción suave y confortable, así como un manejo seguro y estable.",
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
            description: "El diseño del amortiguador ABAKUS 232-02-043 está optimizado para ofrecer un rendimiento consistente y duradero en una variedad de condiciones de conducción. Incorpora tecnología avanzada para garantizar una respuesta rápida a las irregularidades del terreno y una amortiguación efectiva de las vibraciones y oscilaciones del vehículo. Tipo de amortiguador: Presión de aceite, Sistema de amortiguadores: Bitubular, Tipo de sujeción de amortiguador: Anillo superior, Anillo inferior",
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
            description: "Lado de montaje: Eje delantero, Tipo de amortiguador: Presión de gas, Sistema de amortiguadores: Bitubular, Tipo de amortiguador: Amortiguador telescópico, Tipo de sujeción de amortiguador: Anillo inferior, Espiga arriba, long. máx. [mm]: 480, long. mín. [mm]: 330, Diámetro del cilindro del pistón [mm]: 38.4",
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
            description: "Lado de montaje: Eje delantero,Altura [mm]: 26.8, Espesor de disco de frenos [mm]: 12.8, Diámetro de centrado [mm]: 68.4, Número de orificios: 4, corona de agujeros [mm]: 92.46, Espesor mínimo [mm]: 11.4, Diámetro interior [mm]: 118.1",
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
            description: "Lado de montaje: Eje delantero, Altura [mm]: 44, Espesor de disco de frenos [mm]: 23, Diámetro de centrado [mm]: 64, Número de orificios: 4, Espesor mínimo [mm]: 21, Diámetro interior [mm]: 136",
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
            description: "Unidad de cantidad: Juego para eje, Lado de montaje: Eje delantero, Altura [mm]: 60, Espesor de disco de frenos [mm]: 17.5, Ancho [mm]: 131.6, Contacto avisador de desgaste: No preparado para indicador de desgaste",
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
        {
            description: "Tipo de filtro: Filtro enroscable, Código de motor: X14XE, X16XEL, X16XEL, Y16XE, Y22XE, Año de construcción desde: 09 / 1985, 10 / 1985, Año de construcción hasta: 01 / 1998, 08 / 1999, 09 / 2000, Altura [mm]: 86.5, Medida de rosca: M 18 X 1.5 - 6H, Diámetro int. 2[mm]: 71, 62, Diámetro [mm]: 76.5.",
            images: [
                'https://media.autodoc.de/360_photos/12901106/h-preview.jpg',
                'https://cdn.autodoc.de/thumb?id=12901106&m=0&n=0&lng=es&rev=94077829',
                'https://cdn.autodoc.de/thumb?id=12901106&m=0&n=2&lng=es&rev=94077829',
            ],
            inStock: 27,
            price: 4.03,
            brand: 'FILTRON',
            productNumber: 'OP 570T',
            slug: "filtron-op-570t",
            type: 'enroscable',
            compatibleCarModels: ['usuzu','opel','vauxhall'],
            title: "FILTRON OP 570T Filtro de Aceite",
            category: 'filtros'
        },
        {
            description: "Lado de montaje: ASHIKA 61-01-198 Eje trasero, Diámetro [mm]: 239.3, Tipo de disco de frenos: macizo, Altura [mm]: 41.1, Espesor de disco de frenos [mm]: 7.1, Número de taladros: 4, Corona de agujeros - Ø [mm]: 61, Espesor mínimo [mm]: 6.",
            images: [
                'https://cdn.autodoc.de/thumb?id=10023509&m=0&n=0&lng=es&rev=94077829',
                'https://cdn.autodoc.de/thumb?id=10023509&m=0&n=1&lng=es&rev=94077829',
            ],
            inStock: 30,
            price: 20.91,
            brand: 'ASHIKA',
            productNumber: '61-01-198',
            slug: "ashika-61-01-198",
            type: 'macizo',
            compatibleCarModels: ['nisssan'],
            title: "ASHIKA 61-01-198 Disco de Freno",
            category: 'frenos'
        },
        {
            description: "Sistema de amortiguadores: Bitubular, Tipo de amortiguador: Amortiguador telescópico, Tipo de sujeción de amortiguador: Anillo superior, Anillo inferior, Longitud máxima [mm]: 556, Longitud mínima [mm]: 340.",
            images: [
                'https://media.autodoc.de/360_photos/15185699/h-preview.jpg',
                'https://cdn.autodoc.de/thumb?id=15185699&m=1&n=0&lng=es&rev=94077829',
                'https://cdn.autodoc.de/thumb?id=15185699&m=0&n=1&lng=es&rev=94077829',
            ],
            inStock: 10,
            price: 30.07,
            brand: 'RIDEX',
            productNumber: '854S2335',
            slug: "ridex-854S2335",
            type: 'presión de gas',
            compatibleCarModels: ['toyota'],
            title: "RIDEX 854S2335 Amortiguador",
            category: 'amortiguadores'
        },
    ]
}