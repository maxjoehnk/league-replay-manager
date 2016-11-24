import { createReadStream } from 'fs';
import { Promise } from 'q';
import { IGameInfo } from './gameinfo';

export function read(path: string): Promise<IGameInfo> {
    return Promise<IGameInfo>((resolve, reject) => {
        let offset = 0;
        let length = 0;
        let stream = createReadStream(path);
        let game: IGameInfo;
        stream.on('data', (buffer: Buffer) => {
            length += buffer.length;
            if (offset === 0) {
                let infoLength = buffer.readUInt16BE(284);
                let info = buffer.toString('utf-8', 288, infoLength);
                try {
                    game = JSON.parse(info);
                }catch (err) {
                    console.error(`Failed to open ${path}`, err);
                }
            }
            offset += buffer.length;
        });
        stream.on('end', () => {
            if (game === undefined) {
                return reject(new Error('Error parsing JSON'));
            }
            resolve(game);
        });
        stream.on('error', (err) => {
            reject(err);
        });
    });
}