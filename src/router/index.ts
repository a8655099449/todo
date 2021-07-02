import React from "react";
import Test1, { Test1Chilredn1, Test2, Test3 } from "../pages/Test1";
import Welcome from "../pages/Welcome";

export type routeItem = {
  path: string;
  children?: routeItem[];
  component?: React.FC;
  name?: string;
};

let router: routeItem[] = [
  {
    path: "/",
    component: Welcome,
    name: "首页",
  },
  {
    path: "/test1/:id",
    component: Test1,
    name: "测试1",
    children: [
      {
        path: "/test1/1",
        name: "测试1的子项目1",
        component: Test1Chilredn1,
      },

      {
        path: "test1/2",
        name: "测试1的子项目2",
        component: Test1Chilredn1,
      },

      {
        path: "test1/3",
        name: "测试1的子项目3",
        component: Test1Chilredn1,
      },
    ],
  },
  {
    path: "/test2",
    component: Test2,
    name: "测试2",
  },
  {
    path: "/test3",
    component: Test3,
    name: "测试3",
  },
  
];

export {};
export default router;
