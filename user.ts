export interface WordPressUser {
    id: number;
    name: string;
    url: string;
    description: string;
    link: string;
    slug: string;
    avatar_urls: {
        [size: string]: string;
    };
    meta: any[];
    _links: {
        [key: string]: {
            href: string;
        }[];
    };
}
