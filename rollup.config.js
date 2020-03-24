import typescript from 'rollup-plugin-typescript2';
import pkg from './package.json';

export default [
	{
		input: 'src/index.ts',
		output: {
			name: 'useFader',
			file: pkg.browser,
			format: 'umd',
			globals: {'react': 'React'}
		},
		external: ['react'],
		plugins: [
			typescript(),
		]
	},
	{
		input: 'src/index.ts',
		external: ['react'],
		plugins: [
			typescript()
		],
		output: [
			{ file: pkg.main, format: 'cjs' },
			{ file: pkg.module, format: 'es' }
		]
	}
];
