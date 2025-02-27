import * as colorTool from '../../../../src/tool/color';

describe('colorTool', function () {

	([
		['rgba(17, 163, 69)', [17, 163, 69, 1]],
		['rgba(17, 163, 69, 0.5)', [17, 163, 69, 0.5]],
		['rgb(17, 163, 69)', [17, 163, 69, 1]],
		['rgb(2, 163, 254, 1)', [2, 163, 254, 1]],
		['#14c4ba00', [20, 196, 186, 0]],
		['#14c4ba', [20, 196, 186, 1]],
		['#07f0', [0, 119, 255, 0]],
		['#07f', [0, 119, 255, 1]],
		['red', [255, 0, 0, 1]],
		['blue', [0, 0, 255, 1]]
	] as [string, number[]][]).forEach(([colorStr, colorRes]) => {
		it(`'${colorStr}' should be converted to [${colorRes.join(', ')}]`, function () {
			expect(colorTool.parse(colorStr)).toEqual(colorRes);
		});
	});
});
