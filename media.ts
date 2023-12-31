export interface WordPressMedia {
    id: number;
    date: string;
    date_gmt: string;
    guid: {
        rendered: string;
    };
    modified: string;
    modified_gmt: string;
    slug: string;
    status: string;
    type: string;
    link: string;
    title: {
        rendered: string;
    };
    author: number;
    comment_status: string;
    ping_status: string;
    template: string;
    meta: any[];
    description: {
        rendered: string;
    };
    caption: {
        rendered: string;
    };
    alt_text: string;
    media_type: string;
    mime_type: string;
    media_details: {
        width: number;
        height: number;
        file: string;
        sizes: {
            [key: string]: {
                file: string;
                width: number;
                height: number;
                mime_type: string;
                source_url: string;
            };
        };
        image_meta: {
            aperture: string;
            credit: string;
            camera: string;
            caption: string;
            created_timestamp: string;
            copyright: string;
            focal_length: string;
            iso: string;
            shutter_speed: string;
            title: string;
            orientation: string;
            keywords: any[];
        };
    };
    post: number;
    source_url: string;
    _links: {
        [key: string]: {
            href: string;
        }[];
    };
}
