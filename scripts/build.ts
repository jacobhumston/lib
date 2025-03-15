import { build } from 'bun';
import { exec } from 'node:child_process';
import { stdout } from 'node:process';
import fs from 'node:fs';

function step(...args: any[]) {
    console.log('>', ...args);
}

step('Cleaning build directory...');
if (!fs.existsSync('build')) {
    fs.mkdirSync('build');
} else {
    fs.rmSync('build', { recursive: true });
    fs.mkdirSync('build');
}

step('Building bundle...');
await build({
    entrypoints: ['src/index.ts'],
    outdir: 'build',
    target: 'browser',
    minify: true,
    sourcemap: 'inline',
    format: 'esm',
});

step('Renaming bundle...');
fs.renameSync('build/index.js', 'build/bundle.js');

step('Building library...');
await new Promise((resolve, reject) => {
    const process = exec('bun x tsc --build --verbose true');
    process.stdout?.pipe(stdout);
    process.once('exit', resolve);
    process.once('error', reject);
});

step('Done!');
