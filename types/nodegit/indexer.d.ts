import { TransferProgress } from './transfer-progress';
import { Oid } from './oid';

export class Indexer {
    commit(stats: TransferProgress): number;

    hash(): Oid;
}
