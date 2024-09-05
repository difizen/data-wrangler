import {parse} from 'csv-parse';

export interface ParseResult {
    columns: string[]
    data: Record<string, string>[]
}

export const csvParse = async (text: string): Promise<ParseResult> => {
    return new Promise((resolve, reject) => {
        parse(text, {}, (err, res) => {
            if (err) {
                reject(err.message);
            }
            if (!Array.isArray(res)) {
                reject('no data');
            }

            if (res.length === 0) {
                reject('no data');
            }

            const firstRow: string[] = res[0];
            if (!Array.isArray(firstRow)) {
                reject('invalid data');
            }

            const columns = firstRow.map((item, index) => `Field${index + 1}`);

            const data = (res as string[][]).map(row => {
                const rowData: Record<string, string> = {};
                columns.forEach((item, index) => {
                    rowData[item] = row[index];
                });
                return rowData;
            });

            resolve({ columns, data});
        });
    });
};