export interface SeedProduct {
    // id: string;
    description: string;
    images: string[];
    inStock: number;
    price: number;
    sizes: ValidSize[];
    slug: string;
    tags: string[];
    title: string;
    type: ValidType;
    category: ValidCategory;
}

export type ValidCategory = 'amortiguadores'|'frenos'|'filtros';
export type ValidSize = 'XS'|'S'|'M'|'L'|'XL'|'XXL'|'XXXL';
export type ValidType = 'shirts'|'pants'|'hoodies'|'hats';