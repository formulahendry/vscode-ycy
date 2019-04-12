'use strict';
import * as vscode from 'vscode';
import { ReminderView } from './reminderView';
import { Scheduler } from './scheduler';

export function activate(context: vscode.ExtensionContext) {
    const scheduler = new Scheduler(context);
    scheduler.start();

    let imageNameArray = ['cxk_ball.gif','cxk_band.gif','cxk_blossom.gif','cxk_dyz.gif','cxk_gong.gif','cxk_hit.gif','cxk_king.gif','cxk_matches.gif','cxk_RUOK.gif','cxk_xgk.gif','cxk.gif'];

    context.subscriptions.push(vscode.commands.registerCommand('cxk.setReminderView', () => {
            ReminderView.show(context,imageNameArray[Math.floor(Math.random()*11)]);
    }));
    
    context.subscriptions.push(vscode.commands.registerCommand('cxk.showReminderView', () => {
        ReminderView.show(context);
    }));
}

export function deactivate() {
}