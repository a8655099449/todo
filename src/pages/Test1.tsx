import { Button } from "antd";
import React from "react";
import { useHistory } from "react-router";

export default function Test1(props) {
  console.log("👴2021-07-02 17:08:18 Test1.tsx line:7", props);

  const history = useHistory();

  return (
    <div>
      <Button
        onClick={() => {
          history.push({
            pathname: "/test2",
            state: {
              a: 1,
              b: 2,
            },
          });
        }}
      >
        测试按钮1
      </Button>
    </div>
  );
}

export function Test2(props) {

  console.log('👴2021-07-02 18:02:07 Test1.tsx line:31',props)
  return <div>Test2</div>;
}
export function Test3() {
  return <div>Test3</div>;
}

export const Test1Chilredn1 = (props) => {
  return <div>Test1Chilredn</div>;
};

export const Test1Chilredn2 = (props) => {
  return <div>Test1Chilredn2</div>;
};
export const Test1Chilredn3 = (props) => {
  return <div>Test1Chilredn3</div>;
};
