'use strict';
import * as vscode from "vscode";
import { ReminderView } from './reminderView';
import { Utility } from './utility';

export class Scheduler {
    public constructor(private context: vscode.ExtensionContext) {
    }

    public start() {
        setInterval(() => {
            ReminderView.show(this.context);
        }, 1000 * 60 * Utility.getConfiguration().get<number>('reminderViewIntervalInMinutes', 60));
    }
}