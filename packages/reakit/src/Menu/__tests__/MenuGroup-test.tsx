import * as React from "react";
import { render } from "react-testing-library";
import { MenuGroup } from "../MenuGroup";

test("render", () => {
  const { baseElement } = render(<MenuGroup />);
  expect(baseElement).toMatchInlineSnapshot(`
    <body>
      <div>
        <div
          role="group"
        />
      </div>
    </body>
  `);
});
