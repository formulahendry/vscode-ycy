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
        setInterval(() => {
            let string=[
                '愿所有程序员都可以被这个世界温柔以待 ——超越鼓励师',
                '所有善良的程序员都该被上天所厚爱 ——超越鼓励师',
                '小哥哥~ 代码写久了，该休息啦~ ——超越鼓励师',
                "你真伟大 ——超越鼓励师",
                "该吃饭啦! ——超越鼓励师",
                "又在调BUG呢!加油哦~么么哒 ——超越鼓励师",
                "如果没能一次成功，那就叫它1.0版吧 ——超越鼓励师",
                "你找出这个bug人家就跟你走 ——超越鼓励师",
                "愿头发依旧茂密 ——超越鼓励师"
                
            ]

            vscode.window.showInformationMessage(string[Math.floor(Math.random() * string.length)])
           // ReminderView.show();
        }, 1000 * 60 * 15);
    }
}