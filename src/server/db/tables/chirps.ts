import { SelectQuery, ModifyQuery } from '../queryUtils';
import type {RowDataPacket} from 'mysql2';

export interface IChirpsRow extends RowDataPacket {
    id: number;
    user_id: number;
    body: string;
    location: string;
    created_at: Date;
}

export function getAll(){
    return SelectQuery<IChirpsRow>('SELECT * FROM chirps;');
}

export function getOne(id: number) {
    return SelectQuery<IChirpsRow>('SELECT * FROM chirps WHERE id = ?;', [id]);
}

export function insert(chirpItem: string){
    return ModifyQuery('INSERT INTO chirps (body) VALUE (?);', [chirpItem]);
}



