import styled from 'styled-components';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useTheme();
  const isLight = theme === 'light';

  return (
    <ToggleButton onClick={toggleTheme} isLight={isLight}>
      <IconWrapper isActive={isLight}>
        🌝
      </IconWrapper>
      <IconWrapper isActive={!isLight}>
        🌚
      </IconWrapper>
      <Slider isLight={isLight} />
    </ToggleButton>
  );
};

export default ThemeToggleButton;

const ToggleButton = styled.button<{ isLight: boolean }>`
  position: absolute;
  top: 10px;
  right: 30px;
  width: 100px;
  height: 40px;
  background: ${({ theme }) => theme.bgColor}; 
  border-radius: 20px;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: space-around;
  cursor: pointer;
  padding: 0 5px;
  transition: background 0.3s ease; 

  &:focus {
    outline: none;
    box-shadow: none;
  }
`;

const IconWrapper = styled.div<{ isActive: boolean }>`
  font-size: 20px;
  z-index: 2;
  user-select: none;
  color: ${({ isActive, theme }) => isActive ? theme.textColor : `${theme.textColor}80`};
  transition: color 0.3s ease; 
`;

const Slider = styled.div<{ isLight: boolean }>`
  position: absolute;
  width: 36px;
  height: 36px;
  background: ${({ isLight }) => (isLight ? "#f39c12" : "#34495e")};
  border-radius: 18px;
  top: 2px;
  left: ${({ isLight }) => (isLight ? "9px" : "54px")};
  transition: left 0.3s ease, background 0.3s ease;
  z-index: 1;
`;

