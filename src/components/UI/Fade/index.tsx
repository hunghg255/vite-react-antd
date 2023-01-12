import { useFadeEffect, _popoverStyles, _popoverVisibleStyles } from '@/hooks/useFadeEffect';
import React from 'react';

const Fade = ({ children, visible }: { children: React.ReactNode; visible: boolean }) => {
  const [_isTransitioning, shouldBeVisible, refModal] = useFadeEffect(visible);

  return (
    <>
      {_isTransitioning && (
        <div ref={refModal} style={shouldBeVisible ? _popoverVisibleStyles : _popoverStyles}>
          {children}
        </div>
      )}
    </>
  );
};

export default Fade;
