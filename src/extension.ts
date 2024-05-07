// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "stack" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let sennou = vscode.commands.registerCommand('stack.洗脳', () => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		vscode.window.showInformationMessage('Stack は素晴らしい!　'.repeat(100));
	});

	let run = vscode.commands.registerCommand('stack.実行', () => {
		let path = vscode.window.activeTextEditor?.document.uri.fsPath;
		let interpreter = vscode.workspace.getConfiguration().get<string>('stack');
		const terminal = vscode.window.createTerminal('Stack');
		terminal.sendText(`${interpreter} ${path}`);
		terminal.show();
	});

	let debug = vscode.commands.registerCommand('stack.デバッグ', () => {
		let path = vscode.window.activeTextEditor?.document.uri.fsPath;
		let interpreter = vscode.workspace.getConfiguration().get<string>('stack');
		const terminal = vscode.window.createTerminal('Stack');
		terminal.sendText(`${interpreter} ${path} --debug`);
		terminal.show();

	});

	context.subscriptions.push(sennou);
	context.subscriptions.push(run);
}

// This method is called when your extension is deactivated
export function deactivate() {
	vscode.window.showInformationMessage('やだー！');
}
