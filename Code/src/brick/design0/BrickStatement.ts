import type { TBrickArgDataType, TBrickColor, TBrickCoords, TBrickExtent } from '@/@types/brick';

import { BrickModelStatement } from '../model';
import { generatePath } from '../utils/path';

// -------------------------------------------------------------------------------------------------

/**
 * @class
 * Final class that defines a statement brick.
 */
export default class BrickStatement extends BrickModelStatement {
    readonly _pathResults: ReturnType<typeof generatePath>;

    constructor(params: {
        // intrinsic
        name: string;
        label: string;
        glyph: string;
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
        connectAbove: boolean;
        connectBelow: boolean;
    }) {
        super(params);
        const argsKeys = Object.keys(this._args);
        this._pathResults = generatePath({
            hasNest: false,
            hasNotchArg: false,
            hasNotchInsTop: true,
            hasNotchInsBot: true,
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

    public get bBoxNotchInsTop(): { extent: TBrickExtent; coords: TBrickCoords } {
        return {
            extent: {
                width: this._pathResults.bBoxNotchInsTop!.extent.width * this._scale,
                height: this._pathResults.bBoxNotchInsTop!.extent.height * this._scale,
            },
            coords: {
                x: this._pathResults.bBoxNotchInsTop!.coords.x * this._scale,
                y: this._pathResults.bBoxNotchInsTop!.coords.y * this._scale,
            },
        };
    }

    public get bBoxNotchInsBot(): { extent: TBrickExtent; coords: TBrickCoords } {
        return {
            extent: {
                width: this._pathResults.bBoxNotchInsBot!.extent.width * this._scale,
                height: this._pathResults.bBoxNotchInsBot!.extent.height * this._scale,
            },
            coords: {
                x: this._pathResults.bBoxNotchInsBot!.coords.x * this._scale,
                y: this._pathResults.bBoxNotchInsBot!.coords.y * this._scale,
            },
        };
    }
}
