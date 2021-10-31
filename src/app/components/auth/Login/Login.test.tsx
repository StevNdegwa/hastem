import { ReactWrapper, mount } from "enzyme";
import { Login } from "./Login";
import { Main } from "./Main";
import { Header } from "./Header";

describe("Test <Login/>", () => {
  let wrapper: ReactWrapper;

  beforeEach(() => (wrapper = mount(<Login />)));
  afterEach(() => wrapper.unmount());

  test("contains the 'PageLayout' component", () => {
    expect(wrapper.find("PageLayout")).toHaveLength(1);
  });

  test("contains 'Main' component", () => {
    expect(wrapper.find(Main)).toHaveLength(1);
  });

  test("contains 'Header' component", () => {
    expect(wrapper.find(Header)).toHaveLength(1);
  });
});
