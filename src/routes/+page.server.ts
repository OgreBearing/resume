import { env } from '$env/dynamic/private';
import {PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getData = async (): Promise<Origin> => {
    try {
        const resultSet = await prisma.about.findMany();
        return { chapters: resultSet.toSorted((a,b)=>{return a.displayOrder - b.displayOrder})};

    } catch (err: any) {
         console.error("An error occurred:", err.message);
         return getData();
    }
}

export const load = async (): Promise<Origin> => {
    return getData();
};
