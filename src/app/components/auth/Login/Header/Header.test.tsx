import { shallow, ShallowWrapper } from "enzyme";
import { Header } from "./Header";
import { Wrapper } from "./styles";

describe("Test <Header/>", () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => (wrapper = shallow(<Header />)));

  test("should contain 'Wrapper' component", () => {
    expect(wrapper.find(Wrapper)).toHaveLength(1);
  });
});
