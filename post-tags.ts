export interface WordPressPostTag {
    id: number;
    count: number;
    description: string;
    link: string;
    name: string;
    slug: string;
    taxonomy: string;
    meta: any[];
    _links: {
        [key: string]: {
            href: string;
        }[];
    };
}
