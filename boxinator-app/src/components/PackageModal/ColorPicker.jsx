import { useState } from "react";
import { SketchPicker } from "react-color"
import "../PackageModal/colorpicker.css"

const ColorPicker = () => {

    const [color, setColor] = useState('#ff0000');


    return (
        <div>
            <SketchPicker
            color={color}
            onChangeComplete={ (color) => {setColor(color.hex)}}        
            />


        </div>
    )

}

export default ColorPicker;