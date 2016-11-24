import { read } from './roflReader';
import { replayFolder } from './index';
import { join } from 'path';
import { IGameInfo } from './gameinfo';

export class Replay {
    private filename: string;
    private game: IGameInfo;
    private highlights: string[];

    constructor(filename: string) {
        this.filename = filename;
        read(join(replayFolder, filename))
            .then(game => this.game = game);
    }
}