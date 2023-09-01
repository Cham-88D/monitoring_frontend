import NextLink from "next/link";
import { usePathname } from "next/navigation";
import {
  Box,
  Divider,
  Drawer,
  Stack,
  Typography,
} from "@mui/material";
import { Scrollbar } from "src/components/scrollbar";
import { items, others } from "./config";
import { SideNavItem } from "./side-nav-item";
import { Logo } from "../../components/logo";

export const SideNav = (props) => {
  const { open, onClose } = props;
  const pathname = usePathname();

  const content = (
    <Scrollbar
      sx={{
        height: "100%",
        "& .simplebar-content": {
          height: "100%",
        },
        "& .simplebar-scrollbar:before": {
          background: "neutral.400",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
        }}
      >
        <Box sx={{ p: 3 }}>
          <Box
            component={NextLink}
            href="/dashboard"
            sx={{
              display: "inline-flex",
              height: 72,
              width: 172,
            }}
          >
            <Logo />
          </Box>
        </Box>
        <Divider sx={{ borderColor: "neutral.700" }} />
        <Box
          component="nav"
          sx={{
            flexGrow: 1,
            px: 2,
            py: 3,
          }}
        >
          <Stack
            component="ul"
            spacing={1}
            sx={{
              listStyle: "none",
              p: 0,
              m: 0,
            }}
          >
            <Typography color="inherit" variant="menu" sx={{ ml: 5 }}>
              MENU
            </Typography>
            {items.map((item) => {
              const active = item.path ? pathname === item.path : false;

              return (
                <SideNavItem
                  active={active}
                  disabled={item.disabled}
                  external={item.external}
                  icon={item.icon}
                  key={item.title}
                  path={item.path}
                  title={item.title}
                />
              );
            })}

            <Box sx={{py:"15%"}}>

            </Box>

            <Divider sx={{ borderColor: "neutral.700" }} />
            <Typography color="inherit" variant="menu" sx={{ ml: 5 ,mt:10}}>
              OTHERS
            </Typography>
            {others.map((item) => {
              const active = item.path ? pathname === item.path : false;

              return (
                <SideNavItem
                  active={active}
                  disabled={item.disabled}
                  external={item.external}
                  icon={item.icon}
                  key={item.title}
                  path={item.path}
                  title={item.title}
                />
              );
            })}
          </Stack>
        </Box>
      </Box>
    </Scrollbar>
  );

  return (
    <Drawer
      anchor="left"
      onClose={onClose}
      open={open}
      PaperProps={{
        sx: {
          backgroundColor: "neutral.800",
          color: "common.white",
          width: 280,
        },
      }}
      sx={{ zIndex: (theme) => theme.zIndex.appBar + 100 }}
      variant="permanent"
    >
      {content}
    </Drawer>
  );
};
