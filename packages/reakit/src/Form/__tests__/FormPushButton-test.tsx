import * as React from "react";
import { render } from "react-testing-library";
import { unstable_FormPushButton as FormPushButton } from "../FormPushButton";

test("render", () => {
  const { baseElement } = render(
    <FormPushButton
      baseId="base"
      name="a"
      value="c"
      values={{ a: ["b"] }}
      push={jest.fn()}
    />
  );
  expect(baseElement).toMatchInlineSnapshot(`
    <body>
      <div>
        <button
          id="base-a-push"
          tabindex="0"
          type="button"
        />
      </div>
    </body>
  `);
});
