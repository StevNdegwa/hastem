import { shallow, ShallowWrapper } from "enzyme";
import { Main } from "./Main";

describe("Test <Main/>", () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => (wrapper = shallow(<Main />)));

  test("contains a wrapper 'div' element", () => {
    expect(wrapper.find("div")).toHaveLength(1);
  });

  test("Contains 1 login button", () => {
    expect(wrapper.find("button")).toHaveLength(1);
  });

  test("contains 'GoogleLogin' button", () => {
    expect(
      wrapper.findWhere(
        (comp: ShallowWrapper) => comp.text() === "Login with google"
      ).length
    ).toBeGreaterThanOrEqual(1);
  });
});
