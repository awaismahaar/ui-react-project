import React from "react";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";
import { ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
 
export function SideBar() {
  const [open, setOpen] = React.useState(0);
 
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
 
  return (
    <Card className="h-[calc(90vh-2rem)] w-full max-w-[15rem] ml-2 shadow-xl bg-gray-900  shadow-blue-gray-900/5">
      <div className="mb-2 p-4">
        <Typography variant="h5" color="white">
          Sidebar
        </Typography>
      </div>
      <List>
        <Accordion
          open={open === 1}
          icon={
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`mx-auto h-4 w-4 transition-transform ${open === 1 ? "rotate-180" : ""}`}
            />
          }
        >
          <ListItem className="p-0" selected={open === 1}>
            <AccordionHeader onClick={() => handleOpen(1)} className="border-b-0 text-white p-3">
              <ListItemPrefix>
                <PresentationChartBarIcon color="white" className="h-5 w-5" />
              </ListItemPrefix>
              <Typography color="white" className="mr-auto font-normal">
                Dashboard
              </Typography>
            </AccordionHeader>
          </ListItem>
          <AccordionBody className="py-1">
            <List className="p-0">
              <ListItem className="text-white">
                <ListItemPrefix>
                  <ChevronRightIcon color="white" strokeWidth={3} className="h-3 w-5" />
                </ListItemPrefix>
                Analytics
              </ListItem>
              <ListItem className="text-white">
                <ListItemPrefix>
                  <ChevronRightIcon color="white" strokeWidth={3} className="h-3 w-5" />
                </ListItemPrefix>
                Reporting
              </ListItem>
              <ListItem className="text-white">
                <ListItemPrefix>
                  <ChevronRightIcon color="white" strokeWidth={3} className="h-3 w-5" />
                </ListItemPrefix>
                Projects
              </ListItem>
            </List>
          </AccordionBody>
        </Accordion>
        <Accordion
          open={open === 2}
          icon={
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`mx-auto h-4 w-4 transition-transform ${open === 2 ? "rotate-180" : ""}`}
            />
          }
        >
          <ListItem className="p-0 text-white" selected={open === 2}>
            <AccordionHeader onClick={() => handleOpen(2)} className="border-b-0 text-white p-3">
              <ListItemPrefix>
                <ShoppingBagIcon color="white" className="h-5 w-5" />
              </ListItemPrefix>
              <Typography color="white" className="mr-auto font-normal">
                E-Commerce
              </Typography>
            </AccordionHeader>
          </ListItem>
          <AccordionBody className="py-1">
            <List className="p-0">
              <ListItem className="text-white">
                <ListItemPrefix>
                  <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                </ListItemPrefix>
                Orders
              </ListItem>
              <ListItem className="text-white">
                <ListItemPrefix>
                  <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                </ListItemPrefix>
                Products
              </ListItem>
            </List>
          </AccordionBody>
        </Accordion>
        <hr className="my-2 border-blue-gray-50 bg-white text-white" />
        <ListItem className="text-white">
          <ListItemPrefix>
            <InboxIcon color="white" className="h-5 w-5" />
          </ListItemPrefix>
          Inbox
          <ListItemSuffix>
            <Chip value="14" size="sm" variant="ghost" color="white" className="rounded-full" />
          </ListItemSuffix>
        </ListItem>
        <ListItem className="text-white">
          <ListItemPrefix>
            <UserCircleIcon color="white" className="h-5 w-5" />
          </ListItemPrefix>
          Profile
        </ListItem>
        <ListItem className="text-white">
          <ListItemPrefix>
            <Cog6ToothIcon  color="white" className="h-5 w-5" />
          </ListItemPrefix>
          Settings
        </ListItem>
        <ListItem className="text-white">
          <ListItemPrefix>
            <PowerIcon color="white" className="h-5 w-5" />
          </ListItemPrefix>
          Log Out
        </ListItem>
      </List>
    </Card>
  );
}
