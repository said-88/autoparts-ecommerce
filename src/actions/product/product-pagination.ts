'use server';
import { prisma } from "@/lib/prisma";
import { Category } from "@prisma/client";

interface PaginationOptions {
    page?: number;
    take?: number;
    categoryId?: Category['name'];
}

export const getPaginationProducts = async ({ page = 1, take = 6, categoryId}: PaginationOptions) => {
    if (isNaN(Number(page)) ) page = 1;
    if (page < 1) page = 1;

    try {
        const products = await prisma.product.findMany({
            take: take,
            skip: (page - 1) * take,
            include: {
                images: { 
                    take: 2,
                    select: {
                        url: true
                    },
                },
                category: true,
            },
            where: {
                category: { 
                    name: categoryId
                }
            }
        })

        const totalCount = await prisma.product.count({
            where: {
                category: { 
                    name: categoryId
                }
            }
        });
        const totalPages = Math.ceil(totalCount / take);
        return {
            currentPage: page,
            totalPages: totalPages,
            products: products.map( product => ({
                ...product,
                images: product.images.map( (image) => image.url)
            }))
        }
    }
    catch (error) {
        throw new Error('Error getting products pagination');
    }
}