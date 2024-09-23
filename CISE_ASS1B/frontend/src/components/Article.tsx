export type Article = {
    _id?: string;
    title?: string;
    authors?: string; // Changed from author to authors
    DOI?: string;
    publication_year?: Date; // Keep this as Date if you're using a date picker
    volume?: string;
    number?: number; // Changed from int to number
    pages?: number; // Changed from int to number
    updated_date?: Date;
};

export const DefaultEmptyArticle: Article = {
    _id: undefined,
    title: '',
    authors: '', // Changed from Journal_name to authors
    DOI: '',
    publication_year: undefined,
    volume: '',
    number: undefined, // Corrected to undefined
    pages: undefined, // Changed to undefined for consistency
    updated_date: undefined,
}
