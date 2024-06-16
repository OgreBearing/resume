import { env } from '$env/dynamic/private';
import sql from 'mssql';

// Configuration for the database connection
const config: SqlConfig = {
    server: env.SQL_SERVER || "",
    port: parseInt(env.SQL_PORT) || 1433, // default port 1433 if not specified
    database: env.SQL_DATABASE || "",
    authentication: {
        type: 'default',
        options: {
            userName: env.SQL_USER || "",
            password: env.SQL_PASSWORD || ""
        }
    },
    options: {
        encrypt: true // for Azure SQL Database
    }
};

const getData = async (): Promise<Origin> => {
    try {
        const poolConnection = await sql.connect(config);
        const resultSet = await poolConnection.request().query(`SELECT * FROM About`);

        // Close connection only when we're certain the application is finished
        await poolConnection.close();

        return { chapters: resultSet.recordset.map((row: Chapter) => row)};

    } catch (err: any) {
        console.error("An error occurred:", err.message);
        return getData();
    }

}

export const load = async ({ cookies, url }): Promise<Origin> => {
    return getData();
};
