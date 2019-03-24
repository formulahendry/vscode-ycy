'use strict';
import * as vscode from 'vscode';
import { ReminderView } from './reminderView';

export class Scheduler {
    public constructor() {
    }

    public start() {
        setInterval(() => {
            ReminderView.show();
        }, 1000 * 10);
    }
}