
export const generatePaginationNumbers = (totalPages: number, currentPage: number) => {
    if (totalPages <= 3) {
        return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    if (currentPage <= 1) {
        return [1, 2, 3, '...', totalPages - 1, totalPages];
    }

    if (currentPage >= totalPages - 2) {
        return [1, 2, '...', totalPages - 2, totalPages - 1, totalPages];
    }

    return [1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages];
}