'use strict';
import * as vscode from 'vscode';
import * as path from 'path';

export class ReminderView {
    private static panel: vscode.WebviewPanel | undefined;

    public static show(context: vscode.ExtensionContext) {
        if (this.panel) {
            this.panel.reveal();
        } else {
            this.panel = vscode.window.createWebviewPanel("ycy", "杨超越", vscode.ViewColumn.Two, {
                enableScripts: true,
                retainContextWhenHidden: true,
            });

            const imagePath = vscode.Uri.file(path.join(context.extensionPath, 'images', 'ycy0.png'))
                .with({ scheme: 'vscode-resource' });

            this.panel.webview.html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>杨超越</title>
</head>
<body>
    <div><h1>小哥哥~ 代码写久了，该休息啦~</h1></div>
    <div><img src="${imagePath}"></div>
</body>
</html>`;

            this.panel.onDidDispose(() => {
                this.panel = undefined;
            });
        }
    }
}