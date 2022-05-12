// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile6 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile7 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile9 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile10 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile11 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile13 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile14 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile8 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile12 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`10001000050505050504040405010105010b0c010202020205040404050101050f100d0f0202020205040401050101050a020e040505020205040404050101050a020e040305020205050505050101050a020e040305020202020202020101050a020e010305020202020202020101050a020e010305020202020202020101050a020e010105020205050505050505050a020e010105020205030303010403080a020e010105060705030303030404080a020e010105020205050505050502020202020501050202020202020202020202020202040502020202020202020202020202020405050505050505050505050505050501040403040404030303030303030303`, img`
. . . . . . . . 2 . . 2 2 2 2 2 
. . . . 2 . . . 2 . . 2 . . . 2 
. . . . 2 . . . 2 . . 2 . . . 2 
2 2 . . 2 2 2 2 2 . . 2 . . . 2 
. 2 . . . . . . . . . 2 . . . 2 
. 2 . . . . . . . . . 2 . . . 2 
. 2 . . . . . . . . . 2 . . . 2 
. 2 . . . . . . . . . 2 . . . 2 
. 2 . . 2 2 2 2 2 2 2 2 . . . 2 
. 2 . . 2 2 2 2 2 2 2 2 . . . 2 
. 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
. 2 . . 2 . . . . . . . . . . 2 
. 2 . . . . . . . . . . . . . . 
. 2 . . . . . . . . . . . . . . 
. 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
. . . . . . . . 2 . . 2 . . . . 
`, [myTiles.transparency16,sprites.castle.tileGrass2,sprites.castle.tilePath5,sprites.castle.tileGrass1,sprites.castle.tileGrass3,sprites.builtin.forestTiles0,myTiles.tile6,myTiles.tile7,sprites.builtin.forestTiles8,myTiles.tile8,sprites.castle.tilePath4,myTiles.tile9,myTiles.tile11,myTiles.tile12,sprites.castle.tilePath6,myTiles.tile13,myTiles.tile14], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile0":
            case "tile2":return tile2;
            case "myTile":
            case "tile1":return tile1;
            case "myTile1":
            case "tile3":return tile3;
            case "myTile2":
            case "tile4":return tile4;
            case "myTile3":
            case "tile5":return tile5;
            case "tile6":return tile6;
            case "tile7":return tile7;
            case "tile9":return tile9;
            case "tile10":return tile10;
            case "tile11":return tile11;
            case "tile13":return tile13;
            case "tile14":return tile14;
            case "tile8":return tile8;
            case "tile12":return tile12;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
