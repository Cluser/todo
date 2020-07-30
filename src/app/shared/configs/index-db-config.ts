import { DBConfig } from 'ngx-indexed-db';

export const dbConfig: DBConfig  = {
    name: 'TodoDB',
    version: 1,
    objectStoresMeta: [{
        store: 'todo',
        storeConfig: { keyPath: 'id', autoIncrement: true },
        storeSchema: [
            { name: 'new', keypath: 'new', options: { unique: false } },
            { name: 'inProgress', keypath: 'inProgress', options: { unique: false } },
            { name: 'done', keypath: 'done', options: { unique: false } }
        ]
    }]
};
