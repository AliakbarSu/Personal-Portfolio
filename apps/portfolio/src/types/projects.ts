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

export interface WorkProject {
    id: string;
    title: string;
    description: string;
    technologies: string;
    screenshots: {
        id: string;
        url: string;
        width: number;
    }[]
}
