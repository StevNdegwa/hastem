import { shallow, ShallowWrapper } from "enzyme";
import { Main } from "./Main";
import { Wrapper, Content, LoginButton } from "./styles";

describe("Test <Main/>", () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => (wrapper = shallow(<Main />)));

  test("contains a 'Wrapper' element", () => {
    expect(wrapper.find(Wrapper)).toHaveLength(1);
  });

  test("contains a 'Content' element", () => {
    expect(wrapper.find(Content)).toHaveLength(1);
  });

  test("Contains at least 1 a 'LoginButton'", () => {
    expect(wrapper.find(LoginButton).length).toBeGreaterThanOrEqual(1);
  });

  test("contains 'Google Login' button", () => {
    expect(
      wrapper.findWhere(
        (comp: ShallowWrapper) => comp.text() === "Login with google"
      ).length
    ).toBeGreaterThanOrEqual(1);
  });
});
