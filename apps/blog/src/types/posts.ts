
export type Post = {
    id: string;
    name: string;
    title: string;
    excerpt: string;
    slug: string;
    coverImage: {url: string};
    url: string;
    content: {html: string},
    author: {name: string; picture: string},
    publishedAt: string;
    createdAt: string;
}