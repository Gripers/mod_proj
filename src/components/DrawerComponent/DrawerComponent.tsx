import { ReactNode } from 'react';

import { Drawer, Box } from '@mui/material';

const DrawerComponent = ({
  children,
  isOpened,
}: {
  children: ReactNode;
  isOpened: boolean;
}) => {
  return (
    <Drawer
      anchor='left'
      open={isOpened}
      classes={{ paperAnchorLeft: 'drawer__box' }}
    >
      <Box>{children}</Box>
    </Drawer>
  );
};

export default DrawerComponent;
