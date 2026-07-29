import fs from 'fs';
import path from 'path';

const FILE_PATH = path.join(process.cwd(), 'backend/data', 'users.json');

function directory(filePath) {
    const dirname = path.dirname(filePath);
    if (!fs.existsSync(dirname)) {
        fs.mkdirSync(dirname, { recursive: true });
    }
}

function loadData() {
    try {
        directory(FILE_PATH);
        if (!fs.existsSync(FILE_PATH)) {
            const initialData = [];
            fs.writeFileSync(FILE_PATH, JSON.stringify(initialData, null, 2), 'utf-8');
            return initialData;
        }
        const fileContent = fs.readFileSync(FILE_PATH, 'utf-8');
        return JSON.parse(fileContent);
    } catch (error) {
        console.error('[LOAD FILE ERROR]', error.message);
        return [];
    }
}

function saveData(data) {
    try {
        directory(FILE_PATH);
        fs.writeFileSync(FILE_PATH, JSON.stringify(data, null, 2), 'utf-8');
    } catch (error) {
        console.error('[FILE SAVE ERROR]', error.message);
    }
}