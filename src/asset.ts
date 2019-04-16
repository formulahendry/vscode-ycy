import * as vscode from 'vscode';
import * as path from 'path';
import * as fs from 'fs';
import { Utility } from './utility';

export default class Asset {
    public constructor(private context: vscode.ExtensionContext) {
    }

    public getImageUrl(): vscode.Uri | string {
        let image: vscode.Uri | string = '';
        if (this.isUseConfigImage()) {
            image = this.getRandomOne(this.getConfigImages());
        } else {
            image = vscode.Uri.file(this.getRandomOne(this.getDefaultImages())).with({ scheme: 'vscode-resource' });
        }
        return image;
    }

    public getTitle(): string {
        return Utility.getConfiguration().get<string>('showTitle', '小哥哥，小哥哥，代码写久了，该休息啦~');
    }

    protected getRandomOne(images: string[]): string {
        var n = Math.floor(Math.random() * images.length + 1) - 1;
        return images[n];
    }

    protected getConfigImages(): string[] {
        let configImages: string[] = Utility.getConfiguration().get<string[]>('configImages', [
            "http://b-ssl.duitang.com/uploads/item/201806/04/20180604090459_gqqjo.jpg",
            "http://img5.imgtn.bdimg.com/it/u=2196122296,3201462689&fm=26&gp=0.jpg"
        ]);
        return configImages;
    }

    protected getDefaultImages(): string[] {
        const dirPath = path.join(this.context.extensionPath, 'images');
        let files: string[] = [];
        const result = fs.readdirSync(dirPath);
        result.forEach(function (item, index) {
            if (item === 'usage.png' || item === 'vote-qr.png') {
                return;
            }
            const stat = fs.lstatSync(path.join(dirPath, item));
            if (stat.isFile()) {
                files.push(path.join(dirPath, item));
            }
        });
        return files;
    }

    protected isUseConfigImage(): boolean {
        return Utility.getConfiguration().get<boolean>('isUseConfigImage', false);
    }
}