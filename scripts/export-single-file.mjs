import { readFile, readdir, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

const dist = join(process.cwd(), 'dist');
const assets = join(dist, 'assets');
const page = await readFile(join(dist, 'index.html'), 'utf8');
const files = await readdir(assets);
const cssFile = files.find((file) => file.endsWith('.css'));
const jsFile = files.find((file) => file.endsWith('.js'));
const svgFile = files.find((file) => file.endsWith('.svg'));

if (!cssFile || !jsFile || !svgFile) {
  throw new Error('단일 파일 추출에 필요한 CSS, JavaScript, SVG 파일을 찾을 수 없습니다.');
}

const [css, js, svg] = await Promise.all([
  readFile(join(assets, cssFile), 'utf8'),
  readFile(join(assets, jsFile), 'utf8'),
  readFile(join(assets, svgFile)),
]);
const svgUrl = `data:image/svg+xml;base64,${svg.toString('base64')}`;
const embeddedJs = js.replaceAll(`./assets/${svgFile}`, svgUrl);
const singleFile = page
  .replace(/\s*<script[^>]*src="[^"]+"[^>]*><\/script>/, '')
  .replace(/\s*<link[^>]*href="[^"]+"[^>]*>/, '')
  .replace('</head>', `    <style>${css}</style>\n  </head>`)
  .replace('</body>', `    <script type="module">${embeddedJs}</script>\n  </body>`);

await writeFile(join(dist, 'index.html'), singleFile, 'utf8');
console.log('dist/index.html: 단일 공유 파일 생성 완료');
