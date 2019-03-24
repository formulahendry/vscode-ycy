'use strict';
import * as vscode from 'vscode';

export class ReminderView {
    private static panel: vscode.WebviewPanel | undefined;

    public static show() {
        if (this.panel) {
            this.panel.reveal();
        } else {
            this.panel = vscode.window.createWebviewPanel("ycy", "杨超越", vscode.ViewColumn.Two, {
                enableScripts: true,
                retainContextWhenHidden: true,
            });

            this.panel.webview.html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>杨超越</title>
</head>
<body>
    <div><h1>小哥哥~ 代码写久了，该休息啦~</h1></div>
    <div><img src="https://s2.ax1x.com/2019/03/24/AYSOv8.png"></div>
</body>
</html>`;

            this.panel.onDidDispose(() => {
                this.panel = undefined;
            });
        }
    }
}