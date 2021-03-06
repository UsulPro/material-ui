import * as React from 'react';
import { ReferenceObject } from 'popper.js';
import { PortalProps } from '../Portal';
import { TransitionProps } from '../transitions/transition';

export type PopperPlacementType =
  | 'bottom-end'
  | 'bottom-start'
  | 'bottom'
  | 'left-end'
  | 'left-start'
  | 'left'
  | 'right-end'
  | 'right-start'
  | 'right'
  | 'top-end'
  | 'top-start'
  | 'top';

export interface PopperProps extends React.HTMLAttributes<HTMLDivElement> {
  transition?: boolean;
  anchorEl?: null | HTMLElement | ReferenceObject | ((element: HTMLElement) => HTMLElement);
  children: (
    props: {
      placement: PopperPlacementType;
      TransitionProps?: TransitionProps;
    },
  ) => React.ReactElement<any>;
  container?: PortalProps['container'];
  disablePortal?: PortalProps['disablePortal'];
  keepMounted?: boolean;
  modifiers?: Object;
  open: boolean;
  placement?: PopperPlacementType;
  popperOptions?: Object;
}

declare const Popper: React.ComponentType<PopperProps>;

export default Popper;
