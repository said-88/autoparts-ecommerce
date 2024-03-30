export interface SeedProduct {
    id: string;
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
    category: {
        id: string, 
        name: string
    };
}

export type ValidCategory = 'amortiguadores'|'frenos'|'filtros';