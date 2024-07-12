// interface SqlConfig {
//     server: string;
//     port: number;
//     database: string;
//     authentication: {
//         type: string;
//         options: {
//             userName: string;
//             password: string;
//         };
//     };
//     options: {
//         encrypt: boolean;
//     };
// }

interface About {
    story: string | null;
    displayOrder: number;
    id: number;
    title: string | null;
  }

interface Origin {
    chapters: About[];
}