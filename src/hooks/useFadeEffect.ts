/* eslint-disable indent */
import React from 'react';

const TIMEOUT = 1000;

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case 'start': {
      return {
        isTransitioning: true,
        shouldBeVisible: action.shouldBeVisible,
      };
    }
    case 'finish': {
      return {
        isTransitioning: false,
        shouldBeVisible: state.shouldBeVisible,
      };
    }
    default: {
      return state;
    }
  }
};

export const _popoverStyles = {
  opacity: 0,
  transitionDuration: '300ms',
  transitionProperty: 'opacity',
  transitionTimingFunction: 'cubic-bezier(0, 0, 1, 1)',
};

export const _popoverVisibleStyles = {
  opacity: 1,
  transitionDuration: '300ms',
  transitionTimingFunction: 'cubic-bezier(0, 0, 1, 1)',
};

export const useFadeEffect = (visible: boolean) => {
  const ref = React.useRef(null);
  const visibleRef = React.useRef(false);
  const [state, setState] = React.useReducer(reducer, {
    isTransitioning: false,
    shouldBeVisible: false,
  });

  const { isTransitioning, shouldBeVisible } = state;
  const hiddenRef: any = React.useRef(null);
  const showRef: any = React.useRef(null);

  React.useEffect(() => {
    return () => {
      if (hiddenRef.current !== undefined) {
        clearTimeout(hiddenRef.current);
      }
      if (showRef.current !== undefined) {
        window.cancelAnimationFrame(showRef.current);
      }
    };
  }, []);

  const handleFinish = React.useCallback(() => {
    setState({
      type: 'finish',
    });
    if (hiddenRef.current !== undefined) {
      clearTimeout(hiddenRef.current);
      hiddenRef.current = undefined;
    }
  }, []);

  const handleStart = React.useCallback(
    (visible: boolean) => {
      if (showRef.current !== undefined) {
        window.cancelAnimationFrame(showRef.current);
      }

      showRef.current = window.requestAnimationFrame(() => {
        setState({
          shouldBeVisible: visible,
          type: 'start',
        });

        showRef.current = undefined;

        if (hiddenRef.current !== undefined) {
          clearTimeout(hiddenRef.current);
          hiddenRef.current = setTimeout(handleFinish, TIMEOUT);
        }
      });
    },
    [handleFinish],
  );

  React.useEffect(() => {
    if (visibleRef.current !== visible && (!visible || ref.current !== undefined)) {
      handleStart(visible);
      visibleRef.current = visible;
    }
  }, [visible, handleStart]);

  const _ref = React.useCallback(
    (_re: any) => {
      const _elm: any = ref.current;

      ref.current = _re;
      if (_re !== null) {
        if (_re.addEventListener !== null) {
          _re.addEventListener('transitionend', handleFinish);
          _re.addEventListener('webkitTransitionEnd', handleFinish);
        }

        if (visibleRef.current) {
          handleStart(true);
        }
      } else if (_elm !== null && _elm.removeEventListener !== null) {
        _elm.removeEventListener('transitionend', handleFinish);
        _elm.removeEventListener('webkitTransitionEnd', handleFinish);
      }
    },
    [handleFinish, handleStart],
  );
  const _isTransitioning = isTransitioning || shouldBeVisible || visible;
  return [_isTransitioning, shouldBeVisible, _ref];
};
