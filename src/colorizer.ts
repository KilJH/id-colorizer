import { stringToUTF8Byte } from './byteUtil';
import { Color, RGBAColor } from './types/color';

export class Colorizer {
	$palette: string[] = ['#aa3333', '#33aa33', '#3333aa'];

	constructor() {}

	private convertHexToDecArray(hex: string, alpha?: number): RGBAColor {
		if (alpha && (alpha > 255 || alpha < 0)) return [0, 0, 0];

		if (hex.length !== 7) return [0, 0, 0];

		const r = parseInt(hex.slice(1, 3), 16);
		const g = parseInt(hex.slice(3, 5), 16);
		const b = parseInt(hex.slice(5, 7), 16);

		return [r, g, b, alpha ?? 255];
	}

	setPalette(palette: string[]) {
		this.$palette = palette;
	}

	colorize(id: string | number): Color {
		if (typeof id === 'string') {
			const bytes = stringToUTF8Byte(id);
			return this.$palette[
				bytes.reduce((a, b) => a + b, 0) % this.$palette.length
			];
		}
		if (typeof id === 'number') {
			return this.$palette[id % this.$palette.length];
		}

		throw new Error('param type is error');
	}

	colorizeDec(id: string | number): RGBAColor {
		return this.convertHexToDecArray(this.colorize(id));
	}
}
