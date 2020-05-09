// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect';
import { renderHook, act } from "@testing-library/react-hooks";
import {render, cleanup, fireEvent, getByTestId, waitForElement, screen, wait} from '@testing-library/react'

global.render = render;
global.cleanup = cleanup;
global.fireEvent = fireEvent;
global.getByTestId = getByTestId;
global.waitForElement = waitForElement;
global.screen = screen;
global.act = act;
global.renderHook = renderHook;
global.wait = wait;