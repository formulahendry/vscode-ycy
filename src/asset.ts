import * as vscode from 'vscode';
import * as path from 'path';
import * as fs from 'fs';
import { Utility } from './utility';

export default class Asset {
  public readonly TYPE_URL_IMAGE = 'url';
  public readonly TYPE_DEFAULT = 'default';

  public constructor(private context: vscode.ExtensionContext) {}

  public getImageUri(): vscode.Uri | string {
    const type: string = this.getConfigType();
    let images: vscode.Uri[] | string[];

    if (type === this.TYPE_URL_IMAGE) {
      images = this.getCustomImages();
    } else {
      images = this.getDefaultImages();
    }
    // user forget setting customImages, get default images
    if (images.length === 0) {
      images = this.getDefaultImages();
    }
    const image = this.getRandomOne(images);

    return image;
  }

  public getAudioUri(): vscode.Uri | string {
    const audioEnable = this.getAudioEnableConfig();
    debugger;
    if (JSON.parse(audioEnable)) {
      const customAudios = this.getCustomAudios();
      if (Array.isArray(customAudios) && customAudios.length) {
        return this.getRandomOne(this.getCustomAudios());
      } else {
        return this.getRandomOne(this.getDefaultAudios());
      }
    } else {
      return '';
    }
  }

  protected getDefaultAudios(): vscode.Uri[] {
    const files: vscode.Uri[] = [];
    const dirPath = this.getDefaultAudioPath();
    const result = fs.readdirSync(dirPath);
    result.forEach(function(item: string) {
      const stat = fs.lstatSync(path.join(dirPath, item));
      if (stat.isFile()) {
        files.push(
          vscode.Uri.file(path.join(dirPath, item)).with({
            scheme: 'vscode-resource',
          })
        );
      }
    });
    return files;
  }

  protected getRandomOne(images: string[] | vscode.Uri[]): string | vscode.Uri {
    const n = Math.floor(Math.random() * images.length + 1) - 1;
    return images[n];
  }

  protected getDefaultImages(): vscode.Uri[] {
    const dirPath = this.getDefaultYcyImagePath();
    const files = this.readPathImage(dirPath);
    return files;
  }

  protected readPathImage(dirPath: string): vscode.Uri[] {
    let files: vscode.Uri[] = [];
    const result = fs.readdirSync(dirPath);
    result.forEach(function(item: any) {
      const stat = fs.lstatSync(path.join(dirPath, item));
      if (stat.isFile()) {
        files.push(
          vscode.Uri.file(path.join(dirPath, item)).with({
            scheme: 'vscode-resource',
          })
        );
      }
    });
    return files;
  }

  protected getDefaultYcyImagePath() {
    return path.join(this.context.extensionPath, 'images/ycy');
  }

  protected getDefaultAudioPath() {
    return path.join(this.context.extensionPath, 'audios');
  }

  protected getConfigType(): string {
    return Utility.getConfiguration().get<string>('type', 'default');
  }

  protected getAudioEnableConfig(): string {
    return Utility.getConfiguration().get<boolean>('audioEnable', false);
  }

  protected getCustomImages() {
    return Utility.getConfiguration().get<string[]>('customImages', []);
  }

  protected getCustomAudios() {
    return Utility.getConfiguration().get<string[]>('customAudios', []);
  }

  public getTitle(): string {
    return Utility.getConfiguration().get<string>('title', '');
  }
}
