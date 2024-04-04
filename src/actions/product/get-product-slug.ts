'use server';
import { prisma } from "@/lib/prisma";


export const getProductBySlug = async (slug: string) => {
    try {
        const product = await prisma.product.findUnique({
            include: {
                images: {
                    select: {
                        url: true
                    }
                },
                category: true
            },
            where: {
                slug
            },
        });

        if (!product) {
            throw new Error('Product not found');
        }

        return {
            ...product,
            images: product.images.map( (image) => image.url)
        }
    } catch (error) {
        throw new Error('Error getting product');
    }
}