import type { TBrickArgDataType, TBrickColor, TBrickCoords, TBrickExtent } from '@/@types/brick';

import { BrickModelExpression } from '../model';
import { generatePath } from '../utils/path';

// -------------------------------------------------------------------------------------------------

/**
 * @class
 * Final class that defines an expression brick.
 */
export default class BrickExpression extends BrickModelExpression {
    readonly _pathResults: ReturnType<typeof generatePath>;

    constructor(params: {
        // intrinsic
        name: string;
        label: string;
        glyph: string;
        dataType: TBrickArgDataType;
        args: Record<
            string,
            {
                label: string;
                dataType: TBrickArgDataType;
                meta: unknown;
            }
        >;
        // style
        colorBg: TBrickColor;
        colorFg: TBrickColor;
        outline: TBrickColor;
        scale: number;
    }) {
        super(params);
        const argsKeys = Object.keys(this._args);
        this._pathResults = generatePath({
            hasNest: false,
            hasNotchArg: true,
            hasNotchInsTop: false,
            hasNotchInsBot: false,
            scale: this._scale,
            innerLengthX: 100,
            argHeights: Array.from({ length: argsKeys.length }, () => 17),
        });
    }

    public get SVGpath(): string {
        return this._pathResults.path;
    }

    public get bBoxBrick(): { extent: TBrickExtent; coords: TBrickCoords } {
        return {
            extent: {
                width: this._pathResults.bBoxBrick.extent.width * this._scale,
                height: this._pathResults.bBoxBrick.extent.height * this._scale,
            },
            coords: {
                x: this._pathResults.bBoxBrick.coords.x * this._scale,
                y: this._pathResults.bBoxBrick.coords.y * this._scale,
            },
        };
    }

    public get bBoxArgs(): Record<string, { extent: TBrickExtent; coords: TBrickCoords }> {
        const argsKeys = Object.keys(this._args);
        const result: Record<string, { extent: TBrickExtent; coords: TBrickCoords }> = {};

        argsKeys.forEach((key, index) => {
            result[key] = {
                extent: {
                    width: this._pathResults.bBoxArgs.extent.width * this._scale,
                    height: this._pathResults.bBoxArgs.extent.height * this._scale,
                },
                coords: {
                    x: this._pathResults.bBoxArgs.coords[index].x * this._scale,
                    y: this._pathResults.bBoxArgs.coords[index].y * this._scale,
                },
            };
        });

        return result;
    }

    public get bBoxNotchArg(): { extent: TBrickExtent; coords: TBrickCoords } {
        return {
            extent: {
                width: this._pathResults.bBoxNotchArg!.extent.width * this._scale,
                height: this._pathResults.bBoxNotchArg!.extent.height * this._scale,
            },
            coords: {
                x: this._pathResults.bBoxNotchArg!.coords.x * this._scale,
                y: this._pathResults.bBoxNotchArg!.coords.y * this._scale,
            },
        };
    }
}
