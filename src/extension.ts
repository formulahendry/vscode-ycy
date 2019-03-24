'use strict';
import * as vscode from 'vscode';
import { ReminderView } from './reminderView';
import { Scheduler } from './scheduler';

export function activate(context: vscode.ExtensionContext) {
    const scheduler = new Scheduler();
    scheduler.start();

    context.subscriptions.push(vscode.commands.registerCommand('ycy.showReminderView', () => {
        ReminderView.show();
    }));
}

export function deactivate() {
}