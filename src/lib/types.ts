interface SqlConfig {
    server: string;
    port: number;
    database: string;
    authentication: {
        type: string;
        options: {
            userName: string;
            password: string;
        };
    };
    options: {
        encrypt: boolean;
    };
}

interface Chapter { 
    story: string; 
    displayOrder: number; 
    title:string;
}

interface Origin {
    chapters: Chapter[];
}