import { css, keyframes } from '@emotion/react'
import { darken, lighten } from 'polished'

/** timing */
export const COOLDOWN_DURATION = 10
export const TICKS_PER_SECOND = 10
export const FADE_IN_DURATION = 1
// the following was needed to prevent the css animation from being too short, for unknown reasons
export const CSS_ANIMATION_CORRECTION_FACTOR = 1

/** styles */
const BASE_COLOR = '#d80065'
export const PRIMARY_COLOR = BASE_COLOR
export const SECONDARY_COLOR = '#f08'
export const UI_COLOR = lighten(0.55, SECONDARY_COLOR)

export const SHADOW_STYLE = '0 5px 3px #0003'
export const TEXT_STYLE = css`
  font-family: 'Roboto Slab', sans-serif;
  text-shadow: 0px -2px 0px ${lighten(0.4, SECONDARY_COLOR)};
  box-shadow: 0px 3px 0px ${darken(0.1, UI_COLOR)}, ${SHADOW_STYLE};
`

export const FADE_IN_KEYFRAMES = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

// const BASE_COLOR =  '#811c5c';
// const BASE_COLOR = '#b54c0b'; // '#811c5c';
// const PRIMARY_COLOR = lighten(0.63, BASE_COLOR);
// const SECONDARY_COLOR = lighten(.2, BASE_COLOR);
