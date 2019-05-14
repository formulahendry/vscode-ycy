'use strict';
import * as vscode from 'vscode';
import Asset from './asset';

export class ReminderView {
  private static panel: vscode.WebviewPanel | undefined;

  public static show(context: vscode.ExtensionContext) {
    let asset: Asset = new Asset(context);

    const imagePath = asset.getImageUri();
    const title = asset.getTitle();
    const audioPath = asset.getAudioUri();

    if (this.panel) {
      this.panel.webview.html = this.generateHtml(imagePath, title, audioPath);
      this.panel.reveal();
    } else {
      this.panel = vscode.window.createWebviewPanel(
        'ycy',
        '杨超越',
        vscode.ViewColumn.Two,
        {
          enableScripts: true,
          retainContextWhenHidden: true,
        }
      );
      this.panel.webview.html = this.generateHtml(imagePath, title, audioPath);
      this.panel.onDidDispose(() => {
        this.panel = undefined;
      });
    }
  }

  protected static generateHtml(
    imagePath: vscode.Uri | string,
    title: string,
    audioPath: vscode.Uri | string = ''
  ): string {
    const audioSnippet =
      audioPath &&
      `
        <iframe src="${audioPath}" allow="autoplay" id="audio" style="display:none"></iframe>
        <audio id="player" autoplay style="display:none;">
            <source src="${audioPath}" type="audio/mpeg">
        </audio>`;
    let html = `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>杨超越</title>
        </head>
        <body>
            <div><h1>${title}</h1></div>
            <div><img src="${imagePath}"></div>
            ${audioPath && audioSnippet}
        </body>
        </html>`;

    return html;
  }
}
