import styled from '@emotion/styled'
import { lighten, opacify, saturate } from 'polished'
import { FONT_STYLE, PRIMARY_COLOR } from '../../constants/constants'

export const Progress = styled.progress<{ isComplete?: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 39px; // 5.1vh;
  border-radius: 0;
  &::-webkit-progress-bar {
    background: transparent;
  }
  &::-webkit-progress-value {
    background: ${({ isComplete }) =>
      saturate(
        1,
        lighten(0.3, opacify(-0.3, isComplete ? '#fff' : PRIMARY_COLOR)),
      )};
    border-bottom: ${({ isComplete }) =>
      `1.5px solid ${saturate(
        1,
        lighten(0.6, opacify(-0.3, isComplete ? '#fff' : PRIMARY_COLOR)),
      )}`};
    box-shadow: ${({ isComplete }) =>
      isComplete ? '0 0 2px 3px #fffb, inset 0 0 80px 6px #fff' : 'none'};
    transition: background-color 0.2s, box-shadow 0.3s;
    animation-play-state: running;
  }
`

export const ProgressFullSize = styled.progress<{ isComplete?: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh; // 5.1vh;
  border-radius: 0;
  &::-webkit-progress-bar {
    background: transparent;
  }
  &::-webkit-progress-value {
    background: ${({ isComplete }) =>
      saturate(1, lighten(0.3, opacify(-0.9, isComplete ? '#fff' : '#eee')))};
    box-shadow: ${({ isComplete }) =>
      isComplete ? '0 0 2px 3px #fff3, inset 0 0 80px 6px #fff3' : 'none'};
    transition: background-color 0.2s, box-shadow 0.3s;
    animation-play-state: running;
    border-right: 2px solid #ddd3;
  }
`

export const TaskTitle = styled.div`
  width: fit-content;
  font-weight: bolder;
  ${FONT_STYLE};
  text-align: center;
  opacity: 1;
  box-shadow: 0px 3px 0px #0003;
  font-size: 2.2em;
  position: fixed;
  left: 50%;
  background: #222d;
  border-radius: 3px;
  border-top: none;
  top: 0;
  margin: 0.5em 0 0;
  padding: 0.1em 0.5em;
  transform: translateX(-50%);
  &:hover: {
    background: #0000;
  }
`
