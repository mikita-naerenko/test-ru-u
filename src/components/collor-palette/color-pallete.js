import { ChromePicker } from 'react-color';
import { useDispatch } from 'react-redux';
import { removeColor } from '../../store/paletteSlice';
import { useColorPalette } from './use-color-palette'; 
import { WrapperChromePicker, 
         MainContainer, 
         PaletteContainer, 
         ColorsContainer, 
         ColorBox, 
         RemoveButton, 
         AddColorButton 
} from './style'



const ColorPalette = () => {


  const {
    colors,
    currentColor,
    selectedColorIndex,
    pickerRef,
    handleColorChange,
    handleAddColor,
    setSelectedColorIndex,
    setCurrentColor
  } = useColorPalette();


  const dispatch = useDispatch();


  return (
    <MainContainer>
      <PaletteContainer>
        <AddColorButton onClick={handleAddColor}>Добавить цвет</AddColorButton>
        <ColorsContainer>
          {colors.map((color, index) => (
            <ColorBox key={index} style={{ backgroundColor: color }} onClick={() => { setSelectedColorIndex(index); setCurrentColor(color); }}>
              <RemoveButton onClick={(e) => { e.stopPropagation(); dispatch(removeColor(index)); }}>X</RemoveButton>
            </ColorBox>
          ))}
        </ColorsContainer>
      </PaletteContainer>
      {selectedColorIndex !== null && (
        <WrapperChromePicker ref={pickerRef}>
          <ChromePicker color={currentColor} onChangeComplete={(color) => handleColorChange(color, selectedColorIndex)} />
        </WrapperChromePicker>
      )}
    </MainContainer>
  );
};

export default ColorPalette;
