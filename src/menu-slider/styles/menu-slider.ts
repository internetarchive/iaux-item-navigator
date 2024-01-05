import { css } from 'lit';

const menuButtonWidth = css`42px`;
const sliderWidth = css`var(--menuWidth, 320px)`;
const transitionTiming = css`var(--animationTiming, 200ms)`;

export default css`
  .main {
    overflow: hidden;
    width: 100%;
    height: 100%;
  }

  .animate {
    transition: transform ${transitionTiming} ease-out;
  }

  .menu {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: ${sliderWidth};
    padding: 0.5rem 0.5rem 0 0;
    box-sizing: border-box;
    font-size: 1.4rem;
    color: var(--primaryTextColor);
    background: var(--menuSliderBg);
    transform: translateX(calc(${sliderWidth} * -1));
  }

  .menu > button.close {
    right: 0.7rem;
  }

  button {
    cursor: pointer;
  }

  header {
    margin: 0 0 0.5rem 0;
  }

  header * {
    margin: 0;
    display: inline-block;
  }
  header button {
    cursor: pointer;
  }

  header.with-secondary-action .details {
    width: 80%;
  }

  header .details {
    font-weight: bold;
    width: 88%;
  }

  header .custom-action > *,
  button.close {
    padding: 0;
    background-color: transparent;
    border: 0;
    --iconWidth: var(--menuSliderHeaderIconWidth);
    --iconHeight: var(--menuSliderHeaderIconHeight);
  }

  header .custom-action,
  button.close {
    position: absolute;
  }
  button.close {
    right: 0.5rem;
  }

  button.close * {
    float: right;
  }

  .content {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: ${menuButtonWidth};
    z-index: 1;
    transform: translateX(calc(${sliderWidth} * -1));
    transition: transform ${transitionTiming} ease-out;
    background: var(--activeButtonBg);
    border-right: 0.2rem solid;
    border-color: var(--subpanelRightBorderColor);
    padding: 0.5rem 0 0 0.5rem;
    display: flex;
    flex-direction: column;
  }

  .open {
    transform: translateX(0);
  }

  .menu-list {
    padding: 0;
    margin: 0;
    list-style: none;
    background: var(--menuSliderBg);
  }
  .menu-list li {
    margin-bottom: 0.2rem;
  }

  .content > section {
    overflow: auto;
    overscroll-behavior: contain;
  }
`;
