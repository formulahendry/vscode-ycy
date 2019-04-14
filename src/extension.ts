'use strict';
import * as vscode from 'vscode';
import { ReminderView } from './reminderView';
import { Scheduler } from './scheduler';

export function activate(context: vscode.ExtensionContext) {
    const scheduler = new Scheduler(context);
    scheduler.start();

    context.subscriptions.push(vscode.commands.registerCommand('ycy.showReminderView', () => {
        vscode.window.showInformationMessage('超越鼓励师已恭候多时啦!');
        ReminderView.show(context);
    }));
}

export function deactivate() {
}