export interface Project {
    id: string;
    name: string;
    url: string;
    description: string;
    stargazers: {
        totalCount: number;
    },
    forkCount: number;
    openGraphImageUrl: string;
    languages: {
        nodes: {
            id: string;
            name: string;
        }[]
    }
            
}
