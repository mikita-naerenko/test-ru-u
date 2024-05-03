import { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addColor, updateColor } from '../../store/paletteSlice';

export function useColorPalette() {
  const colors = useSelector(state => state.palette.colors);
  const dispatch = useDispatch();
  const [currentColor, setCurrentColor] = useState('');
  const [selectedColorIndex, setSelectedColorIndex] = useState(null);
  const pickerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (pickerRef.current && !pickerRef.current.contains(event.target)) {
        setSelectedColorIndex(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleColorChange = (color, index) => {
    setCurrentColor(color.hex);
    dispatch(updateColor({ color: color.hex, index }));
  };

  const handleAddColor = () => {
    const newColor = '#ffffff';
    dispatch(addColor(newColor));
    setSelectedColorIndex(colors.length);
    setCurrentColor(newColor);
  };

  return {
    colors,
    currentColor,
    selectedColorIndex,
    pickerRef,
    handleColorChange,
    handleAddColor,
    setSelectedColorIndex,
    setCurrentColor
  };
}
