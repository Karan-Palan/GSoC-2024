import type { TBrickArgDataType, TBrickColor, TBrickCoords, TBrickExtent } from '@/@types/brick';

import { BrickModelData } from '../model';
import { generatePath } from '../utils/path';

// -------------------------------------------------------------------------------------------------

/**
 * @class
 * Final class that defines a data brick.
 */
export default class BrickData extends BrickModelData {
    readonly _pathResults: ReturnType<typeof generatePath>;

    constructor(params: {
        // intrinsic
        name: string;
        label: string;
        glyph: string;
        dataType: TBrickArgDataType;
        dynamic: boolean;
        value?: boolean | number | string;
        input?: 'boolean' | 'number' | 'string' | 'options';
        // style
        colorBg: TBrickColor;
        colorFg: TBrickColor;
        outline: TBrickColor;
        scale: number;
    }) {
        super(params);
        this._pathResults = generatePath({
            hasNest: false,
            hasNotchArg: true,
            hasNotchInsTop: false,
            hasNotchInsBot: false,
            scale: this._scale,
            innerLengthX: 100,
            argHeights: [],
        });
    }

    public get SVGpath(): string {
        return this._pathResults.path;
    }

    public get bBoxBrick(): { extent: TBrickExtent; coords: TBrickCoords } {
        const { extent, coords } = this._pathResults.bBoxBrick;
        return {
            extent: {
                width: extent.width * this._scale,
                height: extent.height * this._scale,
            },
            coords: {
                x: coords.x * this._scale,
                y: coords.y * this._scale,
            },
        };
    }

    public get bBoxNotchArg(): { extent: TBrickExtent; coords: TBrickCoords } {
        const { extent, coords } = this._pathResults.bBoxNotchArg!;
        return {
            extent: {
                width: extent.width * this._scale,
                height: extent.height * this._scale,
            },
            coords: {
                x: coords.x * this._scale,
                y: coords.y * this._scale,
            },
        };
    }
}
