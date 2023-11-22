import range from "range";
import Tile from "./tile/tile";
import "./map.css"
import React, {CSSProperties} from "react";

export interface Style extends CSSProperties {
    "--map-size": number
}

function Map() {
    const map_len = 128

    let tiles = range.range(0, map_len * map_len).map(
            (i: number) => <Tile id={i}></Tile>
        )

    return <div className="map" style={{
            "--map-size": map_len
        } as Style}>
        {tiles}
    </div>
}

export default Map