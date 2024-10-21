export type Article = {
    _id?: string;                    // Article ID (optional string)
    title?: string;                  // Title of the article (optional string)
    authors?: string;                // Authors of the article (optional string)
    DOI?: string;                    // DOI (optional string)
    publication_year?: Date;         // Publication year (optional Date)
    volume?: string;                 // Volume (optional string)
    number?: number;                 // Issue number (optional number)
    pages?: number;                  // Number of pages (optional number)
    content?: string;                // Content of the article (optional string)
    updated_date?: Date;             // Date when the article was last updated (optional Date)
    status?: string;                 // Content of the article (optional string)
    descriptor?: string;             // Article descriptor
    rating?: number;
};

export const DefaultEmptyArticle: Article = {
    _id: undefined,                  // Default undefined for ID
    title: '',                       // Default empty string for title
    authors: '',                     // Default empty string for authors
    DOI: '',                         // Default empty string for DOI
    publication_year: undefined,     // Default undefined for publication year
    volume: '',                      // Default empty string for volume
    number: undefined,               // Default undefined for number
    pages: undefined,                // Default undefined for pages
    content: '',                     // Default empty string for content
    descriptor: '',                     // Default empty string for descriptor
    updated_date: undefined,         // Default undefined for updated date
    status: 'pending',                     // Default empty string for content
    rating: undefined,
};
