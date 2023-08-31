import { css } from 'lit';

export default css`
:host {
  display: block;
  height: 100%;
  overflow-y: auto;
  font-size: 1.4rem;
  box-sizing: border-box;
}

header {
  display: flex;
  align-items: baseline;
}

h3 {
  padding: 0;
  margin: 0 1rem 0 0;
  font-size: 1.6rem;
}

h4 {
  font-size: 1.4rem;
}

ul {
  padding: 0 0 2rem 0;
  list-style: none;
}

li {
  padding: 0 0 1rem 0;
}

li a {
  font-size: 1.6rem;
  text-decoration: none;
  color: var(--shareLinkColor);
}

li a * {
  display: inline-block;
  padding: .2rem;
  margin-right: 1rem;
  vertical-align: middle;
  border: 1px solid var(--shareIconBorder);
  border-radius: 7px;
  background: var(--shareIconBg);
}

.embed {
  display: none;
}
.embed.visible {
  display: block;
  width: 95%;
}

.embed a {
  color: var(--shareLinkColor);
}

.code {
  position: relative;
}

textarea {
  display: block;
  width: 100%;
  height: 120px;
  padding: .8rem 1rem;
  box-sizing: border-box;
  resize: none;
  cursor: pointer;
  font: normal 1.4rem "Helvetica Neue", Helvetica, Arial, sans-serif;
  color: var(--textareaColor, #fff);
  background: var(--textareaBg, #151515);
}

small {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 3rem;
  padding: .5rem 1rem;
  box-sizing: border-box;
  font: normal 1.2rem/2rem "Helvetica Neue", Helvetica, Arial, sans-serif;
  color: var(--textareaBg, #151515);
  background: var(--textareaColor, #fff);
  opacity: 0;
  transition: opacity 300ms linear;
}
small.visible {
  opacity: 1;
}
`;
